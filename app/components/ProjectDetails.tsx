"use client";

import { useData } from "@/app/lib/DataContext";

const detailColors = [
    { border: "border-blue-400/20", hoverBorder: "group-hover:border-blue-400/40", bg: "group-hover:bg-blue-400/5", icon: "group-hover:border-blue-400/30 group-hover:bg-blue-400/10", shadow: "group-hover:shadow-blue-400/10" },
    { border: "border-emerald-400/20", hoverBorder: "group-hover:border-emerald-400/40", bg: "group-hover:bg-emerald-400/5", icon: "group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10", shadow: "group-hover:shadow-emerald-400/10" },
    { border: "border-yellow-400/20", hoverBorder: "group-hover:border-yellow-400/40", bg: "group-hover:bg-yellow-400/5", icon: "group-hover:border-yellow-400/30 group-hover:bg-yellow-400/10", shadow: "group-hover:shadow-yellow-400/10" },
    { border: "border-purple-400/20", hoverBorder: "group-hover:border-purple-400/40", bg: "group-hover:bg-purple-400/5", icon: "group-hover:border-purple-400/30 group-hover:bg-purple-400/10", shadow: "group-hover:shadow-purple-400/10" },
];

export default function ProjectDetails() {
    const { data } = useData();

    return (
        <section id="details" className="relative py-32 overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 rounded-full mb-4">
                        Fitur Utama
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Detail <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Proyek</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-lg">
                        Fitur-fitur utama dan highlight dari sistem AsetTrack.
                    </p>
                </div>

                {/* Detail cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(data.details || []).map((detail, i) => {
                        const color = detailColors[i % detailColors.length];
                        return (
                            <div
                                key={detail.id}
                                className={`glass-card rounded-3xl p-7 card-3d group relative overflow-hidden`}
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                {/* Hover gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-5 ${color.icon} ${color.shadow} group-hover:shadow-lg transition-all duration-300`}>
                                        {detail.icon}
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                        {detail.title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {detail.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
