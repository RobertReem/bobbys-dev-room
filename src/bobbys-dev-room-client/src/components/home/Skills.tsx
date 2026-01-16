import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Backend',
    skills: [
      { name: 'C# / .NET', level: 90 },
      { name: 'ASP.NET Core', level: 85 },
      { name: 'Entity Framework', level: 80 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'SQL Server', level: 90 },
      { name: 'Stored Procedures', level: 85 },
      { name: 'Query Optimization', level: 80 },
      { name: 'Database Design', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 70 },
      { name: 'TypeScript', level: 70 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML/CSS', level: 80 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'Azure', level: 65 },
      { name: 'CI/CD', level: 60 },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent-green font-mono mb-2">&gt; skills --list</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 bg-bg-secondary border border-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent-blue">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-accent-blue to-accent-green rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills