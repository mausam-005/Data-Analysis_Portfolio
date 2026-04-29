const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "E-commerce Sales Analytics",
    description: "Comprehensive data analytics project analyzing sales performance across Indian domestic (Amazon India) and International channels. Utilizing Tableau for high-impact visualizations of revenue trends, category performance, and fulfillment efficiency.",
    image: `${base}ecommerce_project.png`,
    tags: ["tableau", "sales-analytics", "data-viz", "business-intelligence"],
    github: "https://github.com/mausam-005/E-commerce-Sales-Analytics-Tableau",
    live: "https://public.tableau.com/app/profile/mausam.kumar8507/viz/E-commerceSaleReportbyMausam/Dashboard1"
  },
  {
    name: "Global AQI Analytics",
    description: "Advanced environmental monitoring tool utilizing Python, Pandas, and NumPy. Features complex trend analysis and automated visualization suites using Seaborn (sns) for heatmaps and Plotly for interactive statistical dashboards.",
    image: `${base}aqi_project.png`,
    tags: ["python", "pandas", "numpy", "seaborn", "plotly", "data-viz"],
    github: "https://github.com/mausam-005/SectionA_G10_GlobalAQIAnalytics",
    live: "https://github.com/mausam-005/SectionA_G10_GlobalAQIAnalytics"
  },
  {
    name: "DVA Capstone: Root Cause Analysis Suite",
    description: "Interactive analytics suite developed for executive-level root cause reporting. Integrates a high-performance Tableau dashboard with an advanced Excel model utilizing complex logic formulas and pivot charts.",
    image: `${base}dva_capstone.png`,
    tags: ["tableau", "excel", "mysql", "dashboard"],
    github: "https://github.com/mausam-005/DVA-Capstone",
    live: "https://public.tableau.com/views/DVA_Dashboard_Final/DB-2RootCause?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    secondaryLive: "https://docs.google.com/spreadsheets/d/1hOI7rUB05ancqKKBM7Kk_-6SlKks32fau-yoKpyPegU/edit?gid=1504644105#gid=1504644105",
    secondaryLiveText: "View Spreadsheet"
  },
  {
    name: "AI Real Estate Advisory Assistant",
    description: "Agentic AI system for intelligent property valuation and investment recommendations in Bengaluru. Combines a Linear Regression ML model, RAG-based market retrieval via ChromaDB, and Google Gemini 1.5 Pro reasoning through a LangGraph workflow.",
    image: `${base}genai_project.png`,
    tags: ["python", "langgraph", "langchain", "gemini", "streamlit", "rag"],
    github: "https://github.com/mausam-005/gen_ai_capstone",
    live: "https://bengaluru-houseprice-predictor.streamlit.app",
  },
]

export default projects
