"use client";

import { useData } from "@/app/lib/DataContext";

export default function AboutSection() {
    const { data } = useData();

    return (
        <section id="about" className="relative py-32 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full mb-4">
                        Tentang Sistem
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Tentang <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">AsetTrack</span>
                    </h2>
                    <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed mb-4">
                        {data.project.description}
                    </p>
                    <p className="text-zinc-500 max-w-3xl mx-auto text-base leading-relaxed">
                        {data.project.descriptionExtended}
                    </p>
                </div>

                {/* Dashboard Preview Card */}
                <div className="glass-card rounded-3xl p-3 max-w-4xl mx-auto card-3d">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 aspect-video flex items-center justify-center">
                        {/* Simulated dashboard UI */}
                        <div className="absolute inset-0 p-6 md:p-10">
                            {/* Top bar */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-xs font-bold">AT</div>
                                    <span className="text-white/80 text-sm font-medium hidden sm:block">AsetTrack Dashboard</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                                </div>
                            </div>
                            {/* Dashboard grid */}
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                                {/* Stat cards */}
                                <div className="col-span-1 bg-white/5 rounded-xl p-3 border border-white/5">
                                    <div className="text-xs text-zinc-500 mb-1">Total Aset</div>
                                    <div className="text-lg font-bold text-white">1,247</div>
                                    <div className="text-xs text-emerald-400 mt-1">+12%</div>
                                </div>
                                <div className="col-span-1 bg-white/5 rounded-xl p-3 border border-white/5">
                                    <div className="text-xs text-zinc-500 mb-1">Emisi CO₂</div>
                                    <div className="text-lg font-bold text-white">3.2t</div>
                                    <div className="text-xs text-red-400 mt-1">-8%</div>
                                </div>
                                <div className="col-span-1 bg-white/5 rounded-xl p-3 border border-white/5">
                                    <div className="text-xs text-zinc-500 mb-1">Energi</div>
                                    <div className="text-lg font-bold text-white">856 kWh</div>
                                    <div className="text-xs text-yellow-400 mt-1">+3%</div>
                                </div>
                                <div className="col-span-3 md:col-span-1 bg-white/5 rounded-xl p-3 border border-white/5">
                                    <div className="text-xs text-zinc-500 mb-1">Pengadaan</div>
                                    <div className="text-lg font-bold text-white">24</div>
                                    <div className="text-xs text-blue-400 mt-1">Pending</div>
                                </div>
                                {/* Chart placeholder */}
                                <div className="col-span-3 md:col-span-2 bg-white/5 rounded-xl p-3 border border-white/5 hidden sm:block">
                                    <div className="text-xs text-zinc-500 mb-2">Emisi Karbon (6 bulan)</div>
                                    <div className="flex items-end gap-1 h-16">
                                        {[65, 55, 70, 45, 35, 30].map((h, i) => (
                                            <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500/60 to-emerald-400/20 rounded-t-sm" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                </div>
                                <div className="col-span-3 md:col-span-2 bg-white/5 rounded-xl p-3 border border-white/5 hidden sm:block">
                                    <div className="text-xs text-zinc-500 mb-2">Konsumsi Energi</div>
                                    <div className="flex items-end gap-1 h-16">
                                        {[40, 60, 50, 80, 55, 70].map((h, i) => (
                                            <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/60 to-blue-400/20 rounded-t-sm" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
