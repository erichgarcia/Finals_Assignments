import '../styles/FeatureSection.css'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '📊',
    title: 'System Analysis',
    description: 'Analyzing requirements and understanding system needs to create effective solutions.',
  },
  {
    icon: '🗂️',
    title: 'Process Improvement',
    description: 'Improving workflows and organizing processes for better efficiency.',
  },
  {
    icon: '💾',
    title: 'Data Management',
    description: 'Designing structured systems that handle data accurately and reliably.',
  },
]

export default function FeatureSection() {
  return (
    <section className="features">
      <h2 className="features-heading">What I Bring</h2>
      <div className="features-grid">
        {features.map((f) => (
          <div key={f.title} className="feature-card">
            <span className="feature-icon">{f.icon}</span>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}