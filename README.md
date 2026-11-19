# MIRISE XR AR demo（合成データ・研究試作）

スマホで卓上ARを試すための静的デモです。中身は**合成の100 mmゲージ2部品**、利用者が公開可能なサンプルとして提供した**口腔内スキャン（上下歯列、PLY）**、公開データベース BodyParts3D から作った**頭蓋骨・歯・脳の標準モデル**（透視ミラー用）だけです。症例データは含みません。臨床使用不可。

- `index.html`：3D表示（`gauge.glb` を読み込み）と、iPhone/iPad（Quick Look）・Android（Scene Viewer）のAR起動ボタン
- `gauge.usdz`：iPhone/iPad用（Safariで直接開くとQuick Look）
- `gauge.glb`：Android用・3D表示用

ファイルは MIRISE XR Studio（tomyorts/miraise-obesity-clinic の `mirise-xr-studio/`）で、STLを「mm」と確定して取り込んだ合成ゲージのsnapshotから生成した卓上AR用出力です（等倍・床置き、全体 110×60×40 mm）。
ARの「等倍」は拡大縮小の制限で、実物・患者との位置一致を意味しません。実機での動作は未確認です。

| ファイル | sha256 |
|---|---|
| gauge.usdz | 1ef8f9786ae7d1b0fa899072429c86f2f48a663bc977076384f7abddc2c34376 |
| gauge.glb | 52ce90353f73faf00f1796eb6b80fb336ad8e3d2a74d40258ed73a91fc08d1ba |

公開ページです。URLを知っていれば誰でも見られるため、ここに患者データを置かないでください。

## 歯列サンプル（teeth.html）

| ファイル | sha256 | 内容 |
|---|---|---|
| teeth.usdz | 6fc90bf3651f834d8cd3fd9da9695c972bda4a80615e983e3d3055a978a349f0 | iPhone/iPad用。頂点カラーをJPEGテクスチャに焼き込み、表示用に軽量化（約9 MB） |
| teeth.glb | b994bcdce0934420a14df2b4e984a347f1116bf234903cb3499422b10337f2dd | Android・3D表示用。頂点カラー COLOR_0、表示用に軽量化（約2 MB） |

PLY（mm）を Z-up→Y-up で取り込み、上下の位置関係を保ったまま床置き・等倍で書き出しています。

表示用の軽量化：上顎 23.7万→4万、下顎 17.2万→4万三角形（meshoptimizer、境界固定）。元スキャンの全頂点から軽量化後の表面までの実測距離は中央値 0.003–0.004 mm、最大 0.093 mm。

## 透視ミラー（skull.html）

カメラ（イン・アウト）に映した顔に、頭蓋骨・歯・脳の**標準的な解剖モデル**を重ねて表示するページです。口を開けると下顎骨が動きます。
ご本人の骨や脳を写すものではありません。研究試作・臨床使用不可。

- ブラウザだけで動きます（インストール不要）。必要なファイルはすべてこのリポジトリから読み込み、ほかのサーバーは使いません。
- 映像はブラウザの中だけで処理し、送信も保存もしません。ページのコンテンツセキュリティポリシーで、自分の置き場所以外への通信を禁止しています。
- 顔追跡ライブラリ（MediaPipe）には利用統計（映像は含まない）を Google に送る機能が入っていますが、取り除いて同梱しています（`skull/pipeline/README.md` の「顔追跡ライブラリの利用統計について」）。
- 画像ができるのは「撮影」を押したときだけです。顔が写った画像になるので、取り扱いに注意してください。
- 操作：透視の深さ（皮膚→骨→脳）、全体／半分／のぞき窓、立体／X線風、部位名（日本語・英語）、撮影、イン・アウト切替、パソコンは F キーで全画面。

確認した範囲と、未確認の範囲：

