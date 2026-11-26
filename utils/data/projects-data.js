const github = "https://github.com/adimalkar/";

export const featuredProjects = [
  {
    name: "Termnova", category: "Contract intelligence", theme: "termnova",
    image: "/work/termnova.webp", width: 1084, height: 911,
    alt: "Termnova’s control desk groups contract obligations by owner and deadline, with supporting clauses.",
    description: "Ask a contract a question and trace the answer to its source clause. Termnova combines keyword and vector search, then reranks the evidence for a LangGraph workflow.",
    tools: ["LangGraph", "FastAPI", "pgvector"],
    code: github + "termnova", demo: "https://termnova.onrender.com/",
  },
  {
    name: "Cadence", category: "Developer tooling", theme: "cadence",
    image: "/work/cadence.webp", width: 1120, height: 668,
    alt: "Cadence’s audit of psf/requests shows its time to first signal and the portion the report estimates is recoverable.",
    description: "Find out where a GitHub Actions build loses time. Cadence reads workflow history, estimates recoverable minutes, and links each finding to the runs behind it.",
    tools: ["Python", "GitHub Actions", "GitHub API"],
    code: github + "cadence-ci",
  },
];

export const selectedProjects = [
  { name: "FraudSight AI", category: "Computer vision", description: "Our Databricks hackathon-winning project separates visual forensics from the final vote. Three independent critics review evidence from insurance images, documents, and video.", code: github + "multimodal-fraud-detector" },
  { name: "ReproGate", category: "AI infrastructure", description: "Binds an MCP tool approval to its arguments and workspace state. Each execution produces a signed receipt that can be verified independently.", code: github + "mcp-repro-gate" },
  { name: "Passmark", category: "Document workflows", description: "Built a two-stage workflow that plans an edit before rewriting an uploaded document. Guardrails keep each change grounded in the original, and LiteLLM routes requests across models." },
  { name: "QuantServe", category: "LLM inference", description: "Estimates GPU memory needs and token latency so engineers can compare model deployment configurations before committing hardware.", code: github + "quantserve" },
];

export const archiveProjects = [
  { name: "Supplier Intelligence Platform", description: "Stream supplier telemetry through Kafka and Airflow, detect defects at the edge, and investigate incidents with a root-cause analysis agent.", code: github + "supplier-intelligence-platform" },
  { name: "Real-Time Speech-to-Speech Translation", description: "A concurrent pipeline that detects speech, translates it, and synthesizes audio.", code: github + "speech2speech_Translate" },
  { name: "Financial Data Provider Benchmark", description: "A comparative analysis of major financial data providers.", code: github + "major-financial-data-providers-comparative-analysis" },
  { name: "Resume Autofill Pro", description: "A browser extension that fills application forms from résumé data.", code: github + "Autofill-Extension" },
  { name: "Diabetic Retinopathy Classification", description: "A distributed image-processing and classification pipeline for fundus photographs.", code: github + "Diabetic-Retinopathy-Severity-Classification" },
  { name: "AI-Powered Career Advisor", description: "An AWS Bedrock application that uses retrieval to ground career recommendations.", code: github + "career-advisor_path-finder" },
  { name: "CrediSync", description: "A private hospital credentialing project that extracts data from documents and maps it to forms." },
  { name: "Multimodal Twitter Sentiment Analysis", description: "A comparison of neural and classical sentiment models across 1.6 million tweets.", code: github + "Multimodal-Twitter-Sentiment-Analysis" },
  { name: "Neural Image Compressor", description: "Experiments in learned compression for images and video.", code: github + "Neural-Image-Compressor" },
];

export const contributions = [
  { project: "Arize Phoenix", id: 15683, url: "https://github.com/Arize-ai/phoenix/pull/15683", text: "Preserved tool choices and strict settings when the playground sends requests to Anthropic and Amazon Bedrock." },
  { project: "NVIDIA / numba-cuda-mlir", id: 307, url: "https://github.com/NVIDIA/numba-cuda-mlir/pull/307", text: "Fixed a compiler conversion that could turn a nonzero floating-point value into false." },
  { project: "SQLFluff", id: 8420, url: "https://github.com/sqlfluff/sqlfluff/pull/8420", text: "Added grammar for Snowflake alert statements so SQLFluff can parse and lint them." },
];
