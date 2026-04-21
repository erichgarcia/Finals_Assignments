import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <div className="page contact-page">
      <Header
        title="Contact Me"
        subtitle="Need help or want to work together? Contact me and Let's talk."
      />
      <ContactForm />
      <Footer />
    </div>
  )
}
