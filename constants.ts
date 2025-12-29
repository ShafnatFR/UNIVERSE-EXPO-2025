import { Alumni, EventSchedule, University, InspirationalQuote } from './types';

export const ALUMNI_DATA: Alumni[] = [
    {
        id: '1',
        name: 'Rafie Razik',
        university: 'PNJ',
        major: 'Teknik Mesin',
        category: 'Saintek',
        quote: 'Belajar teknik mesin membuka banyak peluang di industri manufaktur.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RafieRazik',
        tags: ['TEKNIK', 'MESIN', 'PTN']
    },
    {
        id: '2',
        name: 'NUR ALIEF RAMADHANI',
        university: 'UPN Veteran Yogyakarta',
        major: 'Ekonomi Pembangunan',
        category: 'Soshum',
        quote: 'Ekonomi pembangunan membantu memahami dinamika pembangunan nasional.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NurAliefRamadhani',
        tags: ['EKONOMI', 'FEB', 'PTN']
    },
    {
        id: '3',
        name: 'GABRELLA FLORENTIKA GINTING',
        university: 'UPNVJ',
        major: 'Kesehatan Masyarakat',
        category: 'Saintek',
        quote: 'Kesehatan masyarakat adalah kunci kehidupan yang berkualitas.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GabrellaFlorentika',
        tags: ['KESEHATAN', 'FIKES', 'PTN']
    },
    {
        id: '4',
        name: 'Ghaida Retty Shafira',
        university: 'UPNVJ',
        major: 'Gizi',
        category: 'Saintek',
        quote: 'Nutrisi yang tepat adalah fondasi hidup sehat.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GhaidaRetty',
        tags: ['GIZI', 'FIKES', 'PTN']
    },
    {
        id: '5',
        name: 'Falia Marsha Maulida',
        university: 'UNPAD',
        major: 'Keperawatan',
        category: 'Saintek',
        quote: 'Keperawatan mengajarkan empati dan profesionalisme dalam merawat.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FaliaMarsha',
        tags: ['KEPERAWATAN', 'KESEHATAN', 'PTN']
    },
    {
        id: '6',
        name: 'KAZZUMAR ALFATH',
        university: 'Politeknik STIA LAN',
        major: 'Manajemen SDM Aparatur',
        category: 'Soshum',
        quote: 'Mengelola SDM aparatur untuk birokrasi yang lebih baik.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KazzumarAlfath',
        tags: ['MANAJEMEN', 'FISIP', 'PTN']
    },
    {
        id: '7',
        name: 'Zaskiya Putri Rahman',
        university: 'UB',
        major: 'Ilmu Perpustakaan',
        category: 'Soshum',
        quote: 'Perpustakaan adalah jantung pengetahuan masyarakat.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZaskiyaPutri',
        tags: ['PERPUSTAKAAN', 'FIA', 'PTN']
    },
    {
        id: '8',
        name: 'Fadhil Catur Septiawan',
        university: 'UPNVJ',
        major: 'Hubungan Internasional',
        category: 'Soshum',
        quote: 'HI membuka wawasan tentang diplomasi dan kerjasama global.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FadhilCatur',
        tags: ['HI', 'FISIP', 'PTN']
    },
    {
        id: '9',
        name: 'Ardy Mahesa Putra',
        university: 'UHAMKA',
        major: 'Teknik Elektro',
        category: 'Saintek',
        quote: 'Teknik elektro adalah masa depan teknologi energi.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ArdyMahesa',
        tags: ['TEKNIK', 'ELEKTRO', 'PTS']
    },
    {
        id: '10',
        name: 'septia dwi ayu ningrum',
        university: 'Universitas Brawijaya',
        major: 'Sosiologi',
        category: 'Soshum',
        quote: 'Sosiologi membantu memahami dinamika masyarakat modern.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SeptiaDwi',
        tags: ['SOSIOLOGI', 'FISIP', 'PTN']
    },
    {
        id: '11',
        name: 'Al',
        university: 'UPNVJ',
        major: 'Ilmu Komunikasi',
        category: 'Soshum',
        quote: 'Komunikasi efektif adalah kunci kesuksesan di era digital.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Al',
        tags: ['KOMUNIKASI', 'FISIP', 'PTN']
    },
    {
        id: '12',
        name: 'Azhara Sabila Rahmah',
        university: 'UNJ',
        major: 'Pendidikan Ekonomi',
        category: 'Soshum',
        quote: 'Mendidik generasi muda tentang literasi ekonomi.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AzharaSabila',
        tags: ['PENDIDIKAN', 'EKONOMI', 'PTN']
    },
    {
        id: '13',
        name: 'Chelsea Aulia Jasmine',
        university: 'UNJ',
        major: 'Pendidikan Masyarakat',
        category: 'Soshum',
        quote: 'Pendidikan masyarakat untuk pemberdayaan komunitas.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChelseaAulia',
        tags: ['PENDIDIKAN', 'FIP', 'PTN']
    },
    {
        id: '14',
        name: 'Mina Layla',
        university: 'UNDIP',
        major: 'Administrasi Publik',
        category: 'Soshum',
        quote: 'Administrasi publik untuk tata kelola pemerintahan yang baik.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinaLayla',
        tags: ['ADMINISTRASI', 'FISIP', 'PTN']
    },
    {
        id: '15',
        name: 'Shagnaz bunga intania',
        university: 'IPB',
        major: 'Manajemen Sumberdaya Perairan',
        category: 'Saintek',
        quote: 'Konservasi sumberdaya perairan untuk generasi mendatang.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ShagnazBunga',
        tags: ['PERIKANAN', 'FPIK', 'PTN']
    },
    {
        id: '16',
        name: 'Renta aisyah marantika',
        university: 'UPN Veteran Yogyakarta',
        major: 'Agroteknologi',
        category: 'Saintek',
        quote: 'Teknologi pertanian modern untuk ketahanan pangan.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RentaAisyah',
        tags: ['PERTANIAN', 'AGRO', 'PTN']
    },
    {
        id: '17',
        name: 'Adrian Alief Wijayanto',
        university: 'UNJ',
        major: 'Teknik Elektro',
        category: 'Saintek',
        quote: 'Listrik dan elektronika membentuk dunia modern.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AdrianAlief',
        tags: ['TEKNIK', 'ELEKTRO', 'PTN']
    },
    {
        id: '18',
        name: 'Reifano Ilhamulia Santana',
        university: 'Universitas Brawijaya',
        major: 'Matematika',
        category: 'Saintek',
        quote: 'Matematika adalah bahasa universal sains.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ReifanoIlhamulia',
        tags: ['MATEMATIKA', 'FMIPA', 'PTN']
    },
    {
        id: '19',
        name: 'Euis Rachel Pakpahan',
        university: 'UNDIP',
        major: 'Teknik Sipil',
        category: 'Saintek',
        quote: 'Membangun infrastruktur untuk kemajuan bangsa.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EuisRachel',
        tags: ['TEKNIK', 'SIPIL', 'PTN']
    },
    {
        id: '20',
        name: 'Dinda Ayu Lestari',
        university: 'Poltekkes Jakarta 2',
        major: 'Kesehatan Lingkungan',
        category: 'Saintek',
        quote: 'Lingkungan sehat menciptakan masyarakat yang sehat.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DindaAyu',
        tags: ['KESLING', 'KESEHATAN', 'PTN']
    },
    {
        id: '21',
        name: 'indhira keysha junaedi',
        university: 'Poltekkes Jakarta 2',
        major: 'Gizi',
        category: 'Saintek',
        quote: 'Gizi seimbang untuk kehidupan berkualitas.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=IndhiraKeysha',
        tags: ['GIZI', 'KESEHATAN', 'PTN']
    },
    {
        id: '22',
        name: 'Jasmine Afrillia Gusman',
        university: 'Poltekkes Jakarta 2',
        major: 'Sanitasi Lingkungan',
        category: 'Saintek',
        quote: 'Sanitasi adalah hak dasar setiap manusia.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JasmineAfrillia',
        tags: ['SANITASI', 'KESLING', 'PTN']
    },
    {
        id: '23',
        name: 'Bunga Cinta Keyla Sukmawan',
        university: 'UI',
        major: 'Geofisika',
        category: 'Saintek',
        quote: 'Memahami bumi dari dalam untuk mitigasi bencana.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BungaCinta',
        tags: ['GEOFISIKA', 'MIPA', 'PTN']
    },
    {
        id: '24',
        name: 'Nadya Salshabilla',
        university: 'UNJ',
        major: 'Pendidikan Kepelatihan Olahraga',
        category: 'Saintek',
        quote: 'Olahraga membentuk karakter dan jiwa kompetitif.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NadyaSalshabilla',
        tags: ['OLAHRAGA', 'FIKK', 'PTN']
    },
    {
        id: '25',
        name: 'Muhammad Faiz Putra Wibowo',
        university: 'BNI',
        major: 'Teknik Perkapalan',
        category: 'Saintek',
        quote: 'Teknik perkapalan untuk industri maritim Indonesia.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MuhammadFaiz',
        tags: ['TEKNIK', 'PERKAPALAN', 'PTS']
    },
    {
        id: '26',
        name: 'RAIHAN GANDAPRAWIRA',
        university: 'Politeknik APP Jakarta',
        major: 'Perdagangan Internasional',
        category: 'Soshum',
        quote: 'Perdagangan internasional membuka pasar global.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RaihanGanda',
        tags: ['PERDAGANGAN', 'ASEAN', 'PTN']
    },
    {
        id: '27',
        name: 'Khaira Syahwa',
        university: 'UNJ',
        major: 'Pendidikan Kesejahteraan Keluarga',
        category: 'Soshum',
        quote: 'Membangun keluarga sejahtera melalui pendidikan.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhairaSyahwa',
        tags: ['PENDIDIKAN', 'PKK', 'PTN']
    },
    {
        id: '28',
        name: 'Shafa Azalia Anandra',
        university: 'Gunadarma',
        major: 'Teknik Industri',
        category: 'Saintek',
        quote: 'Optimasi proses untuk efisiensi industri.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ShafaAzalia',
        tags: ['TEKNIK', 'INDUSTRI', 'PTS']
    },
    {
        id: '29',
        name: 'Raditia Triprawira',
        university: 'Politeknik STMI Jakarta',
        major: 'Teknologi Rekayasa Otomotif',
        category: 'Saintek',
        quote: 'Inovasi otomotif untuk transportasi masa depan.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RaditiaTri',
        tags: ['OTOMOTIF', 'TEKNIK', 'PTN']
    },
    {
        id: '30',
        name: 'Shabira Taqiya Karima',
        university: 'UI',
        major: 'Fisioterapi',
        category: 'Saintek',
        quote: 'Fisioterapi untuk pemulihan dan kualitas hidup lebih baik.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ShabiraTaqiya',
        tags: ['FISIOTERAPI', 'VOKASI', 'PTN']
    },
    {
        id: '31',
        name: 'Maura alicia davina',
        university: 'UNDIP',
        major: 'Agroekoteknologi',
        category: 'Saintek',
        quote: 'Pertanian berkelanjutan untuk masa depan hijau.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MauraAlicia',
        tags: ['PERTANIAN', 'AGRO', 'PTN']
    },
    {
        id: '32',
        name: 'Happy Pratiwi Mulia Hidayat',
        university: 'UNDIP',
        major: 'Ilmu Perpustakaan',
        category: 'Soshum',
        quote: 'Mengelola informasi di era digital.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HappyPratiwi',
        tags: ['ILPUS', 'FIB', 'PTN']
    },
    {
        id: '33',
        name: 'Muthia Hanifah Kamal',
        university: 'UI',
        major: 'Ilmu Ekonomi',
        category: 'Soshum',
        quote: 'Memahami ekonomi untuk keputusan yang lebih baik.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MuthiaHanifah',
        tags: ['EKONOMI', 'FEB', 'PTN']
    },
    {
        id: '34',
        name: 'Adji Setyo Laksono',
        university: 'IPB',
        major: 'Teknologi dan Manajemen Ternak',
        category: 'Saintek',
        quote: 'Peternakan modern untuk ketahanan protein nasional.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AdjiSetyo',
        tags: ['PETERNAKAN', 'VOKASI', 'PTN']
    },
    {
        id: '35',
        name: 'Raiza Azzahra',
        university: 'UNDIP',
        major: 'Administrasi Publik',
        category: 'Soshum',
        quote: 'Birokrasi yang efisien untuk pelayanan publik optimal.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RaizaAzzahra',
        tags: ['ADMINISTRASI', 'FISIP', 'PTN']
    },
    {
        id: '36',
        name: 'Kayla Putri Rahayu',
        university: 'UPN Veteran Yogyakarta',
        major: 'Teknik Industri',
        category: 'Saintek',
        quote: 'Sistem produksi yang efektif dan efisien.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KaylaPutri',
        tags: ['TEKNIK', 'INDUSTRI', 'PTN']
    },
    {
        id: '37',
        name: 'Firyal Mumtaz',
        university: 'Poltekkes Jakarta 2',
        major: 'Sanitasi Lingkungan',
        category: 'Saintek',
        quote: 'Sanitasi berkualitas untuk kesehatan masyarakat.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FiryalMumtaz',
        tags: ['SANITASI', 'KESLING', 'PTN']
    },
    {
        id: '38',
        name: 'Akbar Rifki Oktafianto',
        university: 'UI',
        major: 'Fisika',
        category: 'Saintek',
        quote: 'Fisika adalah fondasi semua ilmu alam.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AkbarRifki',
        tags: ['FISIKA', 'MIPA', 'PTN']
    },
    {
        id: '39',
        name: 'Jannatul Rohmah Aisyiah',
        university: 'UNPAD',
        major: 'Ilmu Sejarah',
        category: 'Soshum',
        quote: 'Belajar dari masa lalu untuk masa depan yang lebih baik.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JannatulRohmah',
        tags: ['SEJARAH', 'FIB', 'PTN']
    },
    {
        id: '40',
        name: 'Mulky Aisyah',
        university: 'Politeknik STIA LAN',
        major: 'Administrasi Pembangunan Negara',
        category: 'Soshum',
        quote: 'Administrasi pembangunan untuk negara maju.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MulkyAisyah',
        tags: ['ADMINISTRASI', 'VOKASI', 'PTN']
    },
    {
        id: '41',
        name: 'Fatimah Al Bahar',
        university: 'UNJ',
        major: 'Pendidikan Bahasa Perancis',
        category: 'Soshum',
        quote: 'Bahasa adalah jendela menuju budaya dunia.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FatimahAlBahar',
        tags: ['BAHASA', 'FBS', 'PTN']
    },
    {
        id: '42',
        name: 'Rafly setiawan',
        university: 'UNJ',
        major: 'Olahraga Rekreasi',
        category: 'Saintek',
        quote: 'Olahraga rekreasi untuk hidup sehat dan bahagia.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RaflySetiawan',
        tags: ['OLAHRAGA', 'FIKK', 'PTN']
    },
    {
        id: '43',
        name: 'Andhika Widya Tama',
        university: 'Politeknik Astra',
        major: 'Teknik Sipil',
        category: 'Saintek',
        quote: 'Membangun gedung dengan teknologi konstruksi modern.',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AndhikaWidya',
        tags: ['TEKNIK', 'SIPIL', 'PTS']
    }
];

