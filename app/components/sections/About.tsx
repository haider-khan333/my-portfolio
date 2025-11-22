'use client'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCodeBranch, FaUserTie } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold font-mono mb-4">Beyond the Code</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              I am a <span className="text-[#667eea] font-bold">Lead Mobile Engineer</span> based in Islamabad, specializing in building offline-first enterprise systems and edge-AI solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey started at <span className="text-white">COMSATS University</span> (BS CS, 2019-2023), where I researched deep learning for medical imaging. Today, I lead engineering teams to bridge the gap between heavy neural networks and constrained mobile hardware.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <FaUserTie className="text-2xl text-[#667eea] mb-2" />
                <h3 className="font-bold">Engineering Lead</h3>
                <p className="text-xs text-gray-500">Mentoring teams & Architecting MVVM solutions</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <FaCodeBranch className="text-2xl text-purple-500 mb-2" />
                <h3 className="font-bold">Open Source</h3>
                <p className="text-xs text-gray-500">Contributor to Edge AI & Mobile Security tools</p>
              </div>
            </div>
          </motion.div>

          {/* Abstract Stats Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border-t border-white/10 bg-gradient-to-br from-white/5 to-transparent"
          >
             <div className="space-y-6 font-mono">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                   <span><FaGraduationCap className="inline mr-2"/> Education</span>
                   <span className="text-right text-sm text-gray-400">BS CS, 2023<br/>COMSATS Islamabad</span>
                </div>
                <div>
                   <div className="flex justify-between text-sm mb-2">
                      <span>Mobile Architecture (Clean/MVVM)</span>
                      <span className="text-[#667eea]">95%</span>
                   </div>
                   <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#667eea] w-[95%]"></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-sm mb-2">
                      <span>On-Device ML (TFLite/Mediapipe)</span>
                      <span className="text-purple-500">90%</span>
                   </div>
                   <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[90%]"></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-sm mb-2">
                      <span>Backend (Python/FastAPI)</span>
                      <span className="text-blue-400">85%</span>
                   </div>
                   <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 w-[85%]"></div>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}