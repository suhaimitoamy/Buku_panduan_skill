# Buku Panduan Trading

Website statis berisi materi pembelajaran trading yang disusun bertahap dalam format bab.  
Fokus utamanya adalah membangun cara baca market yang rapi, logis, dan terstruktur, terutama pada pendekatan:

- Smart Money Concepts (SMC)
- ICT concepts
- market structure
- liquidity
- BOS / MSS
- fair value gap
- execution dan entry model
- mindset, risk management, dan framework analisis

Project ini dibuat sebagai **learning hub trading** berbasis HTML, sehingga ringan, mudah dibuka, dan mudah dikembangkan per bab.

---

## Tujuan Project

Project ini dibuat untuk:

- menyusun materi trading dalam alur belajar yang runtut
- memisahkan tiap bab ke halaman sendiri agar mudah dirawat
- menyediakan pusat navigasi yang ringan dan jelas
- memudahkan update materi tanpa membongkar seluruh halaman utama

---

## Isi Materi

Materi dibagi ke dalam beberapa bab yang saling terhubung.

Contoh topik yang dibahas:

- cara baru melihat market
- struktur pasar
- likuiditas dan liquidity sweep
- displacement
- fair value gap
- premium dan discount
- order flow dasar
- entry model
- risk management
- psikologi trading
- review dan penyusunan framework

---

## Struktur Project

```bash
Buku_panduan_skill/
├── index.html
├── README.md
└── materi/
    ├── bab-01.html
    ├── bab-02.html
    ├── ...
    ├── bab-25.html
    ├── style.css
    └── template.js


Penjelasan struktur
index.html
Halaman utama dan pusat navigasi semua bab.
materi/bab-xx.html
Halaman materi per bab.
materi/style.css
Styling utama untuk halaman materi.
materi/template.js
Template dinamis untuk halaman bab yang masih memakai struktur metadata.
