# Sistem Pakar Perawatan Motor Matic

Aplikasi sistem pakar sederhana untuk mendiagnosis masalah pada motor matic menggunakan metode forward chaining. Dibuat dengan Next.js, TypeScript, dan Tailwind CSS.

## Fitur

- Diagnosa masalah motor matic berdasarkan gejala yang dipilih
- Menggunakan metode forward chaining untuk menentukan masalah
- Memberikan solusi untuk masalah yang ditemukan
- Antarmuka responsif yang mudah digunakan

## Teknologi

- [Next.js](https://nextjs.org/) - Framework React untuk aplikasi web
- [TypeScript](https://www.typescriptlang.org/) - JavaScript dengan sintaks tipe data
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first

## Metode Forward Chaining

Sistem pakar ini menggunakan metode forward chaining, yaitu proses inferensi yang dimulai dari fakta-fakta (gejala) yang diketahui, kemudian mencocokkan dengan aturan untuk mendapatkan kesimpulan (diagnosis masalah).

Langkah-langkah metode forward chaining yang diimplementasikan:

1. Pengguna memilih gejala-gejala yang dialami motor
2. Sistem mengumpulkan gejala yang dipilih
3. Sistem mencocokkan gejala yang dipilih dengan aturan-aturan yang ada
4. Sistem menampilkan masalah yang teridentifikasi beserta solusinya

## Cara Menjalankan

```bash
# Install dependensi
npm install

# Jalankan server pengembangan
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat aplikasi.

## Struktur Kode

- `src/types/index.ts` - Definisi tipe data
- `src/data/expertSystem.ts` - Data gejala, masalah, dan aturan
- `src/utils/forwardChaining.ts` - Implementasi algoritma forward chaining
- `src/components/` - Komponen-komponen React
- `src/app/` - Halaman aplikasi
