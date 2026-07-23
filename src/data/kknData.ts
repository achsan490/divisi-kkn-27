export interface Member {
  name: string;
  role: string;
  nim: string;
  prodi: string;
  avatar?: string;
}

export interface DivisionData {
  id: string;
  bigTitle: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  groupImage: string;
  iconName: string;
  members: Member[];
  workPrograms: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
}

export const KKN_INFO = {
  theme: "BEYOND THE VILLAGE",
  tagline: "Empowering Communities, Creating Impact.",
  university: "UNIVERSITAS KH. A. WAHAB HASBULLAH",
  universityShort: "UNWAHA JOMBANG",
  universityLogo: "/images/logo.png",
  groupName: "KKN KELOMPOK 27",
  title: "BEYOND THE VILLAGE",
  subTitle: "KKN Tematik 2026 • Desa Klitih",
  village: "Desa Klitih",
  district: "Kecamatan Plandaan",
  regency: "Kabupaten Jombang",
  province: "Jawa Timur",
  year: "2026",
  period: "Angkatan 2026 • Published 30 Juni 2026",
  totalMembers: "21 Mahasiswa",
  heroVideoBg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop",
  closingBg: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=1920&auto=format&fit=crop",
};

export const DPL_DATA = {
  name: "Fitri Umardiyah, M. Pd.",
  contact: "085730403338",
  jabatan: "DOSEN PEMBIMBING LAPANGAN",
  fakultas: "UNIVERSITAS KH. A. WAHAB HASBULLAH (UNWAHA)",
  quote: "Empowering communities through science, innovation, and dedicated academic excellence.",
  photo: "/images/dpl.jpeg",
};

export const KETUA_DATA = {
  name: "MOHAMAD YUSRIL BAIHAQI",
  nim: "2301290376",
  prodi: "EKONOMI SYARIAH",
  fakultas: "UNWAHA JOMBANG",
  jabatan: "KETUA KELOMPOK 27 KKN 2026",
  quote: "Leading with vision, unity, and unwavering passion for sustainable village transformation.",
  photo: "/images/ketua.jpeg",
};

