'use client'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaFingerprint, FaMicrophoneAlt, FaDna,FaBolt, FaLock, FaServer, FaMobileAlt, FaChartLine, FaCalendarCheck } from 'react-icons/fa'
import Home from '@/public/home_view.png'
import Image from 'next/image'
export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 font-mono">Featured Deployments</h2>
                    <p className="text-gray-400">From native mobile modules to scalable D2C platforms.</p>
                </motion.div>

                {/* --- FIORRA: PROPRIETARY FEATURE CARD --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-0 rounded-3xl overflow-hidden mb-20 border border-white/10 relative"
                >
                    {/* Background Glow Effect */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#667eea]/20 rounded-full blur-[120px] -z-10"></div>

                    <div className="grid lg:grid-cols-2 gap-0">

                        {/* LEFT: VISUAL GALLERY (Bento Grid Style) */}
                        <div className="bg-[#0a0a0a] p-8 grid grid-cols-2 gap-4 content-center relative overflow-hidden">
                            {/* Mockup 1: Desktop Homepage */}
                            <div className="col-span-2 h-64 bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden relative group">
                                {/* REPLACE SRC WITH YOUR DESKTOP SCREENSHOT */}
                                <img src="https://fiorra-bucket.s3.eu-north-1.amazonaws.com/661shots_so.png" alt="Fiorra Desktop" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs font-mono text-gray-300">Desktop Storefront</div>
                            </div>

                            {/* Mockup 2: Mobile View */}
                            <div className="h-48 bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden relative group">
                                {/* REPLACE SRC WITH YOUR MOBILE SCREENSHOT */}
                                <img src="https://fiorra-bucket.s3.eu-north-1.amazonaws.com/205shots_so.png" alt="Fiorra Mobile" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs font-mono text-gray-300">Mobile UX</div>
                            </div>

                            {/* Mockup 3: Admin Dashboard (Blurry/Obscured slightly if sensitive) */}
                            <div className="h-48 bg-[#1a1a1a] rounded-xl border border-white/5 overflow-hidden relative group">
                                {/* REPLACE SRC WITH YOUR ADMIN SCREENSHOT */}
                                <img src="https://fiorra-bucket.s3.eu-north-1.amazonaws.com/745shots_so.png" alt="Fiorra Admin" className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                                <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs font-mono text-yellow-500">Admin Dashboard</div>
                            </div>
                        </div>

                        {/* RIGHT: CONTENT & EXPLANATION */}
                        <div className="p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-[#667eea]/20 text-[#667eea] rounded-full text-xs font-bold font-mono">LIVE BUSINESS</span>
                                <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs font-bold font-mono border border-white/10">NEXT.JS 14</span>
                            </div>

                            <h3 className="text-4xl font-bold mb-2 text-white">Fiorra Bedding</h3>
                            <p className="text-lg text-gray-400 mb-6 font-light">
                                A high-performance D2C e-commerce platform engineered for my own bedding brand.
                            </p>

                            <div className="space-y-6 mb-8">
                                {/* Architectural Highlights */}
                                <div className="border-l-2 border-[#667eea] pl-4">
                                    <h4 className="text-white font-semibold mb-1 flex items-center gap-2"><FaServer className="text-sm text-[#667eea]" /> Full-Stack Architecture</h4>
                                    <p className="text-sm text-gray-400">
                                        Built with Next.js App Router and Server Actions for SEO dominance. Custom backend handles order orchestration, inventory locking, and automated email logistics.
                                    </p>
                                </div>

                                <div className="border-l-2 border-purple-500 pl-4">
                                    <h4 className="text-white font-semibold mb-1 flex items-center gap-2"><FaChartLine className="text-sm text-purple-500" /> Business Logic & CMS</h4>
                                    <p className="text-sm text-gray-400">
                                        Developed a bespoke Admin Panel for real-time sales analytics and product management, eliminating monthly Shopify fees and allowing complete data ownership.
                                    </p>
                                </div>

                                <div className="border-l-2 border-blue-500 pl-4">
                                    <h4 className="text-white font-semibold mb-1 flex items-center gap-2"><FaMobileAlt className="text-sm text-blue-500" /> UX & Performance</h4>
                                    <p className="text-sm text-gray-400">
                                        Optimized core web vitals with image lazy-loading and edge caching.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                <button
                                    onClick={() => window.location.href = 'mailto:muhammadhaiderkhan0786@gmail.com?subject=Requesting Fiorra Technical Demo'}
                                    className="px-6 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:opacity-90 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#667eea]/20"
                                >
                                    <FaCalendarCheck /> Request Tech Demo
                                </button>
                                <a href="https://fiorra.pk" target="_blank" className="px-6 py-3 border border-white/10 hover:bg-white/5 text-gray-300 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                                    <FaExternalLinkAlt /> Visit Store
                                </a>
                            </div>
                            <p className="text-xs text-gray-500 mt-4 text-center sm:text-left">
                                <FaLock className="inline mr-1" /> Source code is proprietary. Live architecture walkthrough available upon request.
                            </p>
                        </div>
                    </div>
                </motion.div>


                {/* --- PROJECT GRID (Updated with Resume Metrics) --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            {/* Project 1: Biometrics */}
            <motion.div className="glass-card p-8 rounded-2xl group hover:border-[#667eea]/30 transition-all">
                <div className="mb-6 p-3 bg-cyan-500/10 rounded-xl w-fit text-cyan-400 text-3xl"><FaFingerprint /></div>
                <h3 className="text-2xl font-bold mb-2">Contactless Biometrics</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Enterprise banking module enabling secure finger verification via smartphone cameras.
                    Achieved <span className="text-white font-bold">99% acceptance accuracy</span> and sub-200ms latency using custom TFLite quantization.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                    {["Kotlin", "OpenCV", "TFLite", "CameraX"].map(tag => (
                        <span key={tag} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{tag}</span>
                    ))}
                </div>
            </motion.div>

            {/* Project 2: Speech SDK */}
            <motion.div className="glass-card p-8 rounded-2xl group hover:border-purple-500/30 transition-all">
                <div className="mb-6 p-3 bg-purple-500/10 rounded-xl w-fit text-purple-400 text-3xl"><FaMicrophoneAlt /></div>
                <h3 className="text-2xl font-bold mb-2">SpeechDriven Banking SDK</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    "Siri-like" conversational interface for fintech. Implemented full-duplex WebSockets with <span className="text-white font-bold">Mu-law compression</span> (50% bandwidth reduction) and on-device VAD.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                    {["WebSockets", "VAD", "Mu-law", "FastAPI"].map(tag => (
                        <span key={tag} className="text-xs font-mono text-purple-400 bg-purple-400/10 px-2 py-1 rounded">{tag}</span>
                    ))}
                </div>
            </motion.div>

            {/* Project 3: Field Service */}
            <motion.div className="glass-card p-8 rounded-2xl group hover:border-yellow-500/30 transition-all">
                <div className="mb-6 p-3 bg-yellow-500/10 rounded-xl w-fit text-yellow-400 text-3xl"><FaBolt /></div>
                <h3 className="text-2xl font-bold mb-2">Offline-First FSM App</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Utility app for 2000+ field workers. Features on-device OCR to digitize meter readings, reducing human error by <span className="text-white font-bold">90%</span>. Built with WorkManager for 100% data integrity.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                    {["Room DB", "WorkManager", "OCR", "Edge AI"].map(tag => (
                        <span key={tag} className="text-xs font-mono text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">{tag}</span>
                    ))}
                </div>
            </motion.div>

            {/* Project 4: LucaSeg (New from Resume) */}
            <motion.div className="glass-card p-8 rounded-2xl group hover:border-red-500/30 transition-all">
                <div className="mb-6 p-3 bg-red-500/10 rounded-xl w-fit text-red-400 text-3xl"><FaDna /></div>
                <h3 className="text-2xl font-bold mb-2">LucaSeg: Cancer Detection</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Academic research project using 3D CNNs for Lung Cancer segmentation on CT-scans. Features a real-time visualization dashboard for clinicians to classify nodules.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                    {["Deep Learning", "CNN", "Python", "Medical Imaging"].map(tag => (
                        <span key={tag} className="text-xs font-mono text-red-400 bg-red-400/10 px-2 py-1 rounded">{tag}</span>
                    ))}
                </div>
            </motion.div>

        </div>
            </div>
        </section>
    )
}