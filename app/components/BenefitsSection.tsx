"use client";

import { useData } from "@/app/lib/DataContext";

export default function BenefitsSection() {
    const { data } = useData();

    const benefits = data.project.benefits || [];
    const benefitIcons = ["✅", "⚡", "📍", "📋", "🏢"];

    return (
        <section id="benefits" className="relative py-32 overflow-hidden">
            {/* Gradient background overlay — inspired by the HTML's manfaat section */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 rounded-full mb-4">
                        Manfaat
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Manfaat yang <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Diharapkan</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-lg">
                        Dampak positif yang diharapkan dari penggunaan sistem AsetTrack.
                    </p>
                </div>

                {/* Benefits grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {benefits.map((benefit, i) => (
                        <div
                            key={i}
                            className={`glass-card p-7 rounded-3xl card-3d group relative overflow-hidden ${i === benefits.length - 1 && benefits.length % 3 === 2 ? "md:col-span-2 lg:col-span-1" : ""
                                } ${i >= benefits.length - 1 && benefits.length % 3 === 1 ? "lg:col-start-2" : ""
                                }`}
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-xl mb-5 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/15 group-hover:shadow-lg group-hover:shadow-emerald-400/10 transition-all duration-300">
                                    {benefitIcons[i] || "✅"}
                                </div>

                                <p className="text-sm text-zinc-300 leading-relaxed group-hover:text-white transition-colors">
                                    {benefit}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
