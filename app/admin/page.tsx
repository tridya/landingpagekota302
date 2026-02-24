"use client";

import { useState } from "react";
import Link from "next/link";
import { useData } from "@/app/lib/DataContext";
import {
    SiteData,
    TeamMember,
    ProjectDetail,
    generateId,
} from "@/app/lib/data";

type Tab = "project" | "team" | "details";

export default function AdminPage() {
    const { data, setData, resetData, isLoaded } = useData();
    const [activeTab, setActiveTab] = useState<Tab>("project");
    const [toast, setToast] = useState<string | null>(null);

    const showToast = (msg: string) => {
        setToast(msg);
        setTimeout(() => setToast(null), 3000);
    };

    /* ─── Project handlers ────────────────────────── */
    const updateProject = (field: string, value: string) => {
        setData({
            ...data,
            project: { ...data.project, [field]: value },
        });
    };

    const updateObjective = (index: number, value: string) => {
        const newObj = [...data.project.objectives];
        newObj[index] = value;
        setData({
            ...data,
            project: { ...data.project, objectives: newObj },
        });
    };

    const addObjective = () => {
        setData({
            ...data,
            project: {
                ...data.project,
                objectives: [...data.project.objectives, ""],
            },
        });
    };

    const removeObjective = (index: number) => {
        setData({
            ...data,
            project: {
                ...data.project,
                objectives: data.project.objectives.filter((_, i) => i !== index),
            },
        });
    };

    const updateBenefit = (index: number, value: string) => {
        const newBen = [...data.project.benefits];
        newBen[index] = value;
        setData({
            ...data,
            project: { ...data.project, benefits: newBen },
        });
    };

    const addBenefit = () => {
        setData({
            ...data,
            project: {
                ...data.project,
                benefits: [...data.project.benefits, ""],
            },
        });
    };

    const removeBenefit = (index: number) => {
        setData({
            ...data,
            project: {
                ...data.project,
                benefits: data.project.benefits.filter((_, i) => i !== index),
            },
        });
    };

    const updateTechnology = (index: number, value: string) => {
        const newTech = [...data.project.technologies];
        newTech[index] = value;
        setData({
            ...data,
            project: { ...data.project, technologies: newTech },
        });
    };

    const addTechnology = () => {
        setData({
            ...data,
            project: {
                ...data.project,
                technologies: [...data.project.technologies, ""],
            },
        });
    };

    const removeTechnology = (index: number) => {
        setData({
            ...data,
            project: {
                ...data.project,
                technologies: data.project.technologies.filter(
                    (_, i) => i !== index
                ),
            },
        });
    };

    /* ─── Team handlers ───────────────────────────── */
    const updateTeamMember = (
        id: string,
        field: keyof TeamMember,
        value: string
    ) => {
        setData({
            ...data,
            team: data.team.map((m) =>
                m.id === id ? { ...m, [field]: value } : m
            ),
        });
    };

    const addTeamMember = () => {
        const newMember: TeamMember = {
            id: generateId(),
            name: "",
            role: "",
            bio: "",
            photo: "",
        };
        setData({ ...data, team: [...data.team, newMember] });
        showToast("New team member added");
    };

    const removeTeamMember = (id: string) => {
        setData({ ...data, team: data.team.filter((m) => m.id !== id) });
        showToast("Team member removed");
    };

    /* ─── Detail handlers ─────────────────────────── */
    const updateDetail = (
        id: string,
        field: keyof ProjectDetail,
        value: string
    ) => {
        setData({
            ...data,
            details: data.details.map((d) =>
                d.id === id ? { ...d, [field]: value } : d
            ),
        });
    };

    const addDetail = () => {
        const newDetail: ProjectDetail = {
            id: generateId(),
            title: "",
            description: "",
            icon: "✨",
        };
        setData({ ...data, details: [...data.details, newDetail] });
        showToast("New detail item added");
    };

    const removeDetail = (id: string) => {
        setData({ ...data, details: data.details.filter((d) => d.id !== id) });
        showToast("Detail item removed");
    };

    if (!isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
                <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    const tabs: { key: Tab; label: string; icon: string }[] = [
        { key: "project", label: "Project Info", icon: "📋" },
        { key: "team", label: "Team Members", icon: "👥" },
        { key: "details", label: "Project Details", icon: "⚡" },
    ];

    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Header */}
            <header className="sticky top-0 z-50 navbar-glass">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                        >
                            <svg
                                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            <span className="text-sm">Back to Site</span>
                        </Link>
                        <div className="h-6 w-px bg-white/10" />
                        <h1 className="text-lg font-semibold text-white">
                            Admin <span className="text-cyan-400">Panel</span>
                        </h1>
                    </div>
                    <button
                        onClick={() => {
                            if (
                                window.confirm(
                                    "Reset all data to defaults? This cannot be undone."
                                )
                            ) {
                                resetData();
                                showToast("All data reset to defaults");
                            }
                        }}
                        className="admin-btn admin-btn-danger text-xs"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Reset All
                    </button>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-6 py-8">
                {/* Tabs */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${activeTab === tab.key
                                ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-400/20"
                                : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
                                }`}
                        >
                            <span>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* ─── Project Tab ─────────────────────────── */}
                {activeTab === "project" && (
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="glass-card rounded-2xl p-8">
                            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                📋 Project Information
                            </h2>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2">
                                        Project Title
                                    </label>
                                    <input
                                        className="admin-input"
                                        value={data.project.title}
                                        onChange={(e) => updateProject("title", e.target.value)}
                                        placeholder="Enter project title"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2">
                                        Subtitle
                                    </label>
                                    <input
                                        className="admin-input"
                                        value={data.project.subtitle}
                                        onChange={(e) =>
                                            updateProject("subtitle", e.target.value)
                                        }
                                        placeholder="Enter subtitle"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        className="admin-textarea"
                                        rows={4}
                                        value={data.project.description}
                                        onChange={(e) =>
                                            updateProject("description", e.target.value)
                                        }
                                        placeholder="Enter project description"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-zinc-400 mb-2">
                                        Extended Description
                                    </label>
                                    <textarea
                                        className="admin-textarea"
                                        rows={3}
                                        value={data.project.descriptionExtended}
                                        onChange={(e) =>
                                            updateProject("descriptionExtended", e.target.value)
                                        }
                                        placeholder="Enter extended description"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Objectives */}
                        <div className="glass-card rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                                    🎯 Objectives
                                </h2>
                                <button
                                    onClick={addObjective}
                                    className="admin-btn admin-btn-primary text-xs"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add
                                </button>
                            </div>
                            <div className="space-y-3">
                                {data.project.objectives.map((obj, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <span className="mt-3 w-6 h-6 flex-shrink-0 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-xs font-bold">
                                            {i + 1}
                                        </span>
                                        <input
                                            className="admin-input flex-1"
                                            value={obj}
                                            onChange={(e) => updateObjective(i, e.target.value)}
                                            placeholder={`Objective ${i + 1}`}
                                        />
                                        <button
                                            onClick={() => removeObjective(i)}
                                            className="mt-2 p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors cursor-pointer"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="glass-card rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                                    ⚡ Technologies
                                </h2>
                                <button
                                    onClick={addTechnology}
                                    className="admin-btn admin-btn-primary text-xs"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {data.project.technologies.map((tech, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-1 pr-1"
                                    >
                                        <input
                                            className="bg-transparent text-sm text-white py-2 pl-3 outline-none w-28"
                                            value={tech}
                                            onChange={(e) => updateTechnology(i, e.target.value)}
                                            placeholder="Tech name"
                                        />
                                        <button
                                            onClick={() => removeTechnology(i)}
                                            className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors cursor-pointer"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="glass-card rounded-2xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                                    ✅ Manfaat
                                </h2>
                                <button
                                    onClick={addBenefit}
                                    className="admin-btn admin-btn-primary text-xs"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add
                                </button>
                            </div>
                            <div className="space-y-3">
                                {data.project.benefits.map((ben, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <span className="mt-3 w-6 h-6 flex-shrink-0 rounded-lg bg-emerald-400/10 text-emerald-400 flex items-center justify-center text-xs font-bold">
                                            {i + 1}
                                        </span>
                                        <input
                                            className="admin-input flex-1"
                                            value={ben}
                                            onChange={(e) => updateBenefit(i, e.target.value)}
                                            placeholder={`Benefit ${i + 1}`}
                                        />
                                        <button
                                            onClick={() => removeBenefit(i)}
                                            className="mt-2 p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors cursor-pointer"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => showToast("Project info saved!")}
                            className="admin-btn admin-btn-primary"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Save Changes
                        </button>
                    </div>
                )}

                {/* ─── Team Tab ────────────────────────────── */}
                {activeTab === "team" && (
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-white">
                                👥 Team Members ({data.team.length})
                            </h2>
                            <button
                                onClick={addTeamMember}
                                className="admin-btn admin-btn-primary"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add Member
                            </button>
                        </div>

                        {data.team.map((member, index) => (
                            <div
                                key={member.id}
                                className="glass-card rounded-2xl p-8"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        {/* Avatar preview */}
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 flex items-center justify-center text-sm font-bold text-cyan-400">
                                            {member.name
                                                ? member.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")
                                                    .toUpperCase()
                                                    .substring(0, 2)
                                                : `#${index + 1}`}
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium">
                                                {member.name || "Unnamed Member"}
                                            </h3>
                                            <p className="text-xs text-zinc-500">
                                                {member.role || "No role assigned"}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    `Remove ${member.name || "this member"}?`
                                                )
                                            )
                                                removeTeamMember(member.id);
                                        }}
                                        className="admin-btn admin-btn-danger text-xs"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Remove
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm text-zinc-400 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            className="admin-input"
                                            value={member.name}
                                            onChange={(e) =>
                                                updateTeamMember(member.id, "name", e.target.value)
                                            }
                                            placeholder="Enter full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-zinc-400 mb-2">
                                            Role
                                        </label>
                                        <input
                                            className="admin-input"
                                            value={member.role}
                                            onChange={(e) =>
                                                updateTeamMember(member.id, "role", e.target.value)
                                            }
                                            placeholder="Enter role"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm text-zinc-400 mb-2">
                                            Photo URL
                                        </label>
                                        <input
                                            className="admin-input"
                                            value={member.photo}
                                            onChange={(e) =>
                                                updateTeamMember(member.id, "photo", e.target.value)
                                            }
                                            placeholder="Enter photo URL (leave empty for initials avatar)"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm text-zinc-400 mb-2">
                                            Bio
                                        </label>
                                        <textarea
                                            className="admin-textarea"
                                            rows={3}
                                            value={member.bio}
                                            onChange={(e) =>
                                                updateTeamMember(member.id, "bio", e.target.value)
                                            }
                                            placeholder="Enter short bio"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {data.team.length === 0 && (
                            <div className="glass-card rounded-2xl p-12 text-center">
                                <p className="text-zinc-500 mb-4">No team members yet.</p>
                                <button
                                    onClick={addTeamMember}
                                    className="admin-btn admin-btn-primary"
                                >
                                    Add First Member
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* ─── Details Tab ─────────────────────────── */}
                {activeTab === "details" && (
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-white">
                                ⚡ Project Details ({data.details.length})
                            </h2>
                            <button
                                onClick={addDetail}
                                className="admin-btn admin-btn-primary"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add Detail
                            </button>
                        </div>

                        {data.details.map((detail) => (
                            <div
                                key={detail.id}
                                className="glass-card rounded-2xl p-8"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{detail.icon || "✨"}</span>
                                        <h3 className="text-white font-medium">
                                            {detail.title || "Untitled Detail"}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    `Remove "${detail.title || "this item"}"?`
                                                )
                                            )
                                                removeDetail(detail.id);
                                        }}
                                        className="admin-btn admin-btn-danger text-xs"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Remove
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm text-zinc-400 mb-2">
                                            Icon (Emoji)
                                        </label>
                                        <input
                                            className="admin-input"
                                            value={detail.icon}
                                            onChange={(e) =>
                                                updateDetail(detail.id, "icon", e.target.value)
                                            }
                                            placeholder="Enter emoji icon"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-zinc-400 mb-2">
                                            Title
                                        </label>
                                        <input
                                            className="admin-input"
                                            value={detail.title}
                                            onChange={(e) =>
                                                updateDetail(detail.id, "title", e.target.value)
                                            }
                                            placeholder="Enter title"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm text-zinc-400 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            className="admin-textarea"
                                            rows={3}
                                            value={detail.description}
                                            onChange={(e) =>
                                                updateDetail(
                                                    detail.id,
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Enter description"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {data.details.length === 0 && (
                            <div className="glass-card rounded-2xl p-12 text-center">
                                <p className="text-zinc-500 mb-4">No detail items yet.</p>
                                <button
                                    onClick={addDetail}
                                    className="admin-btn admin-btn-primary"
                                >
                                    Add First Detail
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Toast Notification */}
            {toast && (
                <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
                    <div className="px-5 py-3 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 rounded-xl text-sm font-medium backdrop-blur-lg flex items-center gap-2 shadow-lg shadow-emerald-500/10">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {toast}
                    </div>
                </div>
            )}
        </div>
    );
}
