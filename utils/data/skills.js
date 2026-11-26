// "Cargo Manifest" — grouped skills. `heavy: true` renders a dark, weighted crate.
export const skillGroups = [
  {
    name: 'LANGUAGES',
    crates: [
      { label: 'Python', heavy: true },
      { label: 'SQL' },
      { label: 'R' },
      { label: 'Bash / Zsh' },
      { label: 'C / C++ (foundational)' },
      { label: 'Java' },
      { label: 'MATLAB' },
    ],
  },
  {
    name: 'MACHINE LEARNING & DEEP LEARNING',
    crates: [
      { label: 'PyTorch', heavy: true },
      { label: 'TensorFlow', heavy: true },
      { label: 'Keras' },
      { label: 'Scikit-learn' },
      { label: 'XGBoost' },
      { label: 'OpenCV' },
      { label: 'MediaPipe' },
      { label: 'Selenium' },
    ],
  },
  {
    name: 'DATA ENGINEERING & STORAGE',
    crates: [
      { label: 'Spark / PySpark', heavy: true },
      { label: 'Pandas' },
      { label: 'NumPy' },
      { label: 'MySQL' },
      { label: 'MongoDB' },
    ],
  },
  {
    name: 'AI, CLOUD & TOOLING',
    crates: [
      { label: 'AWS — SageMaker · Bedrock · EC2 · S3 · Glue', heavy: true },
      { label: 'Azure' },
      { label: 'GCP' },
      { label: 'LangChain' },
      { label: 'Docker' },
      { label: 'Git' },
      { label: 'Django' },
      { label: 'Streamlit' },
      { label: 'Linux' },
    ],
  },
];

// Flat list kept for any consumer that still wants a simple array.
export const skillsData = skillGroups.flatMap((g) => g.crates.map((c) => c.label));
