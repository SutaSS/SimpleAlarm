# SimpleAlarm

SimpleAlarm adalah aplikasi **alarm sederhana berbasis web** yang dibuat dengan **HTML, Tailwind CSS, dan JavaScript**.  
Aplikasi ini memungkinkan pengguna untuk:

Menyetel alarm berdasarkan waktu  
Menggunakan suara alarm kustom  
Membatalkan alarm  
Menampilkan animasi gambar saat alarm berbunyi

## Fitur

- Input waktu alarm dengan format jam:menit:detik  
- Pilih file audio untuk suara alarm (opsional)  
- Gambar telur → berubah menjadi ayam saat alarm berbunyi  
- Tombol **Set Alarm** dan **Matikan Alarm**  
- Status alarm dengan tampilan tanggal & waktu terkini

## Cara Menggunakan

1. **Clone repo ini**
   ```bash
   git clone https://github.com/SutaSS/SimpleAlarm.git
   cd SimpleAlarm
Jalankan server lokal

- Pakai Tailwind output hasil build (src/output.css)
- Jalankan lewat server lokal:
  ```
  npx serve
  # atau
  python -m http.server
  ```
Buka di browser
Buka:
```
http://localhost:3000
Atur alarm
```

1. Pilih waktu alarm
2. (Opsional) Pilih suara alarm
3. Klik Set Alarm
4. Alarm akan berbunyi dan animasi gambar berubah saat waktu tercapai

📂 Struktur Folder
```
├── assets/               # Gambar dan suara default
├── src/
│   ├── domain/           # Domain logic (Alarm entity)
│   ├── usecase/          # Business logic pengecekan alarm
│   ├── infrastructure/   # Audio player
│   ├── presentation/     # UI helper
│   └── app.js            # Entry point aplikasi
├── index.html            # Halaman utama
└── output.css            # Hasil build Tailwind
```

Teknologi
🧰 HTML, JavaScript (ES Modules)
🎨 Tailwind CSS
📅 Tanggal & waktu lokal (ID)
