import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙', comingSoon: false },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: '💼', comingSoon: false },
  { name: 'X / Twitter', url: '#', icon: 'X', comingSoon: true },
  { name: 'YouTube', url: '#', icon: '📺', comingSoon: true },
  { name: 'Twitch', url: '#', icon: '🎮', comingSoon: true },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-gradient">Bobby's Dev Room</h3>
          <p className="text-gray-500 font-mono mb-8">&gt; Let's connect_</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-gray-800 rounded-lg hover:border-accent-blue transition-all"
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
              {link.comingSoon && <span className="text-xs bg-bg-tertiary px-2 py-0.5 rounded text-gray-500">Soon</span>}
            </a>
          ))}
        </div>

        <p className="text-gray-600 text-sm">© {currentYear} Bobby's Dev Room. Built with .NET, React, and ☕</p>
      </div>
    </footer>
  )
}

export default Footer