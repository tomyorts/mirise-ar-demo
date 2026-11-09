# MIRISE XR AR demo（合成データ・研究試作）

スマホで卓上ARを試すための静的デモです。中身は**合成の100 mmゲージ2部品**と、利用者が公開可能なサンプルとして提供した**口腔内スキャン（上下歯列、PLY）**だけです。症例データは含みません。臨床使用不可。

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
