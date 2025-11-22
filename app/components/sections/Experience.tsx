'use client'
import { motion } from 'framer-motion'
import { FaFileDownload } from 'react-icons/fa'

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 font-mono">Professional Timeline</h2>

                <div className="space-y-12 relative before:absolute before:left-[7px] md:before:left-1/2 before:top-0 before:h-full before:w-0.5 before:bg-white/10">

                    {/* Item 1 (Left) - Newest Role */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0 md:w-1/2 md:ml-auto md:text-left md:flex md:flex-col"
                    >
                        <div className="hidden md:block absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#667eea] shadow-[0_0_10px_#667eea]"></div>
                        <div className="md:pl-8">
                            <span className="font-mono text-[#667eea] text-sm">Dec 2024 - Present</span>
                            <h3 className="text-2xl font-bold mt-1">Lead Mobile Applications</h3>
                            <h4 className="text-gray-400 mb-4">wAl Industries</h4>
                            <ul className="list-disc list-outside ml-4 text-gray-400 text-sm space-y-2">
                                <li>Leading the mobile engineering team, developing enterprise-grade field service solutions integrated with Edge AI[cite: 13].</li>
                                <li>Architected codebase using MVVM Clean Architecture and Hilt, reducing feature development cycles by 30%[cite: 14].</li>
                                <li>Deployed custom TFLite Object Detection and OCR models to automate meter readings, reducing errors by 90%[cite: 16].</li>
                                <li>Designed "Offline-First" synchronization using Room Database and WorkManager for intermittent connectivity[cite: 17].</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Item 2 (Right) - Previous Role */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0 md:w-1/2 md:mr-auto md:text-right"
                    >
                        <div className="hidden md:block absolute -right-[9px] top-0 w-4 h-4 rounded-full bg-[#667eea] shadow-[0_0_10px_#667eea]"></div>
                        <div className="md:pr-8">
                            <span className="font-mono text-[#667eea] text-sm">Mar 2022 - Nov 2024</span>
                            <h3 className="text-2xl font-bold mt-1">Android Software Developer</h3>
                            <h4 className="text-gray-400 mb-4">ISSM</h4>
                            <ul className="list-disc list-outside ml-4 md:ml-0 md:list-none text-gray-400 text-sm space-y-2">
                                <li>Engineered high-precision contactless biometric authentication using smartphone cameras (99% accuracy)[cite: 26].</li>
                                <li>Architected a "Siri-like" conversational banking interface, improving user task completion by 60%[cite: 28].</li>
                                <li>Developed real-time full-duplex audio streaming using WebSockets and Mu-law compression[cite: 29].</li>
                                <li>Designed custom Computer Vision pipeline with CameraX and TFLite under 200ms latency[cite: 27].</li>
                            </ul>
                        </div>
                    </motion.div>

                </div>

                <div className="text-center mt-16">
                    <a href="/assets/Haider_Resume.pdf"
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