- 確認済み（ヘッドレス Chrome・ソフトウェア描画）：公開されている顔の動画（正面・横向き・上下の首振り）での重なり具合、あくびの動画でのあごの開閉、擬似カメラでの開始・カメラ切替・カメラを許可しなかったときの案内、80秒動かして外部への通信の試みが0件であること。公開後のページ（GitHub Pages）でも、配信されているファイルが手元と同一であること、擬似カメラで動作すること、外部への通信の試みが0件であることを確認（2026-11-19）。
- 未確認：iPhone・iPad・Android・パソコンの実機カメラでの動作、iOS Safari での動作、実機での動きのなめらかさ、正面を向いた人が大きく口を開けたときの見え方。
- 制約：顔の縦横の比率に合わせてモデルを伸縮しますが、標準モデルなので位置や大きさは目安です。前後の傾きに数度、横顔の奥行きに数 mm のずれが出ることがあります。対応する顔は1人分。iPhone・iPad は iOS 16.4 以降。初回の読み込みは転送量で約 9 MB（展開後は約 20 MB）。

| ファイル | sha256 | 内容 |
|---|---|---|
| skull.html | 12508931340bc4a2424ce91c28301acfdd20b9bb7f26b4bc39db9933ba4cd18f | ページ本体 |
| skull/app.js | 4f2594915ed344b08f49685f2132d552b39f907f82b72219c787392f4dd1b458 | プログラム（`skull/src/` をまとめたもの。three.js・MediaPipe Tasks Vision・meshoptimizer デコーダーを同梱） |
| skull/app.css | 0affa9c516e2247af598d379cd4ed52cbd2002f4e0a10060031d45fd0990749f | 見た目 |
| skull/anatomy.glb | 2edc4e5f78d0342a67ffe5bc76c30904f832d1a06c73aa14727fbaa855b68f87 | 解剖モデル（約 23.6万三角形、meshopt 圧縮、約 1.1 MB） |
| skull/anatomy.json | 18379959f248be23bf6ff96e00f253ef79ba62016136b0f93bf77d401c1085f5 | 部位名の位置、顎関節の位置、顔ランドマークの基準位置など |
| skull/selftest.jpg | 768f038088025a4832313441bbc53edb37be0f9479fdd9a319f21f635f21b0ee | 起動時に顔追跡の動作を確かめる画像（モデル自身の頭部の描画） |
| skull/mp/vision_wasm_internal.wasm | 225bc06c0f51a9cf31fea0e9e0b0243e9e01fb5ef332cc1a7fa6656dbdfdaabf | 顔追跡エンジン（npm `@mediapipe/tasks-vision` 1.2.3 のまま） |
| skull/mp/vision_wasm_internal.js | 2aa5fd3fdd3d8208cd7587df0bb19fb6925c4ea16a76dd025aedc1f64d6a6309 | 同上 |
| skull/mp/face_landmarker.task | 64184e229b263107bc2b804c6625db1341ff2bb731874b0bcc2fe6544e0bc9ff | 顔追跡モデル（公式の配布物のまま） |

作り方と確認の手順は `skull/pipeline/README.md` にあります。`skull/pipeline/rebuild.sh` を実行すると、元データの取得から上の表のファイルの作り直しと照合までを行います（作成環境で一致を確認済み）。

出典とライセンス（全文は `skull/LICENSES.txt`）：

- 解剖モデル：**BodyParts3D, © ライフサイエンス統合データベースセンター licensed under CC 表示-継承 2.1 日本**。リリース3.0の頭蓋の各骨・下顎骨・歯・脳の部品を軽量化し、陰影を焼き込み、顔追跡の座標系に合わせて変換しています。加工後の `skull/anatomy.glb`・`skull/anatomy.json`・`skull/selftest.jpg` も同じライセンスで公開します。
- 顔の追跡：MediaPipe Tasks Vision、Face Landmarker モデル（Apache License 2.0）。描画：three.js（MIT License）。圧縮：meshoptimizer（MIT License）。
