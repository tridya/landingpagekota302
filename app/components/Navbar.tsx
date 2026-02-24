"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Tentang", href: "#about" },
    { label: "Profil", href: "#team" },
    { label: "Tujuan", href: "#objectives" },
    { label: "Detail", href: "#details" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "navbar-glass py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2.5 group cursor-pointer"
                >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
                        AT
                    </div>
                    <span className="font-semibold text-white text-lg tracking-tight">
                        Aset<span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Track</span>
                    </span>
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className="px-4 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
                    <Link
                        href="/admin"
                        className="ml-3 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Admin Panel
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-80 border-t border-white/5 mt-3" : "max-h-0"
                    }`}
            >
                <div className="px-6 py-4 flex flex-col gap-2 navbar-glass">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className="px-4 py-3 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-all text-left cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
                    <Link
                        href="/admin"
                        className="mt-2 px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl text-center"
                    >
                        Admin Panel
                    </Link>
                </div>
            </div>
        </nav>
    );
}
