import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import WhenToSee from "./components/WhenToSee"
import Services from "./components/Services"
import ServicesGrid from "./components/ServicesGrid"
import Approach from "./components/Approach"
import Faq from "./components/Faq"
import ContactSection from "./components/ContactSection"
import ReviewsSection from "./components/ReviewsSection"
import Footer from "./components/Footer"
import ScrollAnimation from "./components/ScrollAnimation"

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F3]">
      {/* Header */}
      <Header />

      {/* Main sections */}
      <main className="flex-1">
        <Hero />
        <ScrollAnimation>
          <AboutSection />
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <WhenToSee />
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <Services />
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <ServicesGrid />
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <Approach />
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <Faq />
        </ScrollAnimation>
        <ScrollAnimation delay={100}>
          <ContactSection />
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <ReviewsSection />
        </ScrollAnimation>
      </main>

      {/* Footer with map */}
      <Footer />
    </div>
  )
}

export default App
