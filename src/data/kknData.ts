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
  groupPhoto: "/images/ketua.jpeg",
  closingBg: "/images/ketua.jpeg",
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
      { name: "DIMAS EKA PRASETYO", role: "Divisi Humas", nim: "2301013108", prodi: "Pendidikan Agama Islam", avatar: "/images/dimas_eka.jpg" },
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
    id: "gal-baihaqi",
    title: "MOHAMAD YUSRIL BAIHAQI",
    category: "KETUA KELOMPOK",
    date: "NIM: 2301290376",
    image: "/images/baihaqi.jpg",
    description: "Ketua KKN Kelompok 27 • Ekonomi Syariah UNWAHA Jombang"
  },
  {
    id: "gal-salman",
    title: "SALMAN ALFARIDHO FARDIANSYAH",
    category: "DIVISI ACARA",
    date: "NIM: 2302041163",
    image: "/images/salman.jpg",
    description: "Divisi Acara • Informatika UNWAHA Jombang"
  },
  {
    id: "gal-nadya",
    title: "NADYA HUSNUL KHOTIMAH",
    category: "DIVISI ACARA",
    date: "NIM: 2305140682",
    image: "/images/nadya.jpg",
    description: "Divisi Acara • Manajemen UNWAHA Jombang"
  },
  {
    id: "gal-sita",
    title: "ARIEJ MASHITOH AL BANY",
    category: "DIVISI ACARA",
    date: "NIM: 2301012981",
    image: "/images/sita.jpg",
    description: "Divisi Acara • Pendidikan Agama Islam UNWAHA Jombang"
  },
  {
    id: "gal-aklis",
    title: "AKHLIS BUDIANTO",
    category: "DIVISI ACARA",
    date: "NIM: 2305140670",
    image: "/images/aklis.jpg",
    description: "Divisi Acara • Manajemen UNWAHA Jombang"
  },
  {
    id: "gal-laila",
    title: "LAILATUL MUFIDAH",
    category: "DIVISI ACARA",
    date: "NIM: 2304100179",
    image: "/images/laila.jpg",
    description: "Divisi Acara • Pendidikan Biologi UNWAHA Jombang"
  },
  {
    id: "gal-arinda",
    title: "ARINDA ISLAMIYAH",
    category: "DIVISI SEKRETARIS",
    date: "NIM: 2305140736",
    image: "/images/arinda.jpg",
    description: "Sekretaris Kelompok • Manajemen UNWAHA Jombang"
  },
  {
    id: "gal-murni",
    title: "MURNI",
    category: "DIVISI SEKRETARIS",
    date: "NIM: 2301021002",
    image: "/images/murni.jpg",
    description: "Sekretaris Kelompok • Pendidikan Bahasa Arab UNWAHA Jombang"
  },
  {
    id: "gal-diva",
    title: "DIVA NUGRAHANI",
    category: "DIVISI BENDAHARA",
    date: "NIM: 2305140704",
    image: "/images/diva.jpg",
    description: "Bendahara Kelompok • Manajemen UNWAHA Jombang"
  },
  {
    id: "gal-kisa",
    title: "KIA SALUNG SHAFA",
    category: "DIVISI PDD",
    date: "NIM: 2304130230",
    image: "/images/kisa.jpg",
    description: "Divisi PDD • Pendidikan Bahasa Inggris UNWAHA Jombang"
  },
  {
    id: "gal-thoil",
    title: "MOH. THOILUN NI'AM",
    category: "DIVISI PDD",
    date: "NIM: 2301013182",
    image: "/images/thoil.jpg",
    description: "Divisi PDD • Pendidikan Agama Islam UNWAHA Jombang"
  },
  {
    id: "gal-yogi",
    title: "YOGI BACHTIAR",
    category: "DIVISI PDD",
    date: "NIM: 2302050817",
    image: "/images/yogi.jpg",
    description: "Divisi PDD • Sistem Informasi UNWAHA Jombang"
  },
  {
    id: "gal-alma",
    title: "ALMA NUR KURNIAWAN",
    category: "DIVISI PERLENGKAPAN",
    date: "NIM: 2302050834",
    image: "/images/alma.jpg",
    description: "Divisi Perlengkapan • Sistem Informasi UNWAHA Jombang"
  },
  {
    id: "gal-danu",
    title: "MUKHAMMAD DANU ARTA",
    category: "DIVISI PERLENGKAPAN",
    date: "NIM: 2305140737",
    image: "/images/danu.jpg",
    description: "Divisi Perlengkapan • Manajemen UNWAHA Jombang"
  },
  {
    id: "gal-dimas",
    title: "DIMAS EKA PRASETYO",
    category: "DIVISI HUMAS",
    date: "NIM: 2301013108",
    image: "/images/dimas_eka.jpg",
    description: "Divisi Humas • Pendidikan Agama Islam UNWAHA Jombang"
  },
  {
    id: "gal-kafa",
    title: "A'A KAFABIHI DZULQORNAIN",
    category: "DIVISI HUMAS",
    date: "NIM: 2301013076",
    image: "/images/kafa.jpg",
    description: "Divisi Humas • Pendidikan Agama Islam UNWAHA Jombang"
  },
  {
    id: "gal-tyas",
    title: "TYAS ARTIKA ANGGRAINI",
    category: "DIVISI HUMAS",
    date: "NIM: 2301290363",
    image: "/images/tyas.jpg",
    description: "Divisi Humas • Ekonomi Syariah UNWAHA Jombang"
  },
  {
    id: "gal-lina",
    title: "SERLINA MAGFIROH",
    category: "DIVISI KONSUMSI",
    date: "NIM: 2301013028",
    image: "/images/lina.jpg",
    description: "Divisi Konsumsi • Pendidikan Agama Islam UNWAHA Jombang"
  },
  {
    id: "gal-hakiki",
    title: "HAKIKI RAMADHAN",
    category: "DIVISI KONSUMSI",
    date: "NIM: 2303070212",
    image: "/images/hakiki.jpg",
    description: "Divisi Konsumsi • Agroekoteknologi UNWAHA Jombang"
  },
  {
    id: "gal-nadia",
    title: "NADIA RAMA DIWANTI",
    category: "DIVISI KONSUMSI",
    date: "NIM: 2301013118",
    image: "/images/nadia.jpg",
    description: "Divisi Konsumsi • Pendidikan Agama Islam UNWAHA Jombang"
  },
  {
    id: "gal-nuria",
    title: "ANANDA NURIA HALIZA PUTRI",
    category: "DIVISI KONSUMSI",
    date: "NIM: 2301012961",
    image: "/images/nuria.jpg",
    description: "Divisi Konsumsi • Pendidikan Agama Islam UNWAHA Jombang"
  },
  {
    id: "gal-achsan",
    title: "SAN PROJECT",
    category: "ANGGOTA KELOMPOK",
    date: "UNWAHA JOMBANG",
    image: "/images/san_project.png",
    description: "Mahasiswa KKN Kelompok 27 • UNWAHA Jombang"
  }
];
