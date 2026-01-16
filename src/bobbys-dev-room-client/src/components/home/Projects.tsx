import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Arc Raiders Dashboard',
    description: 'Game analytics dashboard with item tracking, quest management, and interactive maps.',
    tech: ['C#', '.NET', 'SQL Server', 'TypeScript', 'React'],
    status: 'Live',
    link: '#',
  },
  {
    title: 'Docker Tutorial',
    description: 'Comprehensive 15-part interactive tutorial covering Docker from basics to advanced concepts.',
    tech: ['Docker', 'HTML', 'CSS', 'JavaScript'],
    status: 'Live',
    link: '/tutorials/docker',
  },
  {
    title: 'Honest Mortgage',
    description: 'Full-stack mortgage broker website with modern UI and client management features.',
    tech: ['ASP.NET Core', 'React', 'SQL Server', 'Azure'],
    status: 'In Progress',
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent-green font-mono mb-2">&gt; ls ./projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group block p-6 bg-bg-secondary border border-gray-800 rounded-xl hover:border-accent-blue transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-bg-tertiary rounded-lg flex items-center justify-center text-2xl">
                  {index === 0 ? '🎮' : index === 1 ? '🐳' : '🏠'}
                </div>
                <span className={`px-3 py-1 text-xs font-mono rounded-full ${
                  project.status === 'Live' 
                    ? 'bg-accent-green/10 text-accent-green' 
                    : 'bg-accent-blue/10 text-accent-blue'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs bg-bg-tertiary text-gray-300 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects