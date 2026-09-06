import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background font-body text-on-background">
          <Navbar />
          <main>
            <Hero />
            <StatsBar />
            <Stack />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
