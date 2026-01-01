export const siteConfig = {
  name: "Amine Roudani",
  title: "Quant, AI/ML, Engineer",
  description: "Portfolio website of Amine Roudani",
  accentColor: "#FFD500",
  social: {
    linkedin: "https://linkedin.com/in/amineroudani",
    github: "https://github.com/amineroudani",
  },
  aboutMe:
    "Currently based in New York City. I hold an <a href=\"#education\" class=\"underline hover:opacity-70 transition-opacity\">MS in Operations Research from Columbia</a> and a <a href=\"#education\" class=\"underline hover:opacity-70 transition-opacity\">BS in Math & CS from École Polytechnique</a>. Over the past 8 months, I've been working as a quantitative developer at AlphaQuest, a fully systematic hedge fund located on 59th and Park. I built systems for research and trading, see <a href=\"#projects\" class=\"underline hover:opacity-70 transition-opacity\">projects section</a> to learn about some of the work I did there. Outside of work, I enjoy training Martial Arts (Jiu Jitsu / Boxing) and reading.",
  awards: [
    {
      title: "Winner - Amazon Bedrock Innovation Challenge",
      date: "2025",
      description: "Won 'Most Scalable Solution' and <u>$5,000 in AWS credits</u> at the Amazon Bedrock Innovation Challenge with teammates Alessandro Massaad and Martina Paez Berru. Built an AI platform powered by Bedrock, using Agentic AI and RAG on 1,000+ publications, to let anyone ideate, codify, and backtest quant systematic trading strategies.",
      logo: "/logos/aws-color.png",
    },
    {
      title: "Excellence Scholarship",
      date: "2021, 2022, 2023",
      description: "Awarded Excellence Scholarship by the École Polytechnique Foundation for three consecutive years. Excellence Scholarships are awarded to the very best students who demonstrate outstanding academic abilities, strong motivation, and a pioneering spirit to be real ambassadors of the Program.",
      logo: "/logos/Ecole_Polytechnique.png",
    },
    {
      title: "Mathematics and Chemistry Olympiads",
      date: "2019, 2020",
      description: "Competed at national levels in Mathematics and Chemistry Olympiads.",
      logo: "/logos/imo.png",
    },
  ],
  skills: [],
  projects: [
    {
      name: "Market Neutral Systematic Strategy on NYSE Equities",
      supervisor: "Supervised by Prof. Naftali Cohen, Senior Quant Researcher",
      description: "Published research paper developing a point-in-time systematic approach combining momentum indicators, fundamental metrics, and analyst recommendations to build balanced long-short portfolios with monthly rebalancing, achieving a Sharpe ratio of 0.81 on 8 years of out-of-sample data. Evaluated three portfolio construction methods (equally weighted, risk parity, minimum variance beta-neutral), with risk parity demonstrating superior Sharpe ratio, lower market beta, and reduced maximum drawdown relative to the S&P 500.",
      link: "https://arxiv.org/abs/2412.12350",
      logo: "/logos/Columbiauniversity-logo.jpg",
      skills: ["Python", "CVXPY", "Pandas", "Data Science"],
    },
    {
      name: "Pulse - Surveillance Platform",
      supervisor: "AlphaQuest (Systematic Quantitative Hedge Fund)",
      description: "As a step towards alleviating the overnight trader role, built a full-stack surveillance platform used by trading, research, and engineering teams. Designed Snowflake data models and engineered a modular C# scheduling/alerting system with clean separation of executors, making new alert types plug-in without touching core logic. Developed a fast React UI and added manual execution, Slack/Datadog/PagerDuty routing, and health-state analytics—resulting in a more reliable, scalable, and easy-to-extend monitoring stack.",
      link: "",
      logo: "/logos/aq.png",
      skills: ["Snowflake", "C#", "Python", "React", "FastAPI", "DataDog"],
    },
    {
      name: "Athena - PnL Dashboard",
      supervisor: "AlphaQuest (Systematic Quantitative Hedge Fund)",
      description: "Integrated Equities into internal PnL platform. Added processing for equity + Barra factors. Delivered new React UI tab with factor heatmaps and time-series views. Implemented feature- and contract-level PnL aggregation.\n\nStack: Python, Snowflake, React, AG-Charts.",
      link: "",
      logo: "/logos/aq.png",
      skills: ["Python", "Snowflake", "React", "AG-Charts"],
    },
    {
      name: "Trader Commentary Automation",
      supervisor: "AlphaQuest (Systematic Quantitative Hedge Fund)",
      description: "Automated daily trader commentary, cutting ~20% of manual workload. Aggregates internal trading data, risk metrics, flow analytics; ranks key PnL/vol drivers; enriches with live market news. LLM with domain prompts drafts concise commentary aligned with house views.\n\nFastAPI microservice, REST architecture, fully integrated into trading stack. Built tooling so traders self-maintain prompts and data sources, improving quality week over week.\n\nStack: Python, FastAPI, <a href=\"#project-alternative-data-parsing-pipeline\" class=\"underline hover:opacity-70 transition-opacity\">internal data pipelines</a>, LLM prompt engineering, news scraping.",
      link: "",
      logo: "/logos/aq.png",
      skills: ["Python", "FastAPI", "LLM"],
    },
    {
      name: "QuestGPT - Talk to your data",
      supervisor: "AlphaQuest (Systematic Quantitative Hedge Fund)",
      description: "Production chatbot for PnL analytics. Natural-language queries → SQL generation, data retrieval, charts, AG-Grid tables, and text summaries grounded in internal commentary and market context.\n\nMulti-agent workflow:\n• SQL-Gen Agent: safe SQL for PnL, exposures, attribution\n• RAG Agent: internal commentary retrieval\n• News Agent: market context relevance\n• Orchestrator: routing + output fusion\n\nFully integrated into trading stack. Eliminated most ad-hoc PnL requests.\n\nStack: Python, FastAPI, AG-Grid/Charts, Snowflake, multi-agent LLM.",
      link: "",
      logo: "/logos/aq.png",
      skills: ["Python", "FastAPI", "AG-Grid", "Snowflake", "LLM"],
    },
    {
      name: "Alternative Data Parsing Pipeline",
      supervisor: "AlphaQuest (Systematic Quantitative Hedge Fund)",
      description: "Designed and deployed a production pipeline extracting structured insights from unstructured Futures & FX flow delivered via email. Ingests attachments via secure email APIs, enhances charts (contrast, normalization, upscaling), detects numeric regions, and parses tables using LLMs with domain templates.\n\nImplemented validation with structural invariants (row/column consistency, numeric/unit checks) and auto-retry correction rules — ~99% extraction accuracy.\n\nIntegrated with Snowflake for downstream analytics and <a href=\"#project-trader-commentary-automation\" class=\"underline hover:opacity-70 transition-opacity\">automated trader commentary</a>. Added a Snowflake view aligning weekly street-flow data with internal flows for apples-to-apples signal research.\n\nStack: Python, image preprocessing, LLM parsing, email APIs, Snowflake.",
      link: "",
      logo: "/logos/aq.png",
      skills: ["Python", "LLM", "Snowflake", "Email APIs"],
    },
    {
      name: "GNN for Portfolio Optimization",
      supervisor: "Columbia Engineering",
      description: "Built GNNs (GAT and GCN) learning portfolio weights from asset graphs. Backtested vs. MVO and Equal Weight.\n\nKey findings: Complexity > reward. Results unstable; interpretation weak. Risk gains offset by return drag. Constraints + noise → trivial allocations. Attention helps structure, not edge.\n\nConclusion: strong theory, weak practical payoff. Needs better graph construction, interpretability, and regime adaptation.\n\nStack: PyTorch Geometric, CVXPY, Python.",
      link: "",
      logo: "/logos/ask2.png",
      skills: ["PyTorch Geometric", "CVXPY", "Python"],
    },
    {
      name: "LLMs for Investment Ideation",
      supervisor: "Columbia Quantitative Research Labs, supervised by Prof. Micheal Robbins",
      description: "Laid foundations for Columbia Engineering's Quantitative Research Lab. Architected modular pipeline processing 3.41 GB of financial research, unifying 5,000+ papers and 20,000+ posts with semantic search. Reduced research time by >100 hours/month for portfolio managers.",
      link: "",
      logo: "/logos/Columbiauniversity-logo.jpg",
      skills: ["Python", "LLM", "Semantic Search", "NLP"],
    },
    {
      name: "Backtesting Systematic Bond Trading Strategy",
      supervisor: "Columbia Quantitative Research Labs, supervised by Prof. Micheal Robbins",
      description: "Implemented and backtested a systematic bond trading strategy from academic research in a point-in-time manner. Adjusted for seasonality effects (day of week, etc.) and used linear regression to control for confounding factors.\n\nVerified the strategy's distinctiveness: not a shadow of calendar effects (Friday/end-of-month patterns) and no information leakage (no correlation between pre-TRA returns and actual announcement content).\n\nStack: Python, Linear Regression, Time-Series Analysis.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4764295",
      logo: "/logos/Columbiauniversity-logo.jpg",
      skills: ["Python", "Linear Regression", "Time-Series Analysis"],
    },
  ],
  experience: [
    {
      company: "AlphaQuest (Systematic Quantitative Hedge Fund)",
      title: "Quantitative Developer Intern",
      dateRange: "May 2025 - Present",
      logo: "/logos/aq.png",
      bullets: [
        "Quantitative Systematic Hedge Fund",
      ],
    },
    {
      company: "Columbia University",
      title: "Teaching Assistant",
      dateRange: "Sep 2025 - Present",
      logo: "/logos/Columbiauniversity-logo.jpg",
      bullets: [
        "IEORE4576: Data-Driven Methods in Finance, by Prof. Charles Pehlivanian",
      ],
    },
    {
      company: "ask2.ai",
      title: "Machine Learning Engineer",
      dateRange: "Jan 2025 - May 2025",
      logo: "/logos/ask2.png",
      bullets: [
        "GNNs for Portfolio Optimization, supervised by Prof. Ali Hirsa",
      ],
    },
    {
      company: "Investment Analytics GmbH",
      title: "Engineer",
      dateRange: "Aug 2024 - Apr 2025",
      logo: "/logos/ia.png",
      link: "https://www.investmentanalytics.tech/",
      bullets: [
        "Led the AI initiative and laid the foundations for the firm's mid-frequency U.S. equity strategy",
      ],
    },
    {
      company: "École Polytechnique",
      title: "Research Assistant",
      dateRange: "Sep 2023 - Apr 2024",
      logo: "/logos/Ecole_Polytechnique.png",
      bullets: [
        "Bachelor Thesis in Optimization: Grade A",
      ],
    },
    {
      company: "DNB Asset Management",
      title: "Summer Associate",
      dateRange: "Jun 2023 - Aug 2023",
      logo: "/logos/dnb.png",
      bullets: [
        "Renewable Energy Fund (Equities)",
      ],
    },
  ],
  education: [
    {
      school: "Columbia University",
      degree: "MS in Operations Research",
      dateRange: "Dec 2025",
      logo: "/logos/Columbiauniversity-logo.jpg",
      achievements: [
        "Relevant Coursework: Computational Portfolio Construction, Model & Trade Derivatives, Fixed Income, Machine Learning, Deep Learning, Optimization, Simulations, Statistics, Probability, Algorithmic Trading, Industry Projects",
      ],
    },
    {
      school: "Ecole Polytechnique",
      degree: "BS in Mathematics and Computer Science",
      dateRange: "Jul 2024",
      logo: "/logos/Ecole_Polytechnique.png",
      achievements: [
        "Relevant Coursework: Algebra, Analysis, Measure Theory, Topology Probability, Stochastic Processes, Statistics, Distributed Computing, Functional Programming, Object-Oriented Programming, Computer Architecture, Algorithms",
      ],
    },
  ],
};
