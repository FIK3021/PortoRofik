# Portofolio Ahmad Rofik Harahap (React + Vite)

## Menjalankan
```
npm install
npm run dev      # pratinjau lokal
npm run build    # hasil di folder dist/
```

## File yang perlu kamu taruh
- public/foto.jpg : foto profil (sementara memakai foto dari CV; ganti jika punya yang lebih tajam)
- public/haki/sertifikat-haki.jpg : gambar sertifikat HAKI
- public/certs/ : gambar sertifikat (Dicoding dll). Tambah baris baru di `certs` untuk tiap sertifikat
- public/designs/ : karya desain, sesuaikan daftar `designs`
- public/screens/ : screenshot Simakdoro, isi `project.screenshots`
- Opsional: link kredensial per sertifikat (`url`), link GitHub (`profile.github` dan `project.links`)

Test case UAT sudah diambil dari dokumen UAT 28 Maret 2026. Username dan password uji sengaja tidak dicantumkan.

## Deploy
Unggah folder `dist/` ke Netlify, Vercel, atau GitHub Pages (memakai hash routing, tanpa konfigurasi tambahan).
