export const profile = {
  name: "Fathur Rizqi Putra Pratama",
  title: "Fullstack Web Developer & Certified Associate Data Scientist",
  location: "Kota Tegal, Jawa Tengah",
  phone: "0895384223639",
  email: "ezzdarkrap@gmail.com",
  github: "https://github.com/fathurrizqiz",
  photo: "/photo.jpeg" // ganti dengan path foto Anda
};

export const about = `Seorang Fullstack Web Developer adaptif dan Certified Associate Data Scientist (BNSP) dengan spesialisasi dalam pembangunan arsitektur web tangguh menggunakan ekosistem Laravel, Vue.js, dan Flask/FastAPI. Berpengalaman nyata dalam menerapkan prinsip SOLID untuk performa tinggi, serta mengintegrasikan model Machine Learning (ANN & CNN) ke dalam aplikasi praktis untuk sektor kesehatan dan pendidikan inklusif.`;

export const skills = {
  "Bahasa Pemrograman": ["PHP", "Python", "JavaScript", "SQL"],
  "Prinsip & Metodologi": ["SOLID Principles", "OOP", "Clean Code"],
  "Frontend": ["Vue.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  "Backend": ["Laravel", "Flask", "FastAPI"],
  "Database & DevOps": ["PostgreSQL", "MongoDB", "Docker", "Git", "RESTful API"]
};

export const projects = [
  {
    name: "Eichar",
    subtitle: "Sistem Informasi Manajemen Diklat",
    year: "2025",
    role: "Lead Fullstack Developer",
    stack: ["Laravel 12", "Tailwind CSS", "PostgreSQL"],
    problem: "Sistem pengelolaan diklat masih manual, rawan kesalahan data, dan lambat dalam penyusunan laporan.",
    solution: "Merancang platform web terintegrasi berskala enterprise untuk mendokumentasikan serta mengotomatisasi seluruh alur manajemen diklat.",
    impact: "Transformasi digital menghasilkan penyimpanan data terstruktur, transparansi tinggi, dan laporan analitik real-time.",
    link: "https://github.com/fathurrizqiz/System_Information_Training.git"
  },
  {
    name: "SLB Tunawicara",
    subtitle: "Aplikasi Pembelajaran Mandiri Siswa",
    year: "2025",
    role: "Backend Developer & ML Engineer",
    stack: ["Flask", "Python", "ANN", "PostgreSQL"],
    problem: "Terbatasnya sarana pendidikan mandiri yang ramah akses bagi siswa tunawicara di luar sekolah.",
    solution: "Membangun mesin backend cerdas dengan Artificial Neural Network (ANN) untuk mendeteksi dan memvalidasi gerakan isyarat.",
    impact: "Memfasilitasi media pembelajaran interaktif aman bagi siswa SLB untuk melatih komunikasi non-verbal.",
    link: "#"
  },
  {
    name: "Eye Health",
    subtitle: "Deteksi Dini Penyakit Mata",
    year: "2025",
    role: "Web Developer & AI Researcher",
    stack: ["Flask", "Python", "CNN", "MongoDB"],
    problem: "Kurangnya kesadaran skrining dini kesehatan mata dan kecenderungan panik saat gejala visual muncul.",
    solution: "Antarmuka web interaktif berbasis CNN untuk mengidentifikasi gangguan medis awal pada mata melalui unggahan citra.",
    impact: "🏆 Terpilih sebagai Inovasi Resmi Kategori Umum Krenova Tingkat Kota Tegal 2025 oleh Bapperida.",
    link: "#"
  }
];

export const experience = [
  {
    company: "Rumah Sakit Hermina Daan Mogot Jakarta Barat",
    period: "21 Juli – 10 November 2025",
    role: "Web Developer Intern",
    achievements: [
      "Mengembangkan modul aplikasi rekrutmen karyawan baru dan dashboard kesejahteraan karyawan menggunakan Laravel.",
      "Berkolaborasi lintas divisi dengan tim Diklat untuk merancang fungsionalitas sistem yang relevan dengan aturan internal rumah sakit.",
      "Mengoptimalkan performa kueri database sehingga mempercepat proses verifikasi data pelamar kerja."
    ]
  }
];

export const education = {
  school: "Politeknik Harapan Bersama Tegal",
  degree: "D4 Sarjana Terapan Teknik Informatika",
  gpa: "3.70 / 4.00 (Sangat Memuaskan)",
  status: "Fresh Graduate",
  focus: ["Pemrograman Web Lanjut", "Rekayasa Perangkat Lunak", "Kecerdasan Buatan (Deep Learning)"]
};

export const certifications = [
  { category: "Sertifikasi Nasional BNSP", items: [
    { name: "Associate Data Scientist", org: "LSP Teknologi Digital", year: "2025" },
    { name: "KKNI Level II Teknik Komputer dan Jaringan", org: "LSP SMK NU Hasyim Asy'ari", year: "2022" }
  ]},
  { category: "AI & Data Science", items: [
    { name: "HCIA-AI: AI Basic", org: "Huawei Talent", year: "2024" },
    { name: "NoSQL & NewSQL Big Data Management", org: "Huawei Talent", year: "2025" },
    { name: "Intro to AI Agent", org: "Dicoding", year: "2025" }
  ]},
  { category: "Software & Network", items: [
    { name: "Belajar Prinsip Pemrograman SOLID", org: "Dicoding Academy", year: "2026" },
    { name: "HCIA-Security V4.0", org: "Huawei Talent", year: "2025" },
    { name: "HCIA-Datacom V1.0", org: "Huawei Talent", year: "2024" }
  ]},
  { category: "Profesional & Bisnis", items: [
    { name: "Mini Course Web Development", org: "Luarsekolah", year: "2024" },
    { name: "Intro to Digital Marketing", org: "RevoU", year: "2025" },
    { name: "Peserta IT Festival 2025", org: "IPB University Vokasi", year: "2025" }
  ]}
];