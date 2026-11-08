"""Re-compress site images in place (same file names) and create small "-640w" thumbnails.
Originals are kept once in img_orig/. Safe to re-run: always starts from the originals."""
import os, shutil
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
IMG, ORIG = f"{HERE}/img", f"{HERE}/img_orig"
MAX_W, MAX_H = 2400, 2000          # wide panoramas keep retina width; tall images capped
THUMB_W = 640
os.makedirs(ORIG, exist_ok=True)

def save(im, path, ext, q):
    if ext == ".webp":
        im.save(path, "WEBP", quality=q, method=6)
    elif ext in (".jpg", ".jpeg"):
        im.convert("RGB").save(path, "JPEG", quality=q, optimize=True, progressive=True)
    elif ext == ".png":
        if im.mode in ("RGBA", "LA", "P"):
            im.convert("RGBA").quantize(256, method=Image.Quantize.FASTOCTREE).save(path, "PNG", optimize=True)
        else:
            im.save(path, "PNG", optimize=True)

before = after = 0
for f in sorted(os.listdir(IMG)):
    if f.endswith("-640w.webp"):
        continue
    p, ext = f"{IMG}/{f}", os.path.splitext(f)[1].lower()
    if ext not in (".webp", ".jpg", ".jpeg", ".png"):
        continue
    o = f"{ORIG}/{f}"
    if not os.path.exists(o):
        shutil.copy2(p, o)
    src = Image.open(o); src.load()
    im = src
    if im.width > MAX_W or im.height > MAX_H:
        r = min(MAX_W / im.width, MAX_H / im.height)
        im = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
    q = 55 if f.startswith("texture-") else (74 if ext == ".webp" else 78)
    tmp = p + ".tmp" + ext
    save(im, tmp, ext, q)
    osz, nsz = os.path.getsize(o), os.path.getsize(tmp)
    if nsz < osz:
        os.replace(tmp, p)
    else:
        os.remove(tmp); shutil.copy2(o, p)
    before += osz; after += os.path.getsize(p)
    # thumbnail for cards / gallery grid
    if ext != ".png" and not f.startswith("texture-") and src.width > THUMB_W * 1.3:
        t = src.resize((THUMB_W, round(src.height * THUMB_W / src.width)), Image.LANCZOS)
        if t.mode not in ("RGB", "RGBA"):
            t = t.convert("RGBA" if "A" in t.mode else "RGB")
        t.save(f"{IMG}/{os.path.splitext(f)[0]}-640w.webp", "WEBP", quality=78, method=6)
print(f"images: {before//1024} KB -> {after//1024} KB")
