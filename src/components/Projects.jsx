import { motion } from 'framer-motion'
import { HiOutlineBuildingStorefront, HiOutlineBuildingLibrary, HiOutlineStar, HiOutlineCpuChip } from 'react-icons/hi2'

export default function Projects({ t }) {
  const projects = [
    {
      icon: HiOutlineBuildingStorefront,
      title: t.projects.b2b2c_title,
      desc: t.projects.b2b2c_desc,
      tag: 'B2B2C',
      tagColor: 'bg-am-accent/10 text-am-accent-light border-am-accent/20',
    },
    {
      icon: HiOutlineBuildingLibrary,
      title: t.projects.b2g_title,
      desc: t.projects.b2g_desc,
      tag: 'B2G',
      tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    },
    {
      icon: HiOutlineStar,
      title: t.projects.vip_title,
      desc: t.projects.vip_desc,
      tag: 'VIP',
      tagColor: 'bg-am-gold/10 text-am-gold border-am-gold/20',
    },
    {
      icon: HiOutlineCpuChip,
      title: t.projects.prototype_title,
      desc: t.projects.prototype_desc,
      tag: 'Tech',
      tagColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    },
  ]

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-am-navy/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-am-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-am-text-muted text-base md:text-lg max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/5 bg-am-deep/50 p-8 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-am-text-muted group-hover:text-am-white transition-colors">
                  <project.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-am-white">
                      {project.title}
                    </h3>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${project.tagColor}`}>
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-am-text-muted leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