export const SCHEDULE_DATA: EventSchedule[] = [
    {
        id: '1',
        time: "09:00 - 10:00",
        title: "Opening: Welcome to the Universe",
        speaker: "Rector & Committee",
        location: "Main Stage"
    },
    {
        id: '2',
        time: "10:30 - 12:00",
        title: "Talkshow: Surviving First Year",
        speaker: "Panel Alumni UI, ITB, UGM",
        location: "Planetarium Hall"
    },
    {
        id: '3',
        time: "13:00 - 14:30",
        title: "Workshop: Finding Your North Star",
        speaker: "Career Coach Pro",
        location: "Workshop Area A"
    },
    {
        id: '4',
        time: "15:00 - 16:30",
        title: "Tech Demo: AI & Future Jobs",
        speaker: "Tech Leaders",
        location: "Innovation Hub"
    }
];

export const UNIVERSITY_DATA: University[] = [
    {
        id: 'ui',
        name: 'Universitas Indonesia',
        description: 'Kampus perjuangan dengan lingkungan hijau yang luas. The center of our academic solar system.',
        majors: ['Kedokteran', 'Hukum', 'Ilmu Komputer'],
        link: 'https://www.ui.ac.id',
        x: 50,
        y: 50,
        color: 'bg-yellow-400',
        shadowColor: 'shadow-yellow-400',
        size: 'w-24 h-24',
        category: 'General',
        images: [
            "https://picsum.photos/400/250?random=10",
            "https://picsum.photos/400/250?random=11",
            "https://picsum.photos/400/250?random=12"
        ]
    },
    {
        id: 'itb',
        name: 'ITB',
        description: 'Pusat pengembangan teknologi dan seni rupa. Mengorbit dengan inovasi.',
        majors: ['Teknik Sipil', 'Seni Rupa', 'Informatika'],
        link: 'https://www.itb.ac.id',
        x: 0,
        y: 0,
        color: 'bg-blue-400',
        shadowColor: 'shadow-blue-400',
        size: 'w-16 h-16',
        category: 'Tech',
        orbit: {
            radius: 35,
            duration: 40,
            initialAngle: 0
        },
        images: [
            "https://picsum.photos/400/250?random=20",
            "https://picsum.photos/400/250?random=21"
        ]
    },
    {
        id: 'ugm',
        name: 'UGM',
        description: 'Universitas kerakyatan dengan jati diri kebangsaan.',
        majors: ['Psikologi', 'Kehutanan', 'HI'],
        link: 'https://www.ugm.ac.id',
        x: 0,
        y: 0,
        color: 'bg-emerald-400',
        shadowColor: 'shadow-emerald-400',
        size: 'w-20 h-20',
        category: 'Science',
        orbit: {
            radius: 25,
            duration: 30,
            initialAngle: 180
        },
        images: [
            "https://picsum.photos/400/250?random=30",
            "https://picsum.photos/400/250?random=31"
        ]
    },
    {
        id: 'its',
        name: 'ITS',
        description: 'Kampus maritim dan inovasi robotika.',
        majors: ['Teknik Kelautan', 'Arsitektur'],
        link: 'https://www.its.ac.id',
        x: 85,
        y: 80,
        color: 'bg-indigo-400',
        shadowColor: 'shadow-indigo-400',
        size: 'w-14 h-14',
        category: 'Tech',
        images: [
            "https://picsum.photos/400/250?random=40"
        ]
    },
    {
        id: 'unpad',
        name: 'Unpad',
        description: 'Kampus dengan fakultas komunikasi terbaik.',
        majors: ['Komunikasi', 'Kedokteran Gigi'],
        link: 'https://www.unpad.ac.id',
        x: 15,
        y: 75,
        color: 'bg-pink-400',
        shadowColor: 'shadow-pink-400',
        size: 'w-16 h-16',
        category: 'Arts',
        images: [
            "https://picsum.photos/400/250?random=50"
        ]
    }
];

export const INSPIRATIONAL_QUOTES: InspirationalQuote[] = [
    {
        id: 'q1',
        text: "Masa depan itu milik mereka yang percaya pada keindahan mimpi-mimpi mereka.",
        author: "Eleanor Roosevelt",
        role: "Historical Figure"
    },
    {
        id: 'q2',
        text: "Jangan takut berjalan lambat, takutlah jika hanya berdiri diam.",
        author: "Pepatah Kuno",
        role: "Wisdom"
    },
    {
        id: 'q3',
        text: "Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu lakukan.",
        author: "Steve Jobs",
        role: "Innovator"
    },
    {
        id: 'q4',
        text: "Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia.",
        author: "Nelson Mandela",
        role: "Leader"
    },
    {
        id: 'q5',
        text: "Semesta tidak pernah tidur, begitu juga dengan mimpimu. Teruslah bergerak.",
        author: "Alumni Universe Expo '23",
        role: "Senior Student"
    }
];