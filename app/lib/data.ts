export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    photo: string;
}

export interface ProjectInfo {
    title: string;
    subtitle: string;
    description: string;
    descriptionExtended: string;
    objectives: string[];
    benefits: string[];
    technologies: string[];
}

export interface ProjectDetail {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface SiteData {
    project: ProjectInfo;
    team: TeamMember[];
    details: ProjectDetail[];
}

export const defaultData: SiteData = {
    project: {
        title: "AsetTrack",
        subtitle: "Tugas Akhir — KoTa 302 • PT Padepokan Tujuh Sembilan",
        description:
            "Sistem Manajemen Inventori Perangkat Elektronik Berbasis Web — Aplikasi ini dirancang khusus untuk PT Padepokan Tujuh Sembilan guna mengelola inventori perangkat elektronik. Mengubah proses manual yang terpisah menjadi terpusat, terintegrasi, dan mudah diakses secara real-time.",
        descriptionExtended:
            "Mendukung seluruh siklus pengelolaan aset serta dilengkapi fitur Decision Support System (DSS) untuk proses pengadaan laptop berdasarkan spesifikasi teknis dan batasan anggaran.",
        objectives: [
            "Mengembangkan aplikasi berbasis web yang mampu menghitung emisi karbon dari penggunaan perangkat di lingkungan kantor PT Padepokan Tujuh Sembilan secara otomatis dan akurat hingga tingkat kesalahan 5% sebagai dasar penyusunan sustainability report.",
            "Menyediakan platform internal yang membantu perusahaan dalam mengelola data konsumsi energi dan data alat elektronik kantor, sehingga mendukung implementasi praktik bisnis berkelanjutan berbasis teknologi dengan mengurangi waktu pengumpulan data konsumsi dan alat elektronik hingga 50%.",
            "Mengembangkan fitur pengambilan keputusan perusahaan berdasarkan umur alat, watt, dan pengeluaran emisi karbon yang dihasilkan oleh alat elektronik, untuk mengoptimalkan penggantian perangkat dan mengurangi emisi karbon secara keseluruhan di kantor.",
            "Mengembangkan fitur visualisasi data yang menampilkan hasil estimasi energi, pengeluaran energi, dan emisi dalam bentuk grafik dan tabel, untuk memudahkan pengambilan keputusan manajerial secara informatif.",
        ],
        benefits: [
            "Data inventori menjadi lebih akurat, lengkap, dan selalu terkini.",
            "Proses administrasi aset berjalan lebih cepat dan efisien, mengurangi waktu pencarian manual secara signifikan.",
            "Pemantauan status dan lokasi perangkat dapat dilakukan secara real-time, sehingga meminimalkan risiko kehilangan atau penyalahgunaan aset.",
            "Pengambilan keputusan pengadaan laptop menjadi lebih rasional, terukur, dan dapat dipertanggungjawabkan.",
            "Beban kerja tim administrasi dan IT berkurang, sementara tata kelola aset perusahaan menjadi lebih profesional dan siap menghadapi kebutuhan audit.",
        ],
        technologies: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Decision Support System",
            "REST API",
            "Tailwind CSS",
            "Chart.js",
        ],
    },
    team: [
        {
            id: "1",
            name: "Yulina Anggraeni",
            role: "FullStack Developer",
            bio: "Merancang antarmuka intuitif dan responsif untuk sistem manajemen aset.",
            photo: "/yulina2.jpeg",
        },
        {
            id: "2",
            name: "Alqan Nazra",
            role: "FullStack Developer",
            bio: "Logika bisnis, database, dan implementasi Decision Support System (DSS).",
            photo: "/alqan1.jpeg",
        },
        {
            id: "3",
            name: "Muhammad Daffa Tridya Atha",
            role: "FullStack Developer",
            bio: "Alur Aplikasi, database, dan implementasi Decision Support System (DSS).",
            photo: "/daffa2.webp",
        },
    ],
    details: [
        {
            id: "1",
            title: "Manajemen Inventori",
            description:
                "Pengelolaan data perangkat elektronik terpusat — mencatat, memperbarui, dan melacak seluruh aset kantor secara real-time.",
            icon: "📦",
        },
        {
            id: "2",
            title: "Carbon Emission Tracker",
            description:
                "Menghitung emisi karbon dari penggunaan perangkat elektronik secara otomatis dan akurat sebagai dasar sustainability report.",
            icon: "🌿",
        },
        {
            id: "3",
            title: "Decision Support System",
            description:
                "Fitur DSS untuk proses pengadaan laptop berdasarkan spesifikasi teknis, umur alat, watt, dan batasan anggaran.",
            icon: "🧠",
        },
        {
            id: "4",
            title: "Visualisasi Data",
            description:
                "Grafik dan tabel interaktif untuk menampilkan estimasi energi, pengeluaran, dan emisi guna mendukung keputusan manajerial.",
            icon: "📊",
        },
    ],
};

const STORAGE_KEY = "landing-page-kota302-data";

export function loadData(): SiteData {
    if (typeof window === "undefined") return defaultData;
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored) as Partial<SiteData>;
            // Deep-merge with defaultData so that newly added fields are never undefined
            return {
                ...defaultData,
                ...parsed,
                project: {
                    ...defaultData.project,
                    ...(parsed.project ?? {}),
                },
            };
        }
    } catch {
        // ignore parse errors
    }
    return defaultData;
}

export function saveData(data: SiteData): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}