export const DIVISIONS_DATA: DivisionData[] = [
  {
    id: "acara",
    bigTitle: "ACARA",
    title: "DIVISI ACARA",
    subtitle: "EVENT MANAGEMENT & PROGRAMMING",
    tagline: "Crafting memorable experiences and high-impact community events",
    description: "Desain rundown terstruktur, eksekusi program kerja edukatif, serta pengorganisasian seluruh event utama KKN Kelompok 27.",
    groupImage: "/images/acara.jpeg",
    iconName: "GraduationCap",
    workPrograms: [
      "Master Plan & Rundown Event KKN",
      "Bimbingan Belajar & Edukasi Sains",
      "Penyelenggaraan Festival & Grand Closing"
    ],
    members: [
      { name: "SALMAN ALFARIDHO FARDIANSYAH", role: "Divisi Acara", nim: "2302041163", prodi: "Informatika", avatar: "/images/salman.jpg" },
      { name: "NADYA HUSNUL KHOTIMAH", role: "Divisi Acara", nim: "2305140682", prodi: "Manajemen", avatar: "/images/nadya.jpg" },
      { name: "ARIEJ MASHITOH AL BANY", role: "Divisi Acara", nim: "2301012981", prodi: "Pendidikan Agama Islam", avatar: "/images/sita.jpg" },
      { name: "AKHLIS BUDIANTO", role: "Divisi Acara", nim: "2305140670", prodi: "Manajemen", avatar: "/images/aklis.jpg" },
      { name: "LAILATUL MUFIDAH", role: "Divisi Acara", nim: "2304100179", prodi: "Pendidikan Biologi", avatar: "/images/laila.jpg" },
    ]
  },
  {
    id: "sekertaris",
    bigTitle: "SECRETARY",
    title: "DIVISI SEKRETARIS",
    subtitle: "ADMINISTRATION & DOCUMENT CONTROL",
    tagline: "Precision governance, documentation, and official administration",
    description: "Tata kelola persuratan resmi, pengarsipan dokumen kerja, serta penyusunan Laporan Pertanggungjawaban (LPJ).",
    groupImage: "/images/sekertaris.jpeg",
    iconName: "FileText",
    workPrograms: [
      "Pengelolaan Persuratan Resmi & Berkas Desa",
      "Notulensi & Pengarsipan Dokumen KKN",
      "Penyusunan Proposal & Laporan Akhir LPJ"
    ],
    members: [
      { name: "ARINDA ISLAMIYAH", role: "Sekretaris Kelompok", nim: "2305140736", prodi: "Manajemen", avatar: "/images/arinda.jpg" },
      { name: "MURNI", role: "Sekretaris Kelompok", nim: "2301021002", prodi: "Pendidikan Bahasa Arab", avatar: "/images/murni.jpg" },
    ]
  },
  {
    id: "bendahara",
    bigTitle: "TREASURY",
    title: "DIVISI BENDAHARA",
    subtitle: "FINANCIAL GOVERNANCE & BUDGETING",
    tagline: "Transparency, financial discipline, and budget optimization",
    description: "Manajemen arus kas, pengalokasian anggaran operasional program kerja, serta akuntabilitas pelaporan keuangan.",
    groupImage: "/images/bendahara.jpeg",
    iconName: "FileText",
    workPrograms: [
      "Manajemen Arus Kas & Anggaran Operasional",
      "Pencatatan Transparansi Keuangan Kelompok",
      "Laporan Keuangan & Akuntabilitas LPJ"
    ],
    members: [
      { name: "DIVA NUGRAHANI", role: "Bendahara Kelompok", nim: "2305140704", prodi: "Manajemen", avatar: "/images/diva.jpg" },
    ]
  },
  {
    id: "pdd",
    bigTitle: "PUBLIKASI",
    title: "DIVISI PDD",
    subtitle: "CREATIVE MEDIA, WEBSITE & DOCUMENTATION",
    tagline: "Visual storytelling, digital branding, and cinematic content",
    description: "Produksi konten visual kreatif, liputan foto & video harian, pengelolaan media sosial resmi, serta website cinematic.",
    groupImage: "/images/pdd.jpeg",
    iconName: "Camera",
    workPrograms: [
      "Video Profile & Editorial Social Media Feed",
      "Pengembangan Website Interactive & Galeri",
      "Liputan Visual Storytelling Harian Kegiatan"
    ],
    members: [
      { name: "KIA SALUNG SHAFA", role: "Divisi PDD", nim: "2304130230", prodi: "Pendidikan Bahasa Inggris", avatar: "/images/kisa.jpg" },
      { name: "MOH. THOILUN NI'AM", role: "Divisi PDD", nim: "2301013182", prodi: "Pendidikan Agama Islam", avatar: "/images/thoil.jpg" },
      { name: "YOGI BACHTIAR", role: "Divisi PDD", nim: "2302050817", prodi: "Sistem Informasi", avatar: "/images/yogi.jpg" },
    ]
  },
  {
    id: "perlengkapan",
    bigTitle: "LOGISTIK",
    title: "DIVISI PERLENGKAPAN",
    subtitle: "EQUIPMENT & INFRASTRUCTURE LOGISTICS",
    tagline: "Reliable equipment logistics, technical support, and setup",
    description: "Penyediaan inventaris perlengkapan, mobilisasi sarana prasarana teknis, serta gotong royong kesiapan venue.",
    groupImage: "/images/perlengkapan.jpeg",
    iconName: "Trees",
    workPrograms: [
      "Mobilisasi Peralatan & Inventaris Program",
      "Manajemen Kesiapan Tempat Event & Posko",
      "Dukungan Technical & Logistik Lapangan"
    ],
    members: [
      { name: "ALMA NUR KURNIAWAN", role: "Divisi Perlengkapan", nim: "2302050834", prodi: "Sistem Informasi", avatar: "/images/alma.jpg" },
      { name: "MUKHAMMAD DANU ARTA", role: "Divisi Perlengkapan", nim: "2305140737", prodi: "Manajemen", avatar: "/images/danu.jpg" },
    ]
  },
  {
    id: "humas",
    bigTitle: "HUMAS",
    title: "DIVISI HUMAS",
    subtitle: "COMMUNITY RELATIONS & OUTREACH",
    tagline: "Fostering strong relationships and seamless public communication",
    description: "Jembatan komunikasi utama dengan perangkat desa, tokoh masyarakat, serta sosialisasi program kepada warga Desa Klitih.",
    groupImage: "/images/humas.jpeg",
    iconName: "HeartPulse",
    workPrograms: [
      "Silaturahmi Tokoh & Perangkat Desa",
      "Sosialisasi Program Kerja & Publikasi Warga",
      "Koordinasi Kemitraan & Community Relations"
    ],
    members: [
      { name: "DIMAS EKA PRASETYO", role: "Divisi Humas", nim: "2301013108", prodi: "Pendidikan Agama Islam", avatar: "/images/dimas eka.jpg" },
      { name: "A'A KAFABIHI DZULQORNAIN", role: "Divisi Humas", nim: "2301013076", prodi: "Pendidikan Agama Islam", avatar: "/images/kafa.jpg" },
      { name: "TYAS ARTIKA ANGGRAINI", role: "Divisi Humas", nim: "2301290363", prodi: "Ekonomi Syariah", avatar: "/images/tyas.jpg" },
    ]
  },
  {
    id: "konsumsi",
    bigTitle: "KONSUMSI",
    title: "DIVISI KONSUMSI",
    subtitle: "TEAM WELFARE & HOSPITALITY LOGISTICS",
    tagline: "Fueling team energy, hospitality, and communal warmth",
    description: "Manajemen asupan harian posko KKN, penyediaan jamuan ramah tamah warga, serta menjaga kesejahteraan seluruh anggota.",
    groupImage: "/images/konsumsi.jpeg",
    iconName: "BookOpenCheck",
    workPrograms: [
      "Pengelolaan Konsumsi Harian Posko KKN",
      "Penyediaan Jamuan Ramah Tamah Warga",
      "Menjaga Energi & Kebersamaan Tim"
    ],
    members: [
      { name: "SERLINA MAGFIROH", role: "Divisi Konsumsi", nim: "2301013028", prodi: "Pendidikan Agama Islam", avatar: "/images/lina.jpg" },
      { name: "HAKIKI RAMADHAN", role: "Divisi Konsumsi", nim: "2303070212", prodi: "Agroekoteknologi", avatar: "/images/hakiki.jpg" },
      { name: "NADIA RAMA DIWANTI", role: "Divisi Konsumsi", nim: "2301013118", prodi: "Pendidikan Agama Islam", avatar: "/images/nadia.jpg" },
      { name: "ANANDA NURIA HALIZA PUTRI", role: "Divisi Konsumsi", nim: "2301012961", prodi: "Pendidikan Agama Islam", avatar: "/images/nuria.jpg" },
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "OFFICIAL LAUNCHING KKN KELOMPOK 27",
    category: "SEREMONIAL",
    date: "30 JUNI 2026",
    image: "/images/ketua.jpeg",
    description: "Penerimaan resmi DPL Fitri Umardiyah, M. Pd. & Kelompok 27 oleh Perangkat Desa Klitih."
  },
  {
    id: "gal-2",
    title: "KEYNOTE & PROGRAMMING STRATEGY",
    category: "ACARA",
    date: "02 JULI 2026",
    image: "/images/acara.jpeg",
    description: "Perencanaan rundown dan eksekusi program kerja edukatif anak-anak Desa Klitih."
  },
  {
    id: "gal-3",
    title: "DOCUMENT CONTROL & ADMINISTRATION",
    category: "SEKRETARIS",
    date: "04 JULI 2026",
    image: "/images/sekertaris.jpeg",
    description: "Tata kelola persuratan resmi dan pengarsipan administrasi program kerja."
  },
  {
    id: "gal-4",
    title: "TREASURY & FINANCIAL AUDIT",
    category: "BENDAHARA",
    date: "06 JULI 2026",
    image: "/images/bendahara.jpeg",
    description: "Transparansi arus kas dan pengalokasian anggaran operasional kelompok."
  },
  {
    id: "gal-5",
    title: "CREATIVE MEDIA & VISUAL PRODUCTION",
    category: "PDD",
    date: "08 JULI 2026",
    image: "/images/pdd.jpeg",
    description: "Liputan sinematik dan produksi media visual oleh tim PDD Informatika & SI UNWAHA."
  },
  {
    id: "gal-6",
    title: "COMMUNITY OUTREACH & RELATIONS",
    category: "HUMAS",
    date: "12 JULI 2026",
    image: "/images/humas.jpeg",
    description: "Kunjungan silaturahmi dan sosialisasi program kerja kepada tokoh & warga Desa Klitih."
  },
  {
    id: "gal-7",
    title: "EQUIPMENT LOGISTICS & INFRASTRUCTURE",
    category: "PERLENGKAPAN",
    date: "15 JULI 2026",
    image: "/images/perlengkapan.jpeg",
    description: "Mobilisasi sarana prasarana dan kesiapan teknis venue kegiatan."
  },
  {
    id: "gal-8",
    title: "HOSPITALITY & TEAM WELFARE",
    category: "KONSUMSI",
    date: "18 JULI 2026",
    image: "/images/konsumsi.jpeg",
    description: "Manajemen konsumsi harian posko dan penyediaan jamuan ramah tamah warga."
  }
];
