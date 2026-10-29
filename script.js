// === Daftar Perbaikan Otomatis ===
const daftarPerbaikan = [
  { cari: /\bska\b/g, ganti: 'suka' },
  { cari: /\bbanget\b/g, ganti: 'sangat' },
  { cari: /\bbgt\b/g, ganti: 'sangat' },
  { cari: /\bjago\b/g, ganti: 'pandai' },
  { cari: /\bjg\b/g, ganti: 'jago' },
  { cari: /\bsya\b/g, ganti: 'saya' },
  { cari: /\bkm\b/g, ganti: 'kamu' },
  { cari: /\bdgn\b/g, ganti: 'dengan' },
  { cari: /\bkrn\b/g, ganti: 'karena' },
  { cari: /\btdk\b/g, ganti: 'tidak' },
  { cari: /\bgak\b/g, ganti: 'tidak' },
  { cari: /\bnggak\b/g, ganti: 'tidak' },
  { cari: /\bsdh\b/g, ganti: 'sudah' },
  { cari: /\bblm\b/g, ganti: 'belum' },
  { cari: /\bgtau\b/g, ganti: 'tidak tahu' },
  { cari: /\bgt\b/g, ganti: 'gitu' },
  { cari: /\bgtu\b/g, ganti: 'itu' },
  { cari: /\bkyk\b/g, ganti: 'sepertinya' },
  { cari: /\bsprti\b/g, ganti: 'seperti' },
  { cari: /\bsngat\b/g, ganti: 'sangat' },
  { cari: /\btrmksh\b/g, ganti: 'terima kasih' },
  { cari: /\bmakasih\b/g, ganti: 'terima kasih' },
  { cari: /\biy\b/g, ganti: 'iya' },
  { cari: /\bkl\b/g, ganti: 'kalau' },
  { cari: /\bklu\b/g, ganti: 'kalau' },
  { cari: /\bap\b/g, ganti: 'apa' },
  { cari: /\bjg\b/g, ganti: 'juga' },
  { cari: /\btrs\b/g, ganti: 'terus' },
  { cari: /\blg\b/g, ganti: 'lagi' },
  { cari: /\bntr\b/g, ganti: 'nanti' },
  { cari: /\bsllu\b/g, ganti: 'selalu' },
  { cari: /\bhrus\b/g, ganti: 'harus' },
  { cari: /\bprlu\b/g, ganti: 'perlu' },
  { cari: /\bpake\b/g, ganti: 'pakai' },
  { cari: /\bmslh\b/g, ganti: 'masalah' },
  { cari: /\bngerti\b/g, ganti: 'mengerti' },
  { cari: /\bpaham\b/g, ganti: 'paham' },
  { cari: /\bdisini\b/g, ganti: 'di sini' },
  { cari: /\bdisana\b/g, ganti: 'di sana' },
  { cari: /\bksini\b/g, ganti: 'ke sini' },
  { cari: /\bksana\b/g, ganti: 'ke sana' },
  { cari: /\bkmn\b/g, ganti: 'ke mana' },
  { cari: /\bdlm\b/g, ganti: 'dalam' },
  { cari: /\bdt\b/g, ganti: 'dari' },
  { cari: /\bmlh\b/g, ganti: 'malah' },
  { cari: /\bsebenernya\b/g, ganti: 'sebenarnya' },
  { cari: /\bmakanya\b/g, ganti: 'maka dari itu' },
  { cari: /\bmmg\b/g, ganti: 'memang' },
  { cari: /\bsj\b/g, ganti: 'saja' },
  { cari: /\bthd\b/g, ganti: 'terhadap' },
  { cari: /\bdmn\b/g, ganti: 'demikian' },
  { cari: /\bkrja\b/g, ganti: 'bekerja' },
  { cari: /\bprgi\b/g, ganti: 'pergi' },
  { cari: /\bpulang\b/g, ganti: 'pulang' },
  { cari: /\btlong\b/g, ganti: 'tolong' },
  { cari: /\bngomong\b/g, ganti: 'berbicara' },
  { cari: /\bbljr\b/g, ganti: 'belajar' },
];

// === Rapikan Teks ===
function rapikanTeks(teks) {
  let hasil = teks;
  daftarPerbaikan.forEach(a => hasil = hasil.replace(a.cari, a.ganti));
  hasil = hasil.replace(/[ \t]+/g, ' ').replace(/\s+\n/g, '\n');
  hasil = hasil.replace(/([.!?]\s+|^|\n)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
  return hasil.trim();
}

// === Ubah Format Otomatis ===
function ubahFormatOtomatis(idInput, idTarget) {
  const input = document.getElementById(idInput);
  const target = document.getElementById(idTarget);
  if (!input || !target) return;
  
  const teksRapi = rapikanTeks(input.value);
  target.innerHTML = teksRapi === '' 
    ? '<em>Belum diisi...</em>' 
    : teksRapi;
}

// === Variabel Warna ===
let warnaAksen = '#2563eb';
let warnaLatar = '#f0f9ff';

// === Update CV ===
function updateCV() {
  const nama = document.getElementById('nama')?.value || 'Nama Lengkap';
  const elNama = document.getElementById('cv-nama');
  const elInisial = document.getElementById('initial');
  const elJabatan = document.getElementById('cv-jabatan');
  const elEmail = document.getElementById('cv-email');
  const elTelp = document.getElementById('cv-telp');
  const elAlamat = document.getElementById('cv-alamat');
  const elGaris = document.getElementById('garis-pemisah');
  const elH3 = document.querySelectorAll('.cv-konten h3');

  if (elNama) elNama.textContent = nama;
  if (elInisial) elInisial.textContent = (nama.split(' ').map(k => k[0] || '').join('').toUpperCase().slice(0, 2));
  if (elJabatan) elJabatan.textContent = document.getElementById('jabatan')?.value || 'Jabatan / Tujuan';
  if (elEmail) elEmail.textContent = document.getElementById('email')?.value || 'email@kamu.com';
  if (elTelp) elTelp.textContent = document.getElementById('telp')?.value || '08xx-xxxx-xxxx';
  if (elAlamat) elAlamat.textContent = document.getElementById('alamat')?.value || 'Alamat Lengkap';
  if (elGaris) elGaris.style.background = warnaAksen;
  elH3.forEach(h3 => h3.style.color = warnaAksen);
}

// === Tampilkan Foto ===
function tampilkanFoto() {
  const input = document.getElementById('unggah-foto');
  const img = document.getElementById('tampil-foto');
  const span = document.getElementById('initial');
  if (input?.files?.[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      img.src = e.target.result;
      img.style.display = 'block';
      span.style.display = 'none';
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// === Ganti Warna Aksen ===
function gantiWarna(btn) {
  document.querySelectorAll('.warna-pilihan .warna').forEach(b => b.classList.remove('aktif'));
  btn.classList.add('aktif');
  warnaAksen = btn.dataset.warna;
  const elGaris = document.getElementById('garis-pemisah');
  if (elGaris) elGaris.style.background = warnaAksen;
  document.querySelectorAll('.cv-konten h3').forEach(h3 => h3.style.color = warnaAksen);
}

// === Ganti Warna Latar ===
function gantiLatar(btn) {
  document.querySelectorAll('.warna-latar .warna').forEach(b => b.classList.remove('aktif'));
  btn.classList.add('aktif');
  warnaLatar = btn.dataset.latar;
  const elPreview = document.getElementById('cv-preview');
  if (elPreview) elPreview.style.background = warnaLatar;
}

// === Unduh PDF ===
function unduhPDF() {
  window.print();
}