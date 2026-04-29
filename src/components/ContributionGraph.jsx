import { useState, useEffect } from "react"

export default function ContributionGraph() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedYear, setSelectedYear] = useState(2026)
  const levels = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]

  const levelMap = {
    "NONE": 0,
    "FIRST_QUARTILE": 1,
    "SECOND_QUARTILE": 2,
    "THIRD_QUARTILE": 3,
    "FOURTH_QUARTILE": 4
  }

  const [years, setYears] = useState([
    { year: 2026, count: 130 },
    { year: 2025, count: 49 },
    { year: 2024, count: 4 }
  ])

  useEffect(() => {
    const url = `https://github-contributions-api.deno.dev/mausam-005.json${selectedYear ? `?year=${selectedYear}` : ""}`
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res)
        if (res.totalContributions !== undefined) {
          setYears(prev => prev.map(y => 
            y.year === selectedYear ? { ...y, count: res.totalContributions } : y
          ))
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [selectedYear])

  if (loading && !data) {
    return (
      <div className="contribution-section">
        <h3 className="contribution-title">Loading contributions...</h3>
      </div>
    )
  }

  if (!data || !data.contributions) return null

  const grid = data.contributions
  const total = data.totalContributions || 0
  const displayTotal = years.find(y => y.year === selectedYear)?.count || total

  return (
    <div className="contribution-section">
      <div className="contribution-layout">
        <div className="contribution-main">
          <h3 className="contribution-title">
            {displayTotal.toLocaleString()} contributions in {selectedYear === 2026 ? "the last year" : selectedYear}
          </h3>
          <div className="contribution-graph" style={{ opacity: loading ? 0.5 : 1, transition: "opacity 0.2s" }}>
            {grid.map((week, wi) => (
              <div key={wi} className="contribution-week">
                {week.map((day, di) => (
                  <div
                    key={di}
                    className="contribution-cell"
                    title={`${day.contributionCount} contributions on ${day.date}`}
                    style={{ backgroundColor: levels[levelMap[day.contributionLevel] || 0] }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="contribution-legend">
            <span className="contribution-legend-label">Less</span>
            {levels.map((color, i) => (
              <div
                key={i}
                className="contribution-cell"
                style={{ backgroundColor: color }}
              />
            ))}
            <span className="contribution-legend-label">More</span>
          </div>
        </div>
        
        <div className="contribution-years">
          {years.map(y => (
            <div 
              key={y.year}
              className={`contribution-year-item ${selectedYear === y.year ? "active" : ""}`}
              onClick={() => {
                if (selectedYear !== y.year) {
                  setLoading(true)
                  setSelectedYear(y.year)
                }
              }}
            >
              <span className="year-val">{y.year}</span>
              <span className="year-count">{y.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
