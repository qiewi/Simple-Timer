# TIME-ME
TIME-ME adalah aplikasi berbasis React Native yang dirancang untuk menghitung mundur waktu dengan fitur seperti start, pause, resume, stop, dan menampilkan "Time's Up!" ketika waktu habis. Proyek ini dibangun dengan pendekatan modular untuk memisahkan logika aplikasi dan meningkatkan keterbacaan serta pemeliharaan kode.

# Struktur Folder
TIME-ME/
│
├── components/
│   ├── Timer.js
│   ├── styles.js
│
├── App.js
├── README.md

# Penjelasan File

## 1. App.js
Fungsi:

File ini adalah pusat dari aplikasi yang bertanggung jawab mengatur alur utama aplikasi.
Menangani input waktu dari pengguna (menit dan detik) yang akan disimpan ke dalam state minutes dan seconds.

Mengelola status aplikasi seperti:
• isRunning: Menentukan apakah timer sedang berjalan.
• isPaused: Menentukan apakah timer sedang dijeda.
• isTimeUp: Menentukan apakah waktu telah habis.
• Mengatur tampilan antarmuka utama, termasuk input waktu dan tombol seperti Start, Reset, dan tombol untuk kontrol saat timer berjalan.
• Berinteraksi dengan Timer.js untuk menjalankan logika timer dan menangani pengelolaan waktu.

## 2. components/Timer.js
Fungsi:

File ini bertugas menjalankan logika utama timer, seperti:
• Menghitung mundur waktu dari total detik yang tersisa (remainingSeconds).
• Mengatur fungsi Pause, Resume, Stop, dan Back to Menu.
• Menampilkan pesan "Time's Up!" ketika waktu telah habis.
• Berinteraksi dengan App.js melalui props untuk:
• Menerima data input waktu dan status aplikasi.
• Mengembalikan data seperti detik tersisa setelah timer berhenti.

## 3. components/styles.js
Fungsi:

File ini mengatur semua aspek tampilan aplikasi, seperti warna, ukuran teks, dan tata letak tombol.
• Menentukan gaya untuk elemen-elemen seperti:
• Timer countdown (angka waktu yang berjalan).
• Tombol-tombol seperti Start, Stop, dan Pause.
• Pesan "Time's Up!".

Menggunakan React Native StyleSheet untuk membuat gaya yang konsisten dan responsif.

# Cara Kerja TIME-ME

## Input Waktu:

Pengguna memasukkan nilai menit dan detik pada layar awal. Nilai ini disimpan dalam state minutes dan seconds.

## Mulai Timer:

Saat tombol Start ditekan, nilai input waktu dikonversi menjadi total detik (remainingSeconds). Timer mulai berjalan, dan setiap detik nilai remainingSeconds berkurang hingga mencapai 0.

## Pause dan Resume:

Jika tombol Pause ditekan, timer akan berhenti sementara tanpa mengatur ulang waktu. Ketika tombol Resume ditekan, timer akan melanjutkan hitungan dari detik terakhir.

## Stop Timer:

Jika tombol Stop ditekan, timer akan berhenti sepenuhnya dan waktu kembali ke nilai yang terakhir dimasukkan oleh pengguna.

## Reset Timer:

Jika tombol Reset ditekan, nilai waktu diatur ulang ke default (0 menit 30 detik).

## Time's Up:

Ketika waktu habis, aplikasi menampilkan pesan "Time's Up!" bersama tombol Back to Menu untuk kembali ke layar input.
