import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Logo/Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <span className="text-8xl">🚀</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
        >
          Bobby's Dev Room
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-accent-green font-mono mb-8"
        >
          // Building something awesome
        </motion.p>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-bg-secondary border border-accent-blue rounded-full"
        >
          <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
          <span className="text-gray-400 font-mono text-sm">
            Chunk 1A Complete - Scaffolding Done!
          </span>
        </motion.div>

        {/* Next steps hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-gray-500 text-sm"
        >
          Next up: Database setup, then the real fun begins ✨
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Home
