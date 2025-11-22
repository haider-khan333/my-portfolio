'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaAndroid, FaBrain } from 'react-icons/fa'

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-mono">
            Engineered for <br />
            <span className="text-gradient">Intelligence</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg">
            Senior Software Developer fusing native Mobile Architecture with scalable AI Microservices.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold shadow-lg hover:translate-y-1 transition-transform flex items-center gap-2">
              View Work
            </a>
            <a href="https://github.com/haider-khan333" target="_blank" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2">
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Abstract Tech Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden md:block h-[400px]"
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
            <div className="space-y-2">
              <div className="h-2 bg-white/20 rounded w-3/4"></div>
              <div className="h-2 bg-white/10 rounded w-1/2"></div>
              <div className="h-2 bg-[#667eea]/40 rounded w-full mt-4"></div>
              <div className="h-2 bg-white/10 rounded w-2/3"></div>
            </div>
          </motion.div>

          {/* Floating Icons */}
          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-20 right-10 glass-card p-3 rounded-lg z-30 flex items-center gap-2 text-sm font-mono border-l-4 border-[#3ddc84]"
          >
            <FaAndroid className="text-[#3ddc84] text-xl" /> Android SDK
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -40, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
            className="absolute bottom-20 left-0 glass-card p-3 rounded-lg z-30 flex items-center gap-2 text-sm font-mono border-l-4 border-[#ff5f56]"
          >
            <FaBrain className="text-[#ff5f56] text-xl" /> TensorFlow
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}