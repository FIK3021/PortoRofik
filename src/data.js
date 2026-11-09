export const profile = {
  name: 'Ahmad Rofik Harahap',
  role: 'Web Developer & QA Enthusiast',
  tagline: 'Fresh graduate Teknik Informatika yang membangun aplikasi web dan memastikan aplikasinya benar-benar sesuai kebutuhan pengguna.',
  email: 'ahmadrofikharahap@gmail.com',
  whatsapp: 'https://wa.me/6289514531378',
  linkedin: 'https://linkedin.com/in/ahmadrofikharahap',
  github: '', 
  location: 'Cileungsi, Kabupaten Bogor',
  photo: '/foto.jpg',
  cv: '/CV_Ahmad_Rofik_Harahap.pdf',
  about: [
    'Saya lulusan S1 Teknik Informatika Universitas Muhammadiyah Prof. Dr. HAMKA (IPK 3,73) dengan minat pada Software Quality Assurance, Web Development, dan Cloud Computing.',
    'Project terbesar saya adalah Simakdoro, sistem informasi administrasi RT berbasis web yang saya rancang, bangun, dan uji sendiri, dari UML dan ERD sampai Black Box Testing dan UAT bersama Ketua RT.',
    'Saya juga lulusan Bangkit Academy 2024 (Cloud Computing), aktif belajar lewat kelas Dicoding, dan terbiasa membuat konten visual untuk organisasi.'
  ],
  education: { school: 'Universitas Muhammadiyah Prof. Dr. HAMKA', major: 'S1 Teknik Informatika', years: '2022 – 2026', gpa: '3,73' }
}

export const project = {
  slug: 'simakdoro',
  title: 'Simakdoro',
  subtitle: 'Sistem Informasi Administrasi RT',
  year: '2026',
  summary: 'Aplikasi web untuk mendigitalkan pengelolaan data warga, iuran, pengeluaran, arsip administrasi, dan laporan keuangan RT.',
  badges: ['Tugas Akhir', 'Memiliki HAKI'],
  stack: ['Node.js', 'Express.js', 'MySQL', 'HTML/CSS/JS', 'Tailwind CSS', 'Bootstrap', 'Figma'],
  links: [
    { label: 'Buka aplikasi', href: 'https://simakdoro.my.id' },
    // { label: 'Repositori GitHub', href: 'https://github.com/...' },
  ],
  haki: { title: 'Sertifikat HAKI Simakdoro', src: '/haki/sertifikat-haki.jpg' },
  modules: ['Data warga', 'Iuran', 'Pengeluaran', 'Arsip administrasi', 'Laporan keuangan'],
  problem: 'Pencatatan warga, iuran, dan keuangan RT yang dilakukan manual membuat pencarian informasi lambat dan laporan sulit dipertanggungjawabkan.',
  solution: 'Simakdoro menyatukan data warga, pemasukan, pengeluaran, dan arsip dalam satu aplikasi web sehingga pencatatan lebih efisien dan informasi warga mudah dicari.',
  methodNote: 'Dikembangkan dengan metode Spiral, sehingga perancangan, pengembangan, dan pengujian diulang dalam beberapa siklus.',
  process: [
    { title: 'Perencanaan', text: 'Menggali kebutuhan pengurus RT dan menentukan lingkup fitur.' },
    { title: 'Perancangan', text: 'Merancang sistem dan basis data dengan UML dan Entity Relationship Diagram (ERD).' },
    { title: 'Pengembangan', text: 'Membangun fitur pengelolaan data dan administrasi dengan Node.js, Express, dan MySQL.' },
    { title: 'Pengujian', text: 'Black Box Testing dan User Acceptance Testing (UAT) bersama Ketua RT, lalu perbaikan pada siklus berikutnya.' }
  ],
  uat: { date: '28 Maret 2026', place: 'RT 01 / RW 016', by: 'Ketua RT dan penguji (Software Tester)' },
  tests: [
    { id: 'UC-8.1', group: 'Akses', name: 'Akses halaman login', expected: 'Form login tampil dengan kolom username dan password' },
    { id: 'UC-8.1 & 8.2', group: 'Akses', name: 'Login admin', expected: 'Admin terdaftar masuk ke dashboard; kredensial salah menampilkan pesan error' },
    { id: 'UC-9.1', group: 'Akses', name: 'Menampilkan dashboard', expected: 'Ringkasan data warga, keuangan, dan menu navigasi tampil' },
    { id: 'UC-1.1', group: 'Warga', name: 'Menambah data warga', expected: 'Data tersimpan dan muncul di tabel daftar warga' },
    { id: 'UC-1.1', group: 'Warga', name: 'Mengedit data warga', expected: 'Perubahan tersimpan dan tampil di tabel' },
    { id: 'UC-1.1', group: 'Warga', name: 'Menghapus data warga', expected: 'Data terhapus dan tidak muncul lagi' },
    { id: 'UC-1.2', group: 'Warga', name: 'Mencari data warga', expected: 'Pencarian berdasarkan nama atau NIK menampilkan data yang sesuai' },
    { id: 'UC-4.1', group: 'Keuangan', name: 'Data keuangan otomatis', expected: 'Iuran bulanan dibuat otomatis dan muncul di tabel keuangan' },
    { id: 'UC-4.1', group: 'Keuangan', name: 'Pemasukan manual', expected: 'Pemasukan (misalnya donasi) tersimpan dan muncul di tabel' },
    { id: 'UC-4.1', group: 'Keuangan', name: 'Menghapus data keuangan', expected: 'Data pemasukan terhapus dari tabel' },
    { id: 'UC-4.1', group: 'Keuangan', name: 'Menambah pengeluaran', expected: 'Pengeluaran tersimpan dan muncul di tabel pengeluaran' },
    { id: 'UC-4.1', group: 'Keuangan', name: 'Menghapus pengeluaran', expected: 'Pengeluaran terhapus dari tabel' },
    { id: 'UC-6.1', group: 'Laporan', name: 'Menampilkan laporan keuangan', expected: 'Laporan pemasukan dan pengeluaran per periode tampil' },
    { id: 'UC-6.2', group: 'Laporan', name: 'Unduh laporan PDF', expected: 'File PDF laporan berhasil diunduh' },
    { id: 'UC-6.3', group: 'Laporan', name: 'Unduh laporan Excel', expected: 'File Excel (.xlsx) laporan berhasil diunduh' },
    { id: 'UC-3.1', group: 'Arsip', name: 'Mengarsipkan surat', expected: 'Dokumen surat tersimpan dan tampil di daftar arsip' },
    { id: 'UC-3.2', group: 'Arsip', name: 'Membuka arsip', expected: 'Dokumen arsip yang dipilih terbuka' },
    { id: 'UC-3.3', group: 'Arsip', name: 'Mengunduh arsip', expected: 'Dokumen arsip berhasil diunduh' }
  ].map((t, i) => ({ ...t, no: i + 1, status: 'Berhasil' })),
}

