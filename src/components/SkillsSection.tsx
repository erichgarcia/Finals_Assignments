import '../styles/SkillsSection.css'

interface Skill {
  name: string
  level: number
}

const skills: Skill[] = [
  { name: 'System Analysis', level: 85 },
  { name: 'Requirements Gathering', level: 80 },
  { name: 'Process Improvement', level: 80 },
  { name: 'Database Management', level: 75 },
  { name: 'Problem Solving', level: 85 },
]

export default function SkillsSection() {
  return (
    <section className="skills">
      <h2 className="skills-heading">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}