#!/usr/bin/env python3
"""
Compress PNG images to WebP format for faster web loading.
Run from project root: python3 scripts/compress_images.py
"""

import os
import subprocess
import sys

IMAGES_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "images", "services")

def ensure_pillow():
    try:
        from PIL import Image
        return True
    except ImportError:
        print("Installing Pillow...")
        result = subprocess.run([sys.executable, "-m", "pip", "install", "Pillow"], capture_output=True, text=True)
        if result.returncode != 0:
            print("Failed to install Pillow:", result.stderr)
            return False
        return True

def convert_to_webp(input_path, output_path, quality=80):
    from PIL import Image
    img = Image.open(input_path)
    img.save(output_path, "WEBP", quality=quality, method=6)
    original_kb = os.path.getsize(input_path) / 1024
    compressed_kb = os.path.getsize(output_path) / 1024
    reduction = ((original_kb - compressed_kb) / original_kb) * 100
    print(f"  {os.path.basename(input_path)}: {original_kb:.0f}KB → {compressed_kb:.0f}KB ({reduction:.0f}% smaller)")

def main():
    if not ensure_pillow():
        sys.exit(1)

    if not os.path.exists(IMAGES_DIR):
        print(f"Directory not found: {IMAGES_DIR}")
        sys.exit(1)

    png_files = [f for f in os.listdir(IMAGES_DIR) if f.lower().endswith(".png")]
    if not png_files:
        print("No PNG files found.")
        return

    print(f"Converting {len(png_files)} PNG files to WebP (quality=80)...")
    for filename in png_files:
        input_path = os.path.join(IMAGES_DIR, filename)
        output_path = os.path.join(IMAGES_DIR, filename.replace(".png", ".webp"))
        convert_to_webp(input_path, output_path)

    print("\nDone! WebP files created.")

if __name__ == "__main__":
    main()
