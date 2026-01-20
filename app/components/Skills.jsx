import React from 'react'
import { Sparkles } from 'lucide-react';

export default function Skills() {
    const skillCategories = [
        {
            id: 1,
            category: "Frontend Development",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            gradient: "from-blue-500 to-cyan-500",
            skills: [
                "MERN Stack (React/Node)",
                "Next.js 14",
                "Tailwind",
                "JS (ES6+)",
                "Auth (JWT, BCrypt, RBAC)",
                "Recharts & Data Viz"
            ]
        },
        {
            id: 2,
            category: "Backend & Systems",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            gradient: "from-purple-500 to-pink-500",
            skills: [
                "Node.js & Express",
                "MongoDB & Mongoose",
                "Auth (JWT/OAuth)",
                "RBAC (Access Control)"
            ]
        },
        {
            id: 3,
            category: "AI & Core Logic",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            gradient: "from-green-500 to-emerald-500",
            skills: [
                "Gemini / OpenAI API",
                "Agentic AI (Function Calling)",
                "DSA (175+ Solved)",
                "Postman API Testing",
                "Git & Version Control",
                "Prompt Engineering"
            ]
        }
    ];

    const additionalSkills = [
        "Middleware Logic",
        "PDF Data Extraction",
        "Prompt Engineering",
        "Data Visualization",
        "Vercel, Render Deployment",
        "Responsive UI",
        "REST API Design",
        "Role-Based Access"
    ];

    return (
        <section id="skills" className="relative min-h-screen bg-black py-20 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-2/3 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[100px_100px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm">
                            🚀 Technical Expertise
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Skills & Technologies
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and proficiency across various technologies
                    </p>
                </div>

                {/* Skill categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-xl bg-linear-to-br ${category.gradient} text-white`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    {category.category}
                                </h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-sm transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
                                <div className={`absolute inset-0 bg-linear-to-br ${category.gradient} blur-xl opacity-5`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional skills */}
                <div className="relative bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <Sparkles className="text-purple-400" size={20} />
                            <h3 className="text-2xl font-bold text-white">
                                Additional Skills
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Other technologies and methodologies I work with
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {additionalSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}