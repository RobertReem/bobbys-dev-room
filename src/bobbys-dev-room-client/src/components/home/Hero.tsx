import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const titleText = "Bobby's Dev Room"
  const letters = titleText.split('')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #2496ed 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
          scale: [1, 1.2, 1],
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          x: { duration: 0.3 },
          y: { duration: 0.3 },
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x * -1.5,
          y: mousePosition.y * -1.5,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          x: { duration: 0.3 },
          y: { duration: 0.3 },
        }}
      />

      <div className="relative z-10 text-center max-w-5xl">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent-green font-mono text-lg mb-4"
        >
          &gt; Hello, world_
        </motion.p>

        {/* Main title with letter animation */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 leading-tight">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block text-gradient hover:text-accent-blue transition-colors"
              style={{
                marginRight: letter === ' ' ? '0.25em' : '0',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          .NET Developer crafting{' '}
          <span className="text-accent-blue">elegant solutions</span> and{' '}
          <span className="text-accent-green">sharing knowledge</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects"
            className="group relative px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-green opacity-0 group-hover:opacity-100 transition-opacity"></div> 
          </a>
          <a href="#about"
            className="px-8 py-4 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-accent-green hover:text-accent-green transition-all"
          >
            About Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-accent-green rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero