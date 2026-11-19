#!/usr/bin/env bash
# 透視ミラー: 配布ファイルを元データから作り直す（手順は README.md）。
#   ./rebuild.sh              配布ファイルを作り直し、記録済みのチェックサムと照合する
#   ./rebuild.sh --calibrate  位置合わせの定数も計算し直して、採用値（model/calib/）と比べる
set -euo pipefail
cd "$(dirname "$0")"
SKULL="$(cd .. && pwd)"; SITE="$(cd ../.. && pwd)"
CAL=0; [ "${1:-}" = "--calibrate" ] && CAL=1

echo "== 1. 元データを取得して照合"
if [ $CAL = 1 ]; then python3 fetch_sources.py --all; else python3 fetch_sources.py; fi

echo "== 2. ツールを入れる（package-lock.json どおりの版）"
(cd model/node && npm ci --no-audit --no-fund)
(cd web && npm ci --no-audit --no-fund)
mkdir -p model/cache model/out model/dist_assets

echo "== 3. 部品を軽量化して組み立てる"
python3 model/tools/make_canonical_json.py
python3 model/tools/build_meshes.py
echo "== 4. 陰影（アンビエントオクルージョン）を頂点に焼き込む"
python3 model/tools/bake_ao.py

if [ $CAL = 1 ]; then
  echo "== 4b. 位置合わせの定数を計算し直す（採用値は書き換えない）"
  python3 model/tools/make_calib_inputs.py
  python3 model/tools/calibrate.py
  python3 model/tools/calib_final.py
  python3 model/tools/compare_calib.py
  python3 model/tools/make_selftest.py
fi

echo "== 5. 顔追跡の座標系に合わせて書き出し、圧縮する"
python3 model/tools/build_assets.py
node model/node/pack.mjs model/cache/anatomy_raw.glb model/dist_assets/anatomy.glb
cp model/dist_assets/anatomy.glb model/dist_assets/anatomy.json "$SKULL/"

echo "== 6. 顔追跡エンジンを npm パッケージから置き直す"
cp web/node_modules/@mediapipe/tasks-vision/wasm/vision_wasm_internal.js web/node_modules/@mediapipe/tasks-vision/wasm/vision_wasm_internal.wasm "$SKULL/mp/"

echo "== 7. 平均的な顔への初期フィットを求め、ページのプログラムをまとめる"
node web/default_fit.mjs "$SKULL/anatomy.json" model/cache/canonical.json "$SKULL/src/solver.js"
node web/build.mjs "$SITE"

echo "== 8. 記録済みのチェックサムと照合"
(cd "$SITE" && sha256sum -c skull/pipeline/SHA256SUMS)
echo "完了: 配布ファイルは記録と一致しました。"
