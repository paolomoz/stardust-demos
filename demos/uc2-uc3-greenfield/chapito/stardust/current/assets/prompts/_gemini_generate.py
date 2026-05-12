#!/usr/bin/env python3
"""
Generate a bottle-label PNG from a prompt file via Gemini 3 Pro Image Preview.

Usage:
  OGLA_API_KEY=... python3 _gemini_generate.py <prompt-file.txt> <output.png> [--ratio 3:4]

Reads the prompt text, calls the Gemini image-generation endpoint, decodes the
returned base64 image, writes the PNG to the output path. Exits non-zero on
API error, prints the error verbatim.
"""
import argparse, base64, json, os, sys
from urllib import request, error

MODEL = "gemini-3-pro-image-preview"
ENDPOINT = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("prompt_file")
    p.add_argument("output_path")
    p.add_argument("--ratio", default="3:4",
                   help="Aspect ratio for imageConfig (default 3:4 — closest to 4:5)")
    args = p.parse_args()

    key = os.environ.get("OGLA_API_KEY")
    if not key:
        print("ERROR: OGLA_API_KEY not set in environment", file=sys.stderr)
        return 2

    with open(args.prompt_file) as f:
        prompt_text = f.read()

    body = {
        "contents": [{"parts": [{"text": prompt_text}]}],
        "generationConfig": {
            "responseModalities": ["IMAGE"],
            "imageConfig": {"aspectRatio": args.ratio},
        },
    }
    req = request.Request(
        f"{ENDPOINT}?key={key}",
        data=json.dumps(body).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with request.urlopen(req, timeout=120) as resp:
            payload = json.loads(resp.read())
    except error.HTTPError as e:
        msg = e.read().decode("utf-8", errors="replace")
        print(f"ERROR HTTP {e.code}: {msg}", file=sys.stderr)
        return 3
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        return 4

    # Find the first inlineData image part.
    parts = (payload.get("candidates", [{}])[0]
                    .get("content", {})
                    .get("parts", []))
    image_b64 = None
    for part in parts:
        inline = part.get("inlineData") or part.get("inline_data")
        if inline and inline.get("data"):
            image_b64 = inline["data"]
            break
    if not image_b64:
        print("ERROR: no image data in response", file=sys.stderr)
        print(json.dumps(payload, indent=2)[:2000], file=sys.stderr)
        return 5

    img_bytes = base64.b64decode(image_b64)
    with open(args.output_path, "wb") as f:
        f.write(img_bytes)
    print(f"wrote {args.output_path} ({len(img_bytes):,} bytes)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
