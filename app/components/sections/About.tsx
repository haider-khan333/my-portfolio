'use client'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaMobileAlt, FaServer } from 'react-icons/fa'

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
              I am a <span className="text-[#667eea] font-bold">Full Stack Developer</span> based in <span className="text-white font-bold">Dubai, UAE</span> with 4+ years of experience building mobile applications and backend systems for enterprise use.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I work across the full stack — from native mobile UI in <span className="text-white">Android, Flutter, and iOS</span>, to backend APIs with <span className="text-white">Python (FastAPI · Flask)</span>, cloud deployments on <span className="text-white">AWS</span>, and AI/LLM integrations. My journey started at <span className="text-white">COMSATS University</span> (BS CS, 2019–2023) where I researched deep learning for medical imaging.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <FaMobileAlt className="text-2xl text-[#667eea] mb-2" />
                <h3 className="font-bold">Mobile Expert</h3>
                <p className="text-xs text-gray-500">Android · Flutter · iOS across fintech & field service</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <FaServer className="text-2xl text-purple-500 mb-2" />
                <h3 className="font-bold">Backend & Cloud</h3>
                <p className="text-xs text-gray-500">FastAPI · Flask · Docker · AWS · PostgreSQL</p>
              </div>
            </div>
          </motion.div>

          {/* Skills Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border-t border-white/10 bg-gradient-to-br from-white/5 to-transparent"
          >
            <div className="space-y-6 font-mono">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span><FaGraduationCap className="inline mr-2" />Education</span>
                <span className="text-right text-sm text-gray-400">BS CS, 2023<br />COMSATS Islamabad</span>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Mobile (Android · Flutter · iOS)</span>
                  <span className="text-[#667eea]">95%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#667eea] w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Backend (Python · FastAPI · Flask)</span>
                  <span className="text-purple-500">80%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[80%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Cloud & DevOps (AWS · Docker)</span>
                  <span className="text-blue-400">75%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 w-[75%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>AI & LLM (TFLite · Ollama · RAG)</span>
                  <span className="text-pink-400">80%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-400 w-[80%]"></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
