'use client'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm">
      <div className="flex justify-center gap-6 mb-4 text-xl">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#667eea] transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <FaGithub />
        </a>
      </div>
      <p>&copy; 2025 Muhammad Haider. Built with Next.js & Tailwind.</p>
    </footer>
  )
}