import { motion } from 'framer-motion'

export default function Hero({ t }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-am-accent/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-am-gold/8 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-am-accent/5 rounded-full blur-[200px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-am-gold mb-6 px-4 py-2 border border-am-gold/20 rounded-full bg-am-gold/5">
            {t.hero.tagline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-am-white leading-tight tracking-tight mb-6"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-am-text-muted max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-am-accent to-am-accent-light text-white font-semibold text-base hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-am-accent/20"
          >
            {t.hero.cta_primary}
          </a>
          <a
            href="mailto:greg@auroramemories.com"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 text-am-text hover:border-white/20 hover:bg-white/5 font-medium text-base transition-all"
          >
            {t.hero.cta_secondary}
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: t.stats.loi, label: t.stats.loi_label },
            { value: t.stats.market, label: t.stats.market_label },
            { value: t.stats.partners, label: t.stats.partners_label },
            { value: t.stats.patents, label: t.stats.patents_label },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-am-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-am-text-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-am-deep to-transparent" />
    </section>
  )
}
