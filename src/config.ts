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
    "Coming soon",
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
      description: "",
      link: "",
      logo: "/logos/aq.png",
      skills: [],
    },
    {
      name: "Trader Commentary Automation",
      supervisor: "AlphaQuest (Systematic Quantitative Hedge Fund)",
      description: "",
      link: "",
      logo: "/logos/aq.png",
      skills: [],
    },
    {
      name: "QuestGPT - Talk to your data",
      supervisor: "AlphaQuest (Systematic Quantitative Hedge Fund)",
      description: "",
      link: "",
      logo: "/logos/aq.png",
      skills: [],
    },
    {
      name: "Alternative Data Parsing Pipeline",
      supervisor: "AlphaQuest (Systematic Quantitative Hedge Fund)",
      description: "",
      link: "",
      logo: "/logos/aq.png",
      skills: [],
    },
    {
      name: "GNN for Portfolio Optimization",
      supervisor: "ask2.ai (FinTech)",
      description: "",
      link: "",
      logo: "/logos/ask2.png",
      skills: [],
    },
    {
      name: "LLMs for Investment Ideation",
      supervisor: "Supervised by Prof. Micheal Robbins",
      description: "",
      link: "",
      logo: "/logos/Columbiauniversity-logo.jpg",
      skills: [],
    },
    {
      name: "Backtesting Systematic Bond Trading Strategy",
      supervisor: "Supervised by Prof. Micheal Robbins",
      description: "",
      link: "",
      logo: "/logos/Columbiauniversity-logo.jpg",
      skills: [],
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
        "Teaching Assistant: IEORE4576 Data-Driven Methods in Finance",
        "Research: GNNs in Portfolio Optimization (Prof. Ali Hirsa), LLMs for Investment Ideation (Prof. Micheal Robbins)",
      ],
    },
    {
      school: "Ecole Polytechnique",
      degree: "BS in Mathematics and Computer Science",
      dateRange: "Jul 2024",
      logo: "/logos/Ecole_Polytechnique.png",
      achievements: [
        "Relevant Coursework: Algebra, Analysis, Measure Theory, Topology Probability, Stochastic Processes, Statistics, Distributed Computing, Functional Programming, Object-Oriented Programming, Computer Architecture, Algorithms",
        "Awarded Excellence Scholarship 3 years in a row",
        "Bachelor's thesis in Optimization: Grade A",
      ],
    },
  ],
};
