import { Alumni, EventSchedule, University, InspirationalQuote } from './types';

export const ALUMNI_DATA: Alumni[] = [
    {
        id: '1',
        name: "Sarah Wijaya",
        university: "Universitas Indonesia",
        major: "Ilmu Komputer",
        category: "Saintek",
        quote: "Dulu aku kira coding itu serem, ternyata kayak nulis puisi tapi pake logika.",
        image: "https://picsum.photos/200/200?random=1",
        tags: ["Tech", "Coding", "UI"]
    },
    {
        id: '2',
        name: "Budi Santoso",
        university: "ITB",
        major: "Desain Komunikasi Visual",
        category: "Soshum",
        quote: "Seni dan teknologi itu gak terpisah. Di sini aku belajar gabungin keduanya.",
        image: "https://picsum.photos/200/200?random=2",
        tags: ["Art", "Design", "Creative"]
    },
    {
        id: '3',
        name: "Amelia Putri",
        university: "UGM",
        major: "Psikologi",
        category: "Soshum",
        quote: "Memahami manusia itu serumit memahami semesta, tapi seru banget!",
        image: "https://picsum.photos/200/200?random=3",
        tags: ["People", "Mind", "Social"]
    },
    {
        id: '4',
        name: "Kevin Tan",
        university: "ITS",
        major: "Teknik Robotika",
        category: "Saintek",
        quote: "Bikin robot itu bukan cuma soal kabel, tapi soal masa depan.",
        image: "https://picsum.photos/200/200?random=4",
        tags: ["Robot", "Future", "Engineering"]
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