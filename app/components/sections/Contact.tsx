'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 1. Define the recipient
    const recipient = "muhammadhaiderkhan0786@gmail.com"
    
    // 2. specific subject line
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)
    
    // 3. Format the email body
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    )

    // 4. Open the email client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-8 font-mono">Initialize Communication</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-black/30 border border-white/10 rounded-lg p-4 focus:border-[#667eea] focus:outline-none transition-colors w-full" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-black/30 border border-white/10 rounded-lg p-4 focus:border-[#667eea] focus:outline-none transition-colors w-full" 
              />
            </div>
            <textarea 
              rows={5} 
              placeholder="Project details..." 
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="bg-black/30 border border-white/10 rounded-lg p-4 focus:border-[#667eea] focus:outline-none transition-colors w-full"
            ></textarea>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_20px_rgba(102,126,234,0.4)] transition-shadow"
            >
              Transmit Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}