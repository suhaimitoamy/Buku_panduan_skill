# Folder Materi

Folder `materi/` adalah pusat seluruh halaman HTML untuk isi buku panduan.

Di folder ini, setiap bab disimpan sebagai file HTML terpisah agar:
- index utama tetap ringan
- struktur repo lebih rapi
- tiap bab mudah diedit satu per satu
- aset pendukung lebih mudah dikelola

## Struktur folder

```text
materi/
  README.md
  style.css
  template.js
  bab-01.html
  bab-02.html
  ...
  bab-25.html
  img/
    umum/
    bab-01/
    bab-02/
    ...
```

## Fungsi file utama

### `style.css`
Berisi stylesheet utama untuk halaman-halaman bab.

### `template.js`
Digunakan untuk halaman template / placeholder yang masih memakai metadata `window.BAB_META`.

### `bab-01.html` sampai `bab-25.html`
Berisi halaman HTML untuk masing-masing bab.

## Aturan penulisan bab

- Satu bab = satu file HTML
- Nama file gunakan format:

```text
bab-01.html
bab-02.html
bab-03.html
```

- Link antar bab sebaiknya konsisten:
  - tombol kembali ke index: `../index.html`
  - tombol lanjut bab berikutnya: `bab-02.html`, `bab-03.html`, dan seterusnya

## Penyimpanan gambar

Semua gambar untuk halaman bab disimpan di dalam folder `img/`.

### Struktur yang disarankan

```text
img/
  umum/
    logo.png
    cover.jpg
  bab-01/
    ilustrasi-likuiditas.png
  bab-02/
    struktur-pasar.png
```

### Contoh pemanggilan gambar

Karena file HTML berada di folder `materi/`, maka penulisannya seperti ini:

```html
<img src="img/bab-01/ilustrasi-likuiditas.png" alt="Ilustrasi likuiditas">
```

Untuk gambar umum:

```html
<img src="img/umum/logo.png" alt="Logo Buku Panduan Skill">
```

## Saran pengelolaan

- Gunakan nama file yang jelas dan konsisten
- Pisahkan gambar berdasarkan bab
- Jangan campur file gambar langsung dengan file HTML
- Hindari menaruh semua konten di `index.html`
- Jadikan `index.html` hanya sebagai pusat navigasi antar bab

## Tujuan struktur ini

Struktur ini dibuat supaya repo tetap:
- ringan
- teratur
- mudah dikembangkan
- mudah dirawat saat jumlah materi bertambah

Dengan pola ini, kamu bisa mengubah isi satu bab tanpa memengaruhi bab lain ataupun halaman utama.
