# 透視ミラーの作り方（再現手順）

`skull.html`（透視ミラー）の配布ファイルを、公開されている元データから作り直すための手順です。
決まった手順どおりに実行すれば、誰が作っても同じファイルになることを目標にしています。

## 1. 用意するもの

| 道具 | 確認した版 |
|---|---|
| Python | 3.13（パッケージは `requirements.txt` の版） |
| Node.js / npm | 22 / 10（パッケージは各 `package-lock.json` の版） |
| bash、sha256sum | Linux・macOS。Windows は WSL |

通信が必要なのは、元データの取得（GitHub）と npm パッケージの取得だけです。

## 2. 作り直す（コマンド1つ）

```
cd skull/pipeline
pip install -r requirements.txt
./rebuild.sh
```

最後に「完了: 配布ファイルは記録と一致しました。」と表示されれば、リポジトリに置いてあるファイルと同じものができています（`SHA256SUMS` と照合）。

確認した範囲：作成環境（Linux x86-64）で、何もない状態からこの手順を実行し、すべて一致することを確認しました（2026-11-19）。
ほかの機種やOSでは、陰影の計算の端数の違いで `anatomy.glb` が一致しないことがあり得ます。その場合は「FAILED」と表示されます（未確認）。

## 3. 手順の中身

`rebuild.sh` は次の順に実行します。

| 順 | 実行するもの | 内容 | できるもの |
|---|---|---|---|
| 1 | `fetch_sources.py` | 元データを決まった版から取得し、1ファイルずつ SHA-256 を照合 | `model/raw/*.stl`、`model/canon/` |
| 2 | `npm ci`（2か所） | 道具を `package-lock.json` どおりの版で入れる | `node_modules/` |
| 3 | `model/tools/build_meshes.py` | 骨21部品・下顎骨・歯28本・脳の部品を選び、形を保ったまま三角形を減らす（meshoptimizer、最大誤差 0.35 mm） | `model/cache/meshes_h.pkl` |
| 4 | `model/tools/bake_ao.py` | くぼみが暗く見える陰影を頂点の色として計算（乱数の種は固定） | `model/cache/ao.pkl` |
| 5 | `model/tools/build_assets.py`、`model/node/pack.mjs` | 顔追跡の座標系（cm）に変換し、部位名の位置・顎関節の位置などをまとめ、圧縮 | `skull/anatomy.glb`、`skull/anatomy.json` |
| 6 | （コピー） | 顔追跡エンジンを npm パッケージから置き直す | `skull/mp/vision_wasm_internal.*` |
| 7 | `web/default_fit.mjs`、`web/build.mjs` | 平均的な顔に対する初期の伸縮率を求め、`skull/src/` を1ファイルにまとめる | `skull/app.js`、`skull.html` の版表示 |
| 8 | `sha256sum -c SHA256SUMS` | 記録済みの値と照合 | ― |

版の文字列（説明画面の「版」）は中身から計算した値だけで決まります。日付は入れていないので、同じ入力からは同じファイルになります。

### 顔追跡ライブラリの利用統計について

MediaPipe Tasks Vision には、利用統計（機能の種類、処理の回数、所要時間、OSの種類など。映像は含まない）を1分ごと、および終了時に Google のサーバーへ送る機能が入っています。
このページは外部と通信しない約束なので、`web/build.mjs` の `LIB_PATCHES` で、まとめる時にその機能を止めています。

- ライブラリの版を上げて該当箇所が見つからなくなると、ビルドはエラーで止まります（気づかずに送信機能が戻ることを防ぐため）。
- まとめた `app.js` に他サーバーの宛先が残っていないかも、ビルドの最後に調べます。
- それとは別に、ページ側でもコンテンツセキュリティポリシーで自分の置き場所以外への通信を禁止しています（二重の対策）。

## 4. 位置合わせの定数（`model/calib/`）

