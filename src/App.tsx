import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import WhenToSee from "./components/WhenToSee"
import Services from "./components/Services"
import Approach from "./components/Approach"
import Faq from "./components/Faq"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F3]">
      {/* Header */}
      <Header />

      {/* Main sections */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <WhenToSee />
        <Services />
        <Approach />
        <Faq />
        <ContactSection />
      </main>

      {/* Footer with map */}
      <Footer />
    </div>
  )
}

export default App