export const designs = [
  { title: 'Pamflet kegiatan', category: 'Pamflet', org: 'UKM Tapak Suci UHAMKA', tool: 'Canva', src: '/designs/pamflet7.jpg' },
  { title: 'Poster publikasi keujuaraan', category: 'poster Uhamka Cup 5', org: 'UKM Tapak Suci UHAMKA', tool: 'Canva', src: '/designs/pamflet2.jpg' },
  { title: 'pamflet hari penting', category: 'pamflet', org: 'Developer Student Club UHAMKA', tool: 'Figma', src: '/designs/pamfle5.png' },
  { title: 'pamflet hari penting', category: 'pamflet', org: 'Developer Student Club UHAMKA', tool: 'Figma', src: '/designs/pamflet3.png' },
  { title: 'Pamflet Closing', category: 'pamflet', org: 'Developer Student Club UHAMKA', tool: 'Figma', src: '/designs/pamflet1.png' }
]

export const certs = [
  { title: 'Bangkit Academy 2024 (Cloud Computing)', issuer: 'GoTo, Traveloka, Tokopedia', year: '2024', category: 'Bangkit', img: '/certs/sertif1.jpg', url: '' },
  { title: 'Code Generation and Optimization Using IBM Granite', issuer: 'IBM', year: '2025', category: 'IBM', img: '/certs/sertif6.png', url: '' },
  { title: 'Memulai Dasar Pemrograman Untuk Menjadi Pengembang Software', issuer: 'Dicoding Indonesia', year: '2024', category: 'Dicoding', img: '/certs/sertif2.png', url: '' },
  { title: 'Programing Logic', issuer: 'Dicoding Indonesia', year: '2024', category: 'Dicoding', img: '/certs/sertif3.png', url: '' },
  { title: 'Machine Learning Google Cloud', issuer: 'Dicoding Indonesia', year: '2024', category: 'Dicoding', img: '/certs/sertif5.png', url: '' },
  { title: 'Cloud Enginer', issuer: 'Dicoding Indonesia', year: '2024', category: 'Dicoding', img: '/certs/sertif4.png', url: '' }
]

export const skills = [
  { group: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap'] },
  { group: 'Backend & Database', items: ['Node.js', 'Express.js', 'MySQL'] },
  { group: 'Pengujian', items: ['Black Box Testing', 'User Acceptance Testing (UAT)'] },
  { group: 'Cloud', items: ['Google Cloud Platform', 'Cloud Run', 'App Engine'] },
  { group: 'Desain', items: ['Figma', 'Canva', 'CapCut', 'Adobe Photoshop'] }
]

export const timeline = [
  { year: '2024 – 2025', title: 'Creative Team', place: 'Developer Student Club UHAMKA', text: 'Membuat materi visual dan video untuk kegiatan komunitas teknologi, berkoordinasi dengan tim untuk materi publikasi.' },
  { year: '2023 – 2024', title: 'Ketua Divisi Publikasi Dekorasi Dokumentasi UHAMKA CUP 5', place: 'UHAMKA', text: 'Memimpin tim beranggotakan 2 orang dalam mengelola seluruh visualisasi acara, mulai dari merancang konsep dekorasi di lokasi pertandingan hingga memproduksi aset desain grafis dan video kreatif untuk kebutuhan promosi digital.' },
  { year: '2023 – 2024', title: 'Bidang Kominfo dan Hubungan Sosial', place: 'UKM Tapak Suci UHAMKA', text: 'Mengelola kebutuhan desain grafis dan video untuk publikasi kegiatan, bekerja sama dengan dua anggota tim.' }
]

export const achievements = [
  { year: '2023', text: 'Juara 3 Pencak Silat kategori tanding, Jakarta Nasional Championship' },
  { year: '2019', text: 'Juara 3 Pencak Silat kategori tanding, UNJ Championship' },
  { year: '2018', text: 'Juara 2 Pencak Silat kategori tanding, Kemenpora Cup' }
]
