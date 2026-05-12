#!/usr/bin/env python3
"""
Post-process a Gemini-generated bottle PNG into a transparent + tightly-cropped asset.

1. Reads the raw PNG (assumed: bottle on flat cream #fffaef background)
2. Keys out cream → alpha 0 using two-threshold soft keying
3. Crops to the bounding box of non-transparent pixels with a small padding
4. Saves the result.

Usage:
  python3 _postprocess_bottle.py <raw.png> <output.png>
"""
import sys
from PIL import Image
import numpy as np

CREAM = np.array([255, 250, 239], dtype=float)
INNER, OUTER = 20.0, 60.0  # soft-key thresholds (Euclidean distance from cream)
PAD = 16  # px padding around bbox

def main(src: str, dst: str) -> int:
    img = Image.open(src).convert("RGBA")
    arr = np.array(img)
    rgb = arr[:, :, :3].astype(float)
    dist = np.sqrt(np.sum((rgb - CREAM) ** 2, axis=2))
    alpha = np.clip((dist - INNER) / (OUTER - INNER), 0.0, 1.0)
    arr[:, :, 3] = (alpha * 255).astype(np.uint8)

    # bbox of non-transparent pixels
    mask = arr[:, :, 3] > 8
    if not mask.any():
        print(f"WARN: no non-transparent pixels in {src}", file=sys.stderr)
        return 2
    rows = np.where(mask.any(axis=1))[0]
    cols = np.where(mask.any(axis=0))[0]
    y0, y1 = max(0, rows[0] - PAD), min(arr.shape[0], rows[-1] + 1 + PAD)
    x0, x1 = max(0, cols[0] - PAD), min(arr.shape[1], cols[-1] + 1 + PAD)
    cropped = arr[y0:y1, x0:x1]
    Image.fromarray(cropped).save(dst)
    print(f"wrote {dst} {cropped.shape[1]}x{cropped.shape[0]}")
    return 0

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("usage: _postprocess_bottle.py <raw.png> <output.png>")
        sys.exit(1)
    sys.exit(main(sys.argv[1], sys.argv[2]))
