import { motion } from 'framer-motion'
import { HiOutlineGlobeAlt } from 'react-icons/hi2'

export default function Team({ t }) {
  const founders = [
    {
      name: t.team.greg_name,
      role: t.team.greg_role,
      bio: t.team.greg_bio,
      initials: 'GO',
      gradient: 'from-am-accent to-am-accent-light',
    },
    {
      name: t.team.wojciech_name,
      role: t.team.wojciech_role,
      bio: t.team.wojciech_bio,
      initials: 'WD',
      gradient: 'from-sky-400 to-blue-600',
    },
    {
      name: t.team.gosia_name,
      role: t.team.gosia_role,
      bio: t.team.gosia_bio,
      initials: 'MS',
      gradient: 'from-emerald-400 to-teal-600',
    },
    {
      name: t.team.andrzej_name,
      role: t.team.andrzej_role,
      bio: t.team.andrzej_bio,
      initials: 'AD',
      gradient: 'from-am-gold to-am-gold-light',
    },
  ]

  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-am-white mb-4">
            {t.team.title}
          </h2>
          <p className="text-am-text-muted text-base md:text-lg max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/5 bg-am-navy/50 p-6 text-center hover:border-white/10 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-5">
                <div
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center mx-auto shadow-lg`}
                >
                  <span className="text-2xl font-bold text-white select-none">
                    {founder.initials}
                  </span>
                </div>
                <div
                  className={`absolute inset-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${founder.gradient} blur-xl opacity-20 mx-auto group-hover:opacity-30 transition-opacity`}
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-am-white mb-1">
                {founder.name}
              </h3>
              <p className="text-sm font-medium text-am-accent-light mb-4">
                {founder.role}
              </p>
              <p className="text-sm text-am-text-muted leading-relaxed">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Estonia badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-2 text-am-text-muted"
        >
          <HiOutlineGlobeAlt className="w-5 h-5" />
          <span className="text-sm">Incorporated in Estonia (EU) &middot; Equal equity (25% each) + ESOP</span>
        </motion.div>
      </div>
    </section>
  )
}
