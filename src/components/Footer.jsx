export default function Footer({ t }) {
  return (
    <footer className="border-t border-white/5 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-am-accent to-am-gold flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <span className="text-sm text-am-text-muted">
              {t.footer.tagline}
            </span>
          </div>

          <p className="text-sm text-am-text-muted">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
