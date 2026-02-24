"use client";

import { useData } from "@/app/lib/DataContext";

export default function ProjectSection() {
    const { data } = useData();

    return (
        <section id="project" className="relative py-32 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 rounded-full mb-4">
                        Proyek Kami
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {data.project.title}
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        {data.project.description}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Objectives Card */}
                    <div className="glass-card p-8 rounded-3xl card-3d group">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-xl shadow-lg shadow-blue-500/20">
                                🎯
                            </div>
                            <h3 className="text-xl font-semibold text-white">Tujuan</h3>
                        </div>
                        <ul className="space-y-4">
                            {(data.project.objectives || []).map((obj, i) => (
                                <li key={i} className="flex items-start gap-3 group/item">
                                    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-lg bg-blue-400/10 text-blue-400 flex items-center justify-center text-xs font-bold border border-blue-400/20">
                                        {i + 1}
                                    </span>
                                    <span className="text-zinc-300 leading-relaxed group-hover/item:text-white transition-colors text-sm">
                                        {obj}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies Card */}
                    <div className="glass-card p-8 rounded-3xl card-3d group">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-xl shadow-lg shadow-yellow-500/20">
                                ⚡
                            </div>
                            <h3 className="text-xl font-semibold text-white">Teknologi</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {(data.project.technologies || []).map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 rounded-xl text-sm font-medium text-zinc-200 bg-white/5 border border-white/10 hover:border-blue-400/30 hover:bg-blue-400/5 hover:text-blue-300 transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