解剖モデルを顔追跡の座標系に合わせるための値です。一度求めたものを固定して使います。

| ファイル | 内容 | 求め方 |
|---|---|---|
| `condyles.npy` | 左右の下顎頭の中心と頂点（mm）。あごの回転軸は左右の中心を通る | `make_calib_inputs.py`：下顎骨の後方で最も高い頂点を頂点とし、その下 8 mm・水平 10 mm 以内の頂点の平均を中心とする |
| `L_h.npy` | 顔追跡の468点が、モデル自身の皮膚の上でどこに当たるか（cm） | `calibrate.py`：同じデータセットの皮膚（頭部）を63通りの向き・距離で描画して顔追跡にかけ、描画の奥行きから皮膚上の3次元位置を求める。`calib_final.py` で正面に近いものの中央値をとる |
| `T_final.npy` | モデルの座標 → 顔追跡の基準顔の座標への変換（拡大 1.0645、前後の傾き −0.78°） | `calib_final.py`：動かない部分（額・鼻・目のまわり・頬）の中央寄りの267点で、基準顔との位置合わせを計算 |

向きは形の位置合わせだけで決め、顔の縦横の比率の個人差は、ページが実行時にモデルを伸縮して合わせます（`skull/src/solver.js`）。
顔追跡は、顔の比率の違いを「うつむき」と解釈する性質があるため、追跡結果の向きをそのまま使うと頭蓋骨が後ろに傾きます。詳しくは `calib_final.py` の冒頭に書いてあります。

計算し直して採用値と比べるには：

```
./rebuild.sh --calibrate
```

採用値は書き換えません。結果は `model/cache/` にでき、差が表示されます。作成環境では3つとも採用値と完全に一致しました。
値を入れ替えるときは、`model/cache/` の3ファイルを `model/calib/` にコピーして `./rebuild.sh` を実行し、「6. ファイルを変更したとき」の手順で記録を更新します。

`skull/selftest.jpg`（起動時に顔追跡が本当に動くかを確かめる画像。モデル自身の頭部の描画）は `make_selftest.py` で作れます。

## 5. 確認のしかた（`checks/`）

顔追跡の結果からモデルの位置・伸縮・あごの角度を求める計算だけを確かめる（ブラウザ不要）：

```
node checks/test_solver.mjs
```

ブラウザで動かして確かめる（ヘッドレス Chrome）：

```
cd checks
npm install
npx playwright install chromium
```

| スクリプト | 確かめること |
|---|---|
| `FAKE_CAMERA=顔の動画.y4m node camtest.mjs ok` | カメラの開始から表示まで、カメラ切替、説明画面 |
| `FAKE_CAMERA=… node camtest2.mjs flip`、`… denied` | イン／アウト切替、カメラを許可しなかったときの案内 |
| `FAKE_CAMERA=… node longrun.mjs 80` | 80秒動かして、外部への通信の試みが0件であること（`csp violations: []`、`non-local []`） |
| `FAKE_CAMERA=… node enginetest.mjs` | 顔の読み取り方式（GPU／CPU）の切り替え |
| `node steps.mjs _test/動画.mp4 名前 0.5,1.7` | 動画の決まった時刻の表示を画像に保存（`THROUGH=1` で途中のコマも順に処理） |
| `node track.mjs _test/動画.mp4 0 4 12 名前` | コマごとの向き・あごの角度・ずれの数値 |
| `node shots.mjs 名前 390 780 2 "" '[{"wait":4000,"shot":"start"}]'` | 画面の大きさを指定した見た目の確認 |

