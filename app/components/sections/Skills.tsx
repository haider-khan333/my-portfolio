'use client'
import { motion } from 'framer-motion'
import { FaApple, FaBolt, FaBrain, FaShieldAlt } from 'react-icons/fa'

const skillsData = [
  { 
    title: "Mobile Native", 
    icon: <FaApple />, 
    skills: ["Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "Coroutines", "Room DB", "Hilt/Dagger"] 
  },
  { 
    title: "Backend & Cloud", 
    icon: <FaBolt />, 
    skills: ["Python FastAPI", "Docker", "PostgreSQL", "Redis", "WebSockets (Socket.IO)", "Google Maps API"] 
  },
  { 
    title: "AI & Edge ML", 
    icon: <FaBrain />, 
    skills: ["TensorFlow Lite", "CameraX", "ML Kit", "Signal Processing", "OCR & VAD", "Mu-law Compression"] 
  },
  { 
    title: "DevOps & Security", 
    icon: <FaShieldAlt />, 
    skills: ["CI/CD (GitHub Actions)", "ProGuard/R8", "OWASP Mobile Top 10", "Git", "Gradle Optimization"] 
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-mono">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive stack enabling full-cycle development from edge devices to cloud inference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#667eea] font-mono">
                {category.icon} {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-black/40 rounded text-xs border border-white/5 text-gray-300 font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}