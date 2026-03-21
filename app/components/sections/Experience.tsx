'use client'
import { motion } from 'framer-motion'
import { FaFileDownload } from 'react-icons/fa'

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 font-mono">Professional Timeline</h2>

                <div className="space-y-12 relative before:absolute before:left-[7px] md:before:left-1/2 before:top-0 before:h-full before:w-0.5 before:bg-white/10">

                    {/* Item 1 - Newest Role */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0 md:w-1/2 md:ml-auto md:text-left md:flex md:flex-col"
                    >
                        <div className="hidden md:block absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#667eea] shadow-[0_0_10px_#667eea]"></div>
                        <div className="md:pl-8">
                            <span className="font-mono text-[#667eea] text-sm">Dec 2024 – Present</span>
                            <h3 className="text-2xl font-bold mt-1">Full Stack Developer</h3>
                            <p className="text-sm text-[#667eea] font-mono mb-1">Python · Mobile · Cloud</p>
                            <h4 className="text-gray-400 mb-4">wAI Industries — Remote (Dubai Based)</h4>
                            <ul className="list-disc list-outside ml-4 text-gray-400 text-sm space-y-2">
                                <li>Developed and deployed RESTful APIs using <span className="text-white">FastAPI and Flask</span>, containerized with Docker and hosted on <span className="text-white">AWS EC2</span>, with S3 for media and document storage.</li>
                                <li>Managed <span className="text-white">PostgreSQL</span> database schema design and integration with backend API services.</li>
                                <li>Designed and developed an <span className="text-white">Android application</span> (Kotlin, Jetpack Compose, MVVM, Hilt) for field service operations, supporting 2,000+ field users with real-time job tracking via Google Maps SDK.</li>
                                <li>Built an <span className="text-white">offline-first sync system</span> using Room and WorkManager, ensuring data availability under poor or no connectivity.</li>
                                <li>Integrated <span className="text-white">TensorFlow Lite OCR</span> to automate meter-reading capture from device camera, cutting manual data entry errors by 90%.</li>
                                <li>Developed a <span className="text-white">Flutter enterprise application</span> (Bloc) for a factory survey system with full API auth, permissions, media upload, and step-by-step data submission flow.</li>
                                <li>Built an <span className="text-white">iOS Voice Assistant SDK</span> (Swift, UIKit, XCFrameworks) enabling real-time voice-driven banking transactions via full-duplex WebSocket audio streaming.</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Item 2 - Previous Role */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0 md:w-1/2 md:mr-auto md:text-right"
                    >
                        <div className="hidden md:block absolute -right-[9px] top-0 w-4 h-4 rounded-full bg-[#667eea] shadow-[0_0_10px_#667eea]"></div>
                        <div className="md:pr-8">
                            <span className="font-mono text-[#667eea] text-sm">Mar 2022 – Nov 2024</span>
                            <h3 className="text-2xl font-bold mt-1">Android Developer</h3>
                            <p className="text-sm text-[#667eea] font-mono mb-1">Promoted from Intern — Sep 2022</p>
                            <h4 className="text-gray-400 mb-4">ISSM — Islamabad, Pakistan</h4>
                            <ul className="list-disc list-outside ml-4 md:ml-0 md:list-none text-gray-400 text-sm space-y-2">
                                <li>Refactored legacy Android codebase into <span className="text-white">MVVM Clean Architecture</span>, enabling a maintainable and testable codebase for critical banking features.</li>
                                <li>Built a <span className="text-white">contactless biometric authentication</span> feature for an enterprise banking app with 99% acceptance accuracy.</li>
                                <li>Developed a <span className="text-white">voice assistant</span> for a fintech banking app, reducing multi-step flows to 2-step voice interactions and improving task completion speed by 60%.</li>
                                <li>Built a real-time <span className="text-white">full-duplex audio streaming module</span> using WebSockets with on-device voice activity detection and under 100ms latency.</li>
                                <li>Designed a custom <span className="text-white">CameraX + TFLite pipeline</span> processing live frames with under 200ms response time.</li>
                                <li>Achieved approximately <span className="text-white">40% reduction in battery drain</span> through efficient thread and model lifecycle management during AI inference sessions.</li>
                            </ul>
                        </div>
                    </motion.div>

                </div>

                <div className="text-center mt-16">
                    <a href="/assets/haider_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-105">
                        <FaFileDownload /> Download Resume
                    </a>
                </div>
            </div>
        </section>
    )
}
