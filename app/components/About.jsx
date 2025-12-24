import React from 'react'

export default function About() {
    const experiences = [
        {
            id: 1,
            year: "2023 - Present",
            role: "Full Stack Developer (Indie)",
            company: "Personal Projects",
            description: "Designing and deploying scalable full-stack applications using Next.js, React, and SQL. Focus on high-performance architecture, real-world problem solving, and shipping production-ready code.",
            gradient: "from-blue-500 to-cyan-500"
        },
    ];

    const education = [
        {
        id: 1,
        year: "2022 - 2026",
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "DIT University Dehradun",
        description: "Focusing on Core CS fundamentals: Data Structures, Algorithms (DSA), DBMS, and Object-Oriented Programming. Final Year Student.",
        gradient: "from-orange-500 to-red-500"
    }
    ];

    const interests = [
        { icon: "🌲", title: "Nature", description: "Recharging in the mountains & forests" },
        { icon: "🎮", title: "Gaming", description: "Tactical FPS & Strategy games" },
        { icon: "📖", title: "Reading", description: "Philosophy, Finance & Psychology" },
    ];

    return (
        <section id="about" className="relative min-h-screen bg-black py-20 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size:100px_100px"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm">
                            👋 Get to know me
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Passionate developer with a love for creating exceptional digital experiences
                    </p>
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Left column - Profile and intro */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Profile card */}
                        <div className="relative group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                            <div className="relative w-48 h-48 mx-auto mb-6">
                                <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                                <img
                                    src="/DP.jpeg"
                                    alt="Profile"
                                    className="relative w-full h-full object-cover rounded-2xl border-4 border-black"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">Aryan</h3>
                                <p className="text-gray-400 mb-4">Full Stack Developer</p>
                                <div className="flex justify-center gap-2">
                                    <span className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                                        Available for work
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quick info */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <h4 className="text-lg font-bold text-white mb-4">Quick Info</h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <span className="text-blue-400">📍</span>
                                    <span>Based in Dehradun, India</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <span className="text-purple-400">💼</span>
                                    <span>Open to opportunities</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <span className="text-pink-400">🌐</span>
                                    <span>Remote friendly</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Story and details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About text */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    I am a final-year Computer Science student and Full Stack Developer based in Dehradun. I build web applications using MERN stack and AI integration.
                                </p>
                                <p>
                                    My focus is simple: writing clean, maintainable code and building systems that actually work. I enjoy the logic behind backend architecture.
                                </p>
                                <p>
                                    When I'm not coding, I'm usually off-grid in the mountains or learning new technologies to improve my craft.
                                </p>
                            </div>
                        </div>

                        {/* Interests grid */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Interests & Hobbies</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {interests.map((interest, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                                    >
                                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                                            {interest.icon}
                                        </div>
                                        <div className="text-white font-semibold text-sm mb-1">
                                            {interest.title}
                                        </div>
                                        <div className="text-gray-500 text-xs">
                                            {interest.description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience timeline */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h3>
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-48 shrink-0">
                                        <div className={`inline-block px-4 py-2 rounded-full bg-linear-to-r ${exp.gradient} text-white text-sm font-semibold`}>
                                            {exp.year}
                                        </div>
                                    </div>
                                    <div className="grow">
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
                                            {exp.role}
                                        </h4>
                                        <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}>
                                    <div className={`absolute inset-0 bg-linear-to-r ${exp.gradient} blur-xl opacity-10`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h3 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        {education.map((edu) => (
                            <div
                                key={edu.id}
                                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500"
                            >
                                <div className={`inline-block px-4 py-2 rounded-full bg-linear-to-r ${edu.gradient} text-white text-sm font-semibold mb-4`}>
                                    {edu.year}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
                                    {edu.degree}
                                </h4>
                                <p className="text-purple-400 font-medium mb-3">{edu.institution}</p>
                                <p className="text-gray-400 text-sm">{edu.description}</p>
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}>
                                    <div className={`absolute inset-0 bg-linear-to-r ${edu.gradient} blur-xl opacity-10`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
