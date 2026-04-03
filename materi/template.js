const meta = window.BAB_META || {};

const navLinks = Array.from({ length: 25 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return `<li><a href="bab-${n}.html">Bab ${n}</a></li>`;
}).join('');

const current = meta.number || '00';
const title = meta.title || `Bab ${current}`;
const subtitle = meta.subtitle || 'Halaman materi';
const intro = meta.intro || 'Halaman ini disiapkan sebagai tempat materi utama untuk bab ini. Konten lengkap dapat dipindahkan atau diperbarui kapan saja tanpa membebani index utama.';
const points = meta.points || [
  'Struktur halaman sudah siap dipakai.',
  'Konten bab dapat diisi kapan saja.',
  'Navigasi antar bab sudah tersedia.',
  'Tampilan mengikuti template utama.'
];
const note = meta.note || 'Halaman ini disiapkan lebih dulu agar struktur repo rapi dan mudah dikembangkan.';
const prevLink = meta.prev ? `<a href="${meta.prev}" class="cta-button cta-secondary">Bab Sebelumnya</a>` : '';
const nextLink = meta.next ? `<a href="${meta.next}" class="cta-button">Bab Berikutnya</a>` : '';

document.body.innerHTML = `
<header class="header">
  <nav class="navbar">
    <a href="../index.html" class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      <span class="logo-text">Buku Panduan Skill</span>
    </a>
    <ul class="nav-links">
      <li><a href="../index.html">Home</a></li>
      <li><a href="../index.html#daftar-bab">Daftar Bab</a></li>
      <li><a href="bab-01.html">Bab 01</a></li>
      <li><a href="bab-25.html">Bab 25</a></li>
    </ul>
    <button id="mobile-menu">≡</button>
  </nav>
</header>

<aside id="sidebar">
  <div class="p-4 overflow-y-auto">
    <ul class="space-y-2">
      <li><a href="../index.html" class="block py-2 px-4 hover:bg-blue-100 rounded">Home</a></li>
      <li><a href="../index.html#daftar-bab" class="block py-2 px-4 hover:bg-blue-100 rounded">Daftar Bab</a></li>
      ${Array.from({ length: 25 }, (_, i) => {
        const n = String(i + 1).padStart(2, '0');
        return `<li><a href="bab-${n}.html" class="block py-2 px-4 hover:bg-blue-100 rounded">Bab ${n}</a></li>`;
      }).join('')}
    </ul>
  </div>
</aside>

<div id="overlay"></div>

<div class="breadcrumb-container">
  <div class="breadcrumb">
    <a href="../index.html">Home</a>
    <span class="breadcrumb-separator">&gt;</span>
    <a href="../index.html#daftar-bab">Materi</a>
    <span class="breadcrumb-separator">&gt;</span>
    <span>${title}</span>
  </div>
</div>

<main class="container learning-container">
  <article class="day-content">
    <header class="day-header">
      <h1>${title}</h1>
      <p class="meta-info">${subtitle}</p>
    </header>

    <p>${intro}</p>

    <section>
      <h2>Struktur Halaman</h2>
      <ul>
        ${points.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </section>

    <section>
      <h2>Catatan</h2>
      <div class="notice-box">
        <p style="margin-bottom:0;">${note}</p>
      </div>
    </section>

    <footer class="lesson-footer">
      <p><em>Status halaman:</em> siap dipakai dan bisa langsung diedit untuk memasukkan isi materi lengkap.</p>
      <div class="cta-wrap">
        <a href="../index.html" class="cta-button cta-secondary">Kembali ke Index</a>
        ${prevLink}
        ${nextLink}
      </div>
    </footer>
  </article>
</main>

<footer class="footer">
  <div class="footer-links">
    <div>
      <h4>Navigasi Cepat</h4>
      <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="bab-01.html">Bab 01</a></li>
        <li><a href="bab-13.html">Bab 13</a></li>
        <li><a href="bab-25.html">Bab 25</a></li>
      </ul>
    </div>
    <div>
      <h4>Halaman Aktif</h4>
      <p>${title}</p>
    </div>
    <div>
      <h4>Keterangan</h4>
      <p>Folder ini disiapkan untuk menampung seluruh materi HTML bab 01 sampai bab 25.</p>
    </div>
  </div>
  <div class="copyright">
    <p>&copy; 2026 Buku Panduan Skill. Struktur halaman materi telah disiapkan.</p>
  </div>
</footer>
`;

const mobileMenu = document.getElementById('mobile-menu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
if (mobileMenu && sidebar && overlay) {
  mobileMenu.addEventListener('click', () => {
    sidebar.style.transform = sidebar.style.transform === 'translateX(0px)' ? 'translateX(-100%)' : 'translateX(0px)';
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
  });
  overlay.addEventListener('click', () => {
    sidebar.style.transform = 'translateX(-100%)';
    overlay.style.display = 'none';
  });
}
