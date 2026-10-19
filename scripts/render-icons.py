"""Regenerate the favicons: python3 scripts/render-icons.py static
(static/favicon.svg is the SMALL variant as SVG; update both together.)

Rasterise the Ashbright mark to PNG/ICO with no dependencies.
Geometry matches Logo.svelte: diamond rings |x-50|+|y-50| = 45 and 28 (stroked),
centre diamond radius 10 (filled), horizontal cut at y = 55..60, gradient
ember -> ash -> sky from (30,8) to (72,92)."""
import zlib, struct, sys, math

STOPS = [(0.0, (0xE0, 0x87, 0x6B)), (0.5, (0xB9, 0xCC, 0xE9)), (1.0, (0x6F, 0xB8, 0xD9))]
BG = (0x0E, 0x12, 0x17)
G0, G1 = (30, 8), (72, 92)
GD = (G1[0]-G0[0], G1[1]-G0[1]); GL = GD[0]**2 + GD[1]**2

def grad(x, y):
    t = max(0.0, min(1.0, ((x-G0[0])*GD[0] + (y-G0[1])*GD[1]) / GL))
    for (a, ca), (b, cb) in zip(STOPS, STOPS[1:]):
        if t <= b:
            u = (t-a)/(b-a); return tuple(ca[i] + (cb[i]-ca[i])*u for i in range(3))
    return STOPS[-1][1]

def in_round_rect(x, y, r):
    if r <= 0: return 0 <= x <= 100 and 0 <= y <= 100
    cx = min(max(x, r), 100-r); cy = min(max(y, r), 100-r)
    return (x-cx)**2 + (y-cy)**2 <= r*r and 0 <= x <= 100 and 0 <= y <= 100

def mark_hit(mx, my, sw, band):
    top = 55 - (band-5)/2
    if top <= my <= top + band: return False
    d = abs(mx-50) + abs(my-50)
    h = sw / math.sqrt(2)          # miter-joined stroke of a diamond is another diamond band
    return abs(d-45) <= h or abs(d-28) <= h or d <= 10

def render(size, r, inset, sw, band, ss=4):
    s = (100 - 2*inset) / 100
    rows = []
    for py in range(size):
        row = bytearray([0])
        for px in range(size):
            acc = [0.0, 0.0, 0.0, 0.0]
            for sy in range(ss):
                for sx in range(ss):
                    x = (px + (sx+0.5)/ss) * 100/size
                    y = (py + (sy+0.5)/ss) * 100/size
                    if not in_round_rect(x, y, r): continue
                    mx, my = (x-inset)/s, (y-inset)/s
                    c = grad(mx, my) if mark_hit(mx, my, sw, band) else BG
                    acc[0] += c[0]; acc[1] += c[1]; acc[2] += c[2]; acc[3] += 1
            n = ss*ss; a = acc[3]
            if a == 0: row += bytes(4)
            else: row += bytes([round(acc[0]/a), round(acc[1]/a), round(acc[2]/a), round(255*a/n)])
        rows.append(bytes(row))
    raw = b''.join(rows)
    chunk = lambda t, d: struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t+d) & 0xffffffff)
    return b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0)) + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b'')

def ico(pngs):
    head = struct.pack('<HHH', 0, 1, len(pngs)); off = 6 + 16*len(pngs); entries = b''; data = b''
    for size, png in pngs:
        entries += struct.pack('<BBBBHHII', size % 256, size % 256, 0, 0, 1, 32, len(png), off + len(data)); data += png
    return head + entries + data

SMALL = dict(r=20, inset=4, sw=9, band=7)   # tab sizes: heavier lines
TOUCH = dict(r=0, inset=16, sw=6, band=5)   # iOS rounds the corners itself
APP   = dict(r=20, inset=10, sw=6, band=5)  # Android / manifest

out = sys.argv[1]
p16, p32, p48 = (render(n, **SMALL) for n in (16, 32, 48))
files = {
    'favicon-16x16.png': p16, 'favicon-32x32.png': p32,
    'favicon.ico': ico([(16, p16), (32, p32), (48, p48)]),
    'apple-touch-icon.png': render(180, **TOUCH),
    'android-chrome-192x192.png': render(192, **APP),
    'android-chrome-512x512.png': render(512, **APP, ss=3),
}
for name, b in files.items():
    open(f'{out}/{name}', 'wb').write(b); print(name, len(b))
