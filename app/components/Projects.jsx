'use client'
import React from 'react'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "AI-Powered MERN Expense Tracker",
            description: "A MERN stack finance tracker featuring income/expense logging, data visualization, and an AI chatbot for personalized financial advice.",
            image: "/expense-tracker.png",
            tags: ["React.js","Tailwind CSS", "Node.js", "Express.js", " MongoDB", "Google Gemini API", "Recharts"],
            github: "https://github.com/Aryan-404-404/Expense-Tracker",
            live: "https://expense-tracker-frontend-frqq.onrender.com/",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "Hotel Booking System",
            description: "A full-stack hotel booking app featuring secure authentication, room reservations, an admin dashboard, and automated email notifications for seamless management.",
            image: "/hotel-booking.png",
            tags: ["HTML","CSS","JavaScript", "Node.js", "Express.js", " MongoDB", "SendGrid"],
            github: "https://github.com/Aryan-404-404/Hotel-booking-Site",
            live: "https://hotel-booking-site-frontend.onrender.com/",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            title: "AI Resume Analyzer",
            description: "A smart, AI-powered career tool that helps developers optimize their resumes for Applicant Tracking Systems (ATS).",
            image: "/Resume-analyzer.png",
            tags: ["React.js", "Tailwind CSS", "Groq API (llama-3.3-70b-versatile)", "pdfjs-dist"],
            github: "https://github.com/Aryan-404-404/AI-Resume-Analyzer",
            live: "https://ai-resume-analyzer-pi-ruby.vercel.app/",
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <section id="projects" className="relative min-h-screen bg-black py-20 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size:100px_100px"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm">
                            💼 My Work
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A collection of projects that showcase my skills and passion for creating innovative digital solutions
                    </p>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                        >
                            {/* Project image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-linear-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}></div>

                                {/* Overlay buttons */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.github}
                                        className="p-3 bg-black/80 backdrop-blur-sm rounded-full text-white hover:bg-black transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.live}
                                        className="p-3 bg-black/80 backdrop-blur-sm rounded-full text-white hover:bg-black transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Project info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Glow effect on hover */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                                <div className={`absolute inset-0 bg-linear-to-t ${project.gradient} blur-xl opacity-20`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View all button */}
                <div className="text-center mt-16">
                    <a
                        href="https://github.com/Aryan-404-404?tab=repositories"
                        className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all backdrop-blur-sm group"
                    >
                        View All Projects
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}
