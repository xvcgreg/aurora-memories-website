import { motion } from 'framer-motion'
import { HiOutlineKey, HiOutlineChatBubbleLeftRight, HiOutlineUserGroup, HiOutlineDocumentText } from 'react-icons/hi2'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export default function Product({ t }) {
  const features = [
    {
      icon: HiOutlineKey,
      title: t.product.memory_key_title,
      desc: t.product.memory_key_desc,
      gradient: 'from-am-gold/20 to-am-gold/5',
      iconColor: 'text-am-gold',
    },
    {
      icon: HiOutlineChatBubbleLeftRight,
      title: t.product.ai_avatar_title,
      desc: t.product.ai_avatar_desc,
      gradient: 'from-am-accent/20 to-am-accent/5',
      iconColor: 'text-am-accent-light',
    },
    {
      icon: HiOutlineUserGroup,
      title: t.product.family_council_title,
      desc: t.product.family_council_desc,
      gradient: 'from-emerald-500/20 to-emerald-500/5',
      iconColor: 'text-emerald-400',
    },
    {
      icon: HiOutlineDocumentText,
      title: t.product.testament_title,
      desc: t.product.testament_desc,
      gradient: 'from-sky-500/20 to-sky-500/5',
      iconColor: 'text-sky-400',
    },
  ]

  return (
    <section id="product" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-am-white mb-4">
            {t.product.title}
          </h2>
          <p className="text-am-text-muted text-base md:text-lg max-w-2xl mx-auto">
            {t.product.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/5 bg-am-navy/50 p-8 hover:border-white/10 transition-all duration-300"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 ${feature.iconColor} mb-5`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-am-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-am-text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
