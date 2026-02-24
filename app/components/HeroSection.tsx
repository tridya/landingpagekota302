"use client";

import { useData } from "@/app/lib/DataContext";

export default function HeroSection() {
    const { data } = useData();

    const scrollToAbout = () => {
        const el = document.querySelector("#about");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToTeam = () => {
        const el = document.querySelector("#team");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Multi-color gradient background inspired by AsetTrack palette */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-red-400/8 rounded-full blur-3xl animate-float" />
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-yellow-300/8 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-emerald-400/8 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
            </div>

            {/* 3D Grid lines */}
            <div className="absolute inset-0 grid-3d opacity-15" />

            {/* Floating 3D shapes — multi-color */}
            <div className="absolute top-20 right-20 w-20 h-20 shape-3d animate-spin-slow opacity-30 hidden lg:block">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-400/40 to-emerald-400/40 backdrop-blur-sm border border-white/10" />
            </div>
            <div className="absolute bottom-32 left-16 w-14 h-14 shape-3d animate-spin-slow-reverse opacity-20 hidden lg:block">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-red-400/40 to-yellow-400/40 backdrop-blur-sm border border-white/10" />
            </div>
            <div className="absolute top-40 left-1/3 w-8 h-8 shape-3d animate-bounce-slow opacity-25 hidden lg:block">
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-emerald-400/40 to-teal-600/40 backdrop-blur-sm border border-white/10" />
            </div>
            <div className="absolute bottom-48 right-1/3 w-12 h-12 shape-3d animate-spin-slow opacity-20 hidden lg:block">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-yellow-300/40 to-orange-400/40 backdrop-blur-sm border border-white/10" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm text-zinc-400">{data.project.subtitle}</span>
                </div>

                {/* Title — AsetTrack gradient */}
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight mb-6 animate-fade-in-up animation-delay-100">
                    <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-yellow-300 bg-clip-text text-transparent">
                        {data.project.title}
                    </span>
                </h1>

                {/* Tagline */}
                <p className="text-lg md:text-xl text-zinc-300 font-light max-w-3xl mx-auto mb-3 leading-relaxed animate-fade-in-up animation-delay-200">
                    Sistem Manajemen Inventori Perangkat Elektronik Berbasis Web
                </p>
                <p className="text-base text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
                    {data.project.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
                    <button
                        onClick={scrollToTeam}
                        className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                        <span className="flex items-center justify-center gap-2">
                            Profil Kelompok
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>
                    <button
                        onClick={scrollToAbout}
                        className="px-8 py-4 text-white font-medium rounded-2xl border border-white/10 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                        Tentang Sistem
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
                    <div className="w-1.5 h-3 rounded-full bg-white/40 animate-scroll-dot" />
                </div>
            </div>
        </section>
    );
}
