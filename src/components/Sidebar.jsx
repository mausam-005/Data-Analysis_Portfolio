const base = import.meta.env.BASE_URL

export default function Sidebar() {
  const dvaSkills = [
    "Excel", "Tableau", "Spreadsheet", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "MySQL"
  ]

  const techStack = [
    "React", "Next.js", "Node.js", "Express JS", "MongoDB", 
    "Prisma ORM", "Tailwind CSS", "HTML", "CSS", "JavaScript", "TypeScript",
    "Docker", "Docker Compose", "Kubernetes", "Terraform", "Git and Github", 
    "UI/UX", "Research", "Leadership", "GenAI", "LangChain", "LangGraph", 
    "Unit Testing"
  ]

  return (
    <aside className="sidebar">
      <img
        src={`${base}mausam.png`}
        alt="Mausam Kumar Dwivedi"
        className="sidebar-avatar"
      />
      <h1 className="sidebar-name">Mausam Kumar Dwivedi</h1>
      <p className="sidebar-username">mausam-005</p>
      <p className="sidebar-bio">
        Data Analyst expert in <strong>Excel</strong>, <strong>Tableau</strong>, and <strong>MySQL</strong>, turning complex datasets into clear, actionable intelligence. 
        I leverage <strong>Python</strong>, <strong>Pandas</strong>, <strong>NumPy</strong>, <strong>Seaborn</strong>, and <strong>Plotly</strong> to build scalable models and automated dashboards.
      </p>

      <a
        href="https://github.com/mausam-005"
        target="_blank"
        rel="noreferrer"
        className="sidebar-follow-btn"
      >
        View GitHub
      </a>
      <div className="sidebar-socials">
        <a
          href="https://www.linkedin.com/in/mausam-kumar-818241343/"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          LinkedIn
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          Resume
        </a>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat-item">
          <strong>15</strong>
          <span>Repositories</span>
        </div>
        <div className="sidebar-stat-item">
          <strong>1</strong>
          <span>Follower</span>
        </div>
        <div className="sidebar-stat-item">
          <strong>0</strong>
          <span>Following</span>
        </div>
      </div>

      <div className="sidebar-info">
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
          <span>India</span>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88z" />
          </svg>
          <a href="mailto:mausamdwivedi2020@gmail.com">mausamdwivedi2020@gmail.com</a>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M11 0H5a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2zM5 2h6v11H5V2zm3 13a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
          <a href="tel:8936836999">8936836999</a>
        </div>
      </div>

      <div className="sidebar-orgs">
        <h3 className="sidebar-orgs-title">DVA Analytics Suite</h3>
        <div className="sidebar-orgs-list">
          {dvaSkills.map(skill => (
            <span key={skill} className="org-pill dva-pill">{skill}</span>
          ))}
        </div>
      </div>

      <div className="sidebar-orgs">
        <h3 className="sidebar-orgs-title">Technology Stack</h3>
        <div className="sidebar-orgs-list">
          {techStack.map(skill => (
            <span key={skill} className="org-pill">{skill}</span>
          ))}
        </div>
      </div>
    </aside>
  )
}
