import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar({ t, locale, setLocale }) {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#product', label: t.nav.product },
    { href: '#projects', label: t.nav.projects },
    { href: '#team', label: t.nav.team },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-am-deep/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-am-accent to-am-gold flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-am-white font-semibold text-lg tracking-tight">
              Aurora <span className="text-am-gold">Memories</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-am-text-muted hover:text-am-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={() => setLocale(locale === 'en' ? 'pl' : 'en')}
              className="text-xs text-am-text-muted hover:text-am-white border border-white/10 rounded-md px-2 py-1 transition-colors"
            >
              {locale === 'en' ? 'PL' : 'EN'}
            </button>

            <a
              href="#contact"
              className="text-sm font-medium px-5 py-2 rounded-lg bg-gradient-to-r from-am-accent to-am-accent-light text-white hover:opacity-90 transition-opacity"
            >
              {t.nav.invest}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-am-text-muted hover:text-am-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-am-deep/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-am-text-muted hover:text-am-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setLocale(locale === 'en' ? 'pl' : 'en')}
                  className="text-xs text-am-text-muted border border-white/10 rounded-md px-2 py-1"
                >
                  {locale === 'en' ? 'PL' : 'EN'}
                </button>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium px-5 py-2 rounded-lg bg-gradient-to-r from-am-accent to-am-accent-light text-white"
                >
                  {t.nav.invest}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
