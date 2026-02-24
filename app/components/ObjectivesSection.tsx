"use client";

import { useData } from "@/app/lib/DataContext";

export default function ObjectivesSection() {
    const { data } = useData();

    const objectiveIcons = ["🎯", "⚡", "🔄", "📈"];

    return (
        <section id="objectives" className="relative py-32 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-yellow-400 uppercase bg-yellow-400/10 rounded-full mb-4">
                        Tujuan Pengembangan
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Tujuan <span className="bg-gradient-to-r from-yellow-300 to-emerald-400 bg-clip-text text-transparent">Utama</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-lg">
                        Target dan sasaran utama dalam pengembangan sistem AsetTrack.
                    </p>
                </div>

                {/* Objectives list */}
                <div className="grid gap-6 max-w-4xl mx-auto">
                    {(data.project.objectives || []).map((objective, i) => (
                        <div
                            key={i}
                            className="glass-card p-6 md:p-8 rounded-3xl card-3d group flex items-start gap-5"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            {/* Number / Icon */}
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-emerald-400/20 border border-yellow-400/20 flex items-center justify-center text-2xl group-hover:border-yellow-400/40 group-hover:shadow-lg group-hover:shadow-yellow-400/10 transition-all duration-300">
                                {objectiveIcons[i] || "🎯"}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="text-xs font-semibold text-yellow-400/80 uppercase tracking-wider mb-2">
                                    Tujuan {i + 1}
                                </div>
                                <p className="text-zinc-300 leading-relaxed group-hover:text-white transition-colors">
                                    {objective}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
