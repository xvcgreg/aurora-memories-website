import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Generate avatar placeholders with diverse appearances
const AVATARS = [
  { id: 1, name: 'Helena', age: '78', gradient: 'from-rose-400 to-pink-600' },
  { id: 2, name: 'Stanislaw', age: '82', gradient: 'from-blue-400 to-indigo-600' },
  { id: 3, name: 'Maria', age: '65', gradient: 'from-amber-400 to-orange-600' },
  { id: 4, name: 'Jan', age: '91', gradient: 'from-emerald-400 to-teal-600' },
  { id: 5, name: 'Anna', age: '73', gradient: 'from-violet-400 to-purple-600' },
  { id: 6, name: 'Tomasz', age: '88', gradient: 'from-cyan-400 to-blue-600' },
  { id: 7, name: 'Elzbieta', age: '70', gradient: 'from-pink-400 to-rose-600' },
  { id: 8, name: 'Piotr', age: '85', gradient: 'from-sky-400 to-blue-600' },
  { id: 9, name: 'Krystyna', age: '76', gradient: 'from-fuchsia-400 to-pink-600' },
  { id: 10, name: 'Marek', age: '80', gradient: 'from-teal-400 to-emerald-600' },
  { id: 11, name: 'Zofia', age: '69', gradient: 'from-orange-400 to-red-600' },
  { id: 12, name: 'Andrzej', age: '95', gradient: 'from-indigo-400 to-violet-600' },
]

function AvatarBubble({ avatar, index, total }) {
  // Position in an organic cloud layout
  const angle = (index / total) * Math.PI * 2
  const radius = 120 + (index % 3) * 60
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius * 0.6
  const size = 56 + (index % 3) * 16
  const delay = index * 0.15

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 200 }}
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <motion.div
        animate={{
          y: [0, -8 - (index % 5) * 2, 0],
        }}
        transition={{
          duration: 3 + (index % 3),
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.3,
        }}
        className="relative group cursor-pointer"
      >
        <div
          className={`rounded-full bg-gradient-to-br ${avatar.gradient} flex items-center justify-center shadow-lg shadow-black/20 ring-2 ring-white/10 group-hover:ring-white/30 transition-all duration-300`}
          style={{ width: size, height: size }}
        >
          <span className="text-white font-semibold text-sm select-none" style={{ fontSize: size * 0.3 }}>
            {avatar.name[0]}
          </span>
        </div>
        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${avatar.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
          style={{ width: size, height: size }}
        />
      </motion.div>
    </motion.div>
  )
}

function Waveform() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let time = 0

    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const bars = 60
      const barWidth = width / bars
      const gap = 2

      for (let i = 0; i < bars; i++) {
        const x = i * barWidth
        const wave1 = Math.sin(time * 2 + i * 0.3) * 0.3
        const wave2 = Math.sin(time * 1.5 + i * 0.15) * 0.2
        const wave3 = Math.sin(time * 3 + i * 0.5) * 0.15
        const amplitude = Math.abs(wave1 + wave2 + wave3)
        const barHeight = Math.max(3, amplitude * height * 0.8)

        const gradient = ctx.createLinearGradient(x, height / 2 - barHeight / 2, x, height / 2 + barHeight / 2)
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.6)')
        gradient.addColorStop(0.5, 'rgba(167, 139, 250, 0.8)')
        gradient.addColorStop(1, 'rgba(212, 168, 83, 0.6)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.roundRect(
          x + gap / 2,
          height / 2 - barHeight / 2,
          barWidth - gap,
          barHeight,
          2
        )
        ctx.fill()
      }

      time += 0.02
      animationRef.current = requestAnimationFrame(draw)
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-20 md:h-24"
      style={{ imageRendering: 'auto' }}
    />
  )
}

export default function AvatarCloud({ t }) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-am-accent/8 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-am-white mb-4">
            {t.avatar_section.title}
          </h2>
          <p className="text-am-text-muted text-base md:text-lg max-w-2xl mx-auto">
            {t.avatar_section.subtitle}
          </p>
        </motion.div>

        {/* Avatar Cloud */}
        <div className="relative h-[350px] md:h-[420px] mb-12">
          {AVATARS.map((avatar, i) => (
            <AvatarBubble key={avatar.id} avatar={avatar} index={i} total={AVATARS.length} />
          ))}
          {/* Central glowing orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-am-accent to-am-gold blur-xl"
            />
          </div>
        </div>

        {/* Waveform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto rounded-2xl border border-white/5 bg-am-navy/30 p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-am-accent animate-pulse" />
            <span className="text-am-text-muted text-sm">AI Voice Active</span>
          </div>
          <Waveform />
        </motion.div>
      </div>
    </section>
  )
}
