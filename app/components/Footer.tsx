"use client";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                            AT
                        </div>
                        <span className="font-semibold text-white text-xl">
                            Aset<span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Track</span>
                        </span>
                    </div>

                    {/* Info */}
                    <div className="text-center space-y-2">
                        <p className="text-sm text-zinc-400">
                            Kelompok KoTa 302 • Tugas Akhir 2026 • PT Padepokan Tujuh Sembilan
                        </p>
                        <p className="text-xs text-zinc-600 italic">
                            Always Improving You
                        </p>
                    </div>

                    {/* Nav Links */}
                    <div className="flex items-center gap-6">
                        <a href="#about" className="text-sm text-zinc-500 hover:text-white transition-colors">
                            Tentang
                        </a>
                        <a href="#team" className="text-sm text-zinc-500 hover:text-white transition-colors">
                            Profil
                        </a>
                        <a href="#objectives" className="text-sm text-zinc-500 hover:text-white transition-colors">
                            Tujuan
                        </a>
                        <a href="#details" className="text-sm text-zinc-500 hover:text-white transition-colors">
                            Detail
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-zinc-600">
                        &copy; {new Date().getFullYear()} KoTa 302. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
