# Sintaksis Hunter T2

Permainan ulang kaji Sintaksis KSSM Tingkatan 2.

## V0.1

- Nama murid, kelas dan kod permainan
- 10 soalan tahap sederhana tinggi hingga sukar
- Skor, combo, ketepatan dan kedudukan
- Paparan papan kedudukan
- Rekod jawapan salah
- Huraian kesalahan
- Pusat pembetulan dengan mata pemulihan
- Reka bentuk responsif untuk telefon dan komputer
- Skema Supabase untuk pemain, cubaan, pembetulan dan leaderboard masa nyata

## Uji secara tempatan

Buka `index.html` terus dalam pelayar.

## Cloudflare Pages

Tetapkan root directory kepada:

`sintaksis-hunter-t2`

Build command: kosong

Output directory: `.`

## Multiplayer sebenar

1. Cipta projek Supabase.
2. Jalankan `supabase-schema.sql` dalam SQL Editor.
3. Tambahkan URL projek dan anon key kepada konfigurasi aplikasi.
4. Aktifkan Realtime untuk jadual `players`.

## Fasa seterusnya

- Sambungan Supabase sebenar
- 100 soalan penuh dalam 10 world
- Teacher dashboard
- Export keputusan
- Kod bilik berasingan
- Sistem senjata, hint dan boss battle
