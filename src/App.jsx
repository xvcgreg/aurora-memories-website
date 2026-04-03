import { useLocale } from './hooks/useLocale'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/Product'
import AvatarCloud from './components/AvatarCloud'
import Projects from './components/Projects'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div className="min-h-screen bg-am-deep">
      <Navbar t={t} locale={locale} setLocale={setLocale} />
      <Hero t={t} />
      <Product t={t} />
      <AvatarCloud t={t} />
      <Projects t={t} />
      <Team t={t} />
      <CTA t={t} />
      <Footer t={t} />
    </div>
  )
}

export default App
