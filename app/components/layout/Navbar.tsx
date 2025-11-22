'use client'

export default function Navbar() {
  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-mono text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#667eea]">
          &lt;Muhammad /&gt;
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-mono text-gray-400">
          {navLinks.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-white transition-colors hover:border-b-2 border-[#667eea]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}