- 検証用の動画はリポジトリ直下の `_test/` に置きます。このフォルダーは git の管理外です（`.gitignore`）。**人の顔が写った動画や、そこから作った記録は公開しないでください。**
- `FAKE_CAMERA` は Chrome の擬似カメラ用の動画（`.y4m` か `.mjpeg`）です。例：`ffmpeg -i 動画.mp4 -vf scale=640:480 -pix_fmt yuv420p 出力.y4m`
- 画像や数値は `checks/out/` にできます（git の管理外）。
- 動画の中で口を大きく開けている区間を探すには、`python3 model/tools/scan_video.py 動画.mp4 出力.json` を使います。
- 実際の動画であごの動きを確かめるには、`python3 checks/record_video.py 動画.mp4 記録.json` で顔追跡の出力を記録し、`node checks/test_solver.mjs 記録.json` を実行します。

これまでに確認したのは、ヘッドレス Chrome（ソフトウェア描画）での動作です。実機（iPhone・iPad・Android・パソコンのカメラ）での動作は、このフォルダーの確認には含まれていません。

## 6. ファイルを変更したとき

`skull/src/`、`skull/app.css`、`skull.html` を変えたら、まとめ直して記録を更新します。

```
cd skull/pipeline
node web/build.mjs ../..
cd ../..
sha256sum skull.html skull/app.css skull/app.js skull/src/build.gen.js skull/anatomy.glb skull/anatomy.json skull/selftest.jpg skull/mp/face_landmarker.task skull/mp/vision_wasm_internal.js skull/mp/vision_wasm_internal.wasm > skull/pipeline/SHA256SUMS
```

リポジトリ直下の `README.md` にある sha256 の表も同じ値に直します。

## 7. 元データと版

| もの | 版・取得元 | ライセンス |
|---|---|---|
| BodyParts3D リリース3.0（STL） | [Kevin-Mattheus-Moerman/BodyParts3D](https://github.com/Kevin-Mattheus-Moerman/BodyParts3D) の `2c83c698`、`assets/BodyParts3D_data/stl/` | CC 表示-継承 2.1 日本 |
| MediaPipe の基準顔モデルと重み | [google-ai-edge/mediapipe](https://github.com/google-ai-edge/mediapipe) の `ed8e9660`、`mediapipe/modules/face_geometry/data/` | Apache License 2.0 |
| 顔追跡モデル `face_landmarker.task` | `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`（sha256 `64184e22…`、公式の配布物と一致を確認） | Apache License 2.0 |
| 顔追跡エンジン | npm `@mediapipe/tasks-vision` 1.2.3（`vision_wasm_internal.*` は無変更） | Apache License 2.0 |
| three.js | npm `three` 0.187.0 | MIT License |
| meshoptimizer、glTF Transform | npm `meshoptimizer` 1.3.0、`@gltf-transform/*` 4.5.1（作成時の道具） | MIT License |
| esbuild | npm `esbuild` 0.28.2（作成時の道具） | MIT License |

クレジット表示：BodyParts3D, © ライフサイエンス統合データベースセンター licensed under CC 表示-継承 2.1 日本

ライセンスの全文は `skull/LICENSES.txt` にあります。`skull/anatomy.glb` などの加工後のデータも、同じ「CC 表示-継承 2.1 日本」で公開しています。

## 8. フォルダーの構成

```
skull.html                 ページ本体
skull/app.js, app.css      まとめたプログラムと見た目
skull/anatomy.glb, .json   解剖モデルと、その付帯情報
skull/selftest.jpg         顔追跡の動作確認用の画像
skull/mp/                  顔追跡エンジンとモデル（同じ置き場所から読み込む）
skull/src/                 プログラムの元（main, view, anatomy, solver, tracker, camera, labels, assets）
skull/pipeline/            この手順一式
  fetch_sources.py           元データの取得と照合
  rebuild.sh                 作り直しと照合
  SHA256SUMS                 配布ファイルの記録
  model/tools/               モデルを作るスクリプト（Python）
  model/node/                軽量化と圧縮（Node.js）
  model/calib/               位置合わせの定数（採用値）
  model/raw/                 部品の一覧と SHA-256（STL 本体は取得して置く。git の管理外）
  web/                       ページのプログラムをまとめる
  checks/                    確認用のスクリプト
```
