import Header from '../components/Header'
import BioContent from '../components/BioContent'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'
import '../styles/About.css'

export default function About() {
  return (
    <div className="page about-page">
      <Header
        title="About Me"
        subtitle="A little bit about who I am and what I do."
      />
      <BioContent />
      <SkillsSection />
      <Footer />
    </div>
  )
}
