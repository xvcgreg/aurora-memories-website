import { motion } from 'framer-motion'
import { HiOutlineEnvelope, HiOutlineArrowRight } from 'react-icons/hi2'

export default function CTA({ t }) {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-am-accent/8 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-am-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-am-text-muted text-base md:text-lg max-w-xl mx-auto mb-10">
            {t.cta.subtitle}
          </p>

          <a
            href="mailto:greg@auroramemories.com?subject=Investor%20Deck%20Request"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-am-accent to-am-accent-light text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-am-accent/20 mb-8"
          >
            {t.cta.button}
            <HiOutlineArrowRight className="w-5 h-5" />
          </a>

          <div className="flex items-center justify-center gap-2 text-am-text-muted">
            <HiOutlineEnvelope className="w-4 h-4" />
            <span className="text-sm">{t.cta.email_label}:</span>
            <a
              href="mailto:greg@auroramemories.com"
              className="text-sm text-am-accent-light hover:text-am-white transition-colors"
            >
              {t.cta.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
