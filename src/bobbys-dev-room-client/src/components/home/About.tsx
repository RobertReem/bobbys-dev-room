import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-24 px-4 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent-green font-mono mb-2">&gt; cat ./about.md</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-accent-blue to-accent-green rounded-2xl flex items-center justify-center text-8xl">
                👨‍💻
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 border-2 border-accent-blue rounded-2xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Hey, I'm <span className="text-accent-blue">Rob</span>
            </h3>
            <p className="text-gray-400 mb-4">
              I'm a .NET developer with 2+ years of professional experience, passionate about building 
              efficient applications and sharing knowledge with the developer community.
            </p>
            <p className="text-gray-400 mb-4">
              My expertise spans C#/.NET, SQL Server, JavaScript/TypeScript, and React. I love 
              optimizing database performance—like turning a 2-minute stored procedure into a 
              2-second one.
            </p>
            <p className="text-gray-400 mb-6">
              When I'm not coding, I co-host a true crime podcast and explore the latest in gaming 
              and tech.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-bg-tertiary border border-gray-700 rounded-lg hover:border-accent-blue hover:text-accent-blue transition-all"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-bg-tertiary border border-gray-700 rounded-lg hover:border-accent-green hover:text-accent-green transition-all"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About