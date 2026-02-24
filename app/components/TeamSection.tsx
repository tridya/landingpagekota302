"use client";

import { useData } from "@/app/lib/DataContext";

function getInitials(name: string): string {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2);
}

const memberColors = [
    { from: "from-blue-400", to: "to-cyan-400", shadow: "shadow-blue-500/20" },
    { from: "from-emerald-400", to: "to-teal-400", shadow: "shadow-emerald-500/20" },
    { from: "from-purple-400", to: "to-orange-400", shadow: "shadow-yellow-500/20" },
];

export default function TeamSection() {
    const { data } = useData();

    return (
        <section id="team" className="relative py-32 overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-purple-400 uppercase bg-purple-400/10 rounded-full mb-4">
                        Profil Kelompok
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Kelompok <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">KoTa 302</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-lg">
                        Tim yang berdedikasi untuk mewujudkan proyek Tugas Akhir ini.
                    </p>
                </div>

                {/* Team cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {(data.team || []).map((member, i) => {
                        const color = memberColors[i % memberColors.length];
                        return (
                            <div
                                key={member.id}
                                className="glass-card rounded-3xl p-8 text-center card-3d group relative overflow-hidden"
                                style={{ animationDelay: `${i * 150}ms` }}
                            >
                                {/* Colored top border accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color.from} ${color.to} opacity-60 group-hover:opacity-100 transition-opacity`} />

                                {/* Photo / Avatar */}
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    {/* Glow ring */}
                                    <div className={`absolute -inset-1 rounded-full bg-gradient-to-br ${color.from} ${color.to} opacity-40 blur-sm group-hover:opacity-70 transition-opacity duration-500`} />
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/10">
                                        {member.photo ? (
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                                <span className="text-3xl font-bold text-white/60">
                                                    {getInitials(member.name)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                                    {member.name}
                                </h3>
                                <p className={`text-sm font-medium bg-gradient-to-r ${color.from} ${color.to} bg-clip-text text-transparent mb-4`}>
                                    {member.role}
                                </p>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
