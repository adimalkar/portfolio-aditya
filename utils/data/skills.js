export const skillGroups = [
  { name: "Retrieval & agents", tools: ["LangGraph", "LangChain", "BM25", "pgvector", "LiteLLM"] },
  { name: "Machine learning", tools: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "MLflow"] },
  { name: "Backend & infrastructure", tools: ["Python", "FastAPI", "PostgreSQL", "Kafka", "AWS Bedrock", "Docker"] },
];
export const skillsData = skillGroups.flatMap(group => group.tools);
