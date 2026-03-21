'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaAndroid, FaBrain, FaServer, FaFileDownload } from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-mono">
            Full Stack <br />
            <span className="text-gradient">Developer</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-6 max-w-lg">
            Mobile (Android · Flutter · iOS) · Python Backend · Cloud · AI/LLM — building end-to-end products used by thousands.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 mb-8 text-sm font-mono">
            <div>
              <span className="text-[#667eea] font-bold text-xl">4+</span>
              <p className="text-gray-500 text-xs">Years Exp.</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <span className="text-[#667eea] font-bold text-xl">2K+</span>
              <p className="text-gray-500 text-xs">Users Served</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <span className="text-[#667eea] font-bold text-xl">90%</span>
              <p className="text-gray-500 text-xs">Error Reduction</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <span className="text-[#667eea] font-bold text-xl">99%</span>
              <p className="text-gray-500 text-xs">Biometric Accuracy</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold shadow-lg hover:translate-y-1 transition-transform flex items-center gap-2">
              View Work
            </a>
            <a href="https://github.com/haider-khan333" target="_blank" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2">
              <FaGithub /> GitHub
            </a>
            <a href="/assets/haider_resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2">
              <FaFileDownload /> Resume
            </a>
          </div>
        </motion.div>

        {/* Abstract Tech Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden md:block h-[440px]"
        >
          {/* Main Terminal Card */}
          <motion.div
            animate={{ y: [0, -20, 0], rotateY: [-10, -5, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 glass-card p-6 rounded-xl z-20"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-2 font-mono text-xs text-gray-400">
              <div className="text-green-400">$ uvicorn main:app --reload</div>
              <div className="h-2 bg-white/20 rounded w-3/4 mt-2"></div>
              <div className="h-2 bg-white/10 rounded w-1/2"></div>
              <div className="text-[#667eea] mt-3">✓ API running on AWS EC2</div>
              <div className="h-2 bg-white/10 rounded w-2/3"></div>
            </div>
          </motion.div>

          {/* Floating Tech Cards */}
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-8 right-10 glass-card p-3 rounded-lg z-30 flex items-center gap-2 text-sm font-mono border-l-4 border-[#3ddc84]"
          >
            <FaAndroid className="text-[#3ddc84] text-xl" /> Android SDK
          </motion.div>

          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 0.5, ease: "easeInOut" }}
            className="absolute top-32 right-2 glass-card p-3 rounded-lg z-30 flex items-center gap-2 text-sm font-mono border-l-4 border-[#54c5f8]"
          >
            <SiFlutter className="text-[#54c5f8] text-xl" /> Flutter
          </motion.div>

          <motion.div
            animate={{ y: [0, -40, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
            className="absolute bottom-16 left-0 glass-card p-3 rounded-lg z-30 flex items-center gap-2 text-sm font-mono border-l-4 border-[#ff5f56]"
          >
            <FaBrain className="text-[#ff5f56] text-xl" /> TensorFlow Lite
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, delay: 1.5, ease: "easeInOut" }}
            className="absolute bottom-32 right-6 glass-card p-3 rounded-lg z-30 flex items-center gap-2 text-sm font-mono border-l-4 border-[#FF9900]"
          >
            <FaServer className="text-[#FF9900] text-xl" /> AWS · FastAPI
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
