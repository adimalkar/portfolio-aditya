export const projectsData = [
    {
        id: 1,
        name: 'Real-Time Speech-to-Speech Translation',
        description: "Architected a low-latency, concurrent translation pipeline using producer-consumer model with Python threading, achieving ~2.8s pipeline depth. Integrated Whisper Medium for STT (4% WER) and MarianMT for translation, achieving BLEU scores of 80.85 (EN→ES) and 71.64 (EN→FR). Implemented custom VAD using Silero with <3ms frame latency and engineered hallucination filters.",
        tools: ['Python', 'PyTorch', 'Whisper', 'MarianMT', 'Meta MMS-TTS', 'Silero VAD', 'Threading'],
        role: 'ML Engineer',
        code: 'https://github.com/adimalkar/speech2speech_Translate',
        demo: '',
    },
    {
        id: 2,
        name: 'Diabetic Retinopathy Classification',
        description: 'Processed a large-scale image dataset (143,509 images, ~22GB) using Apache Spark with Azure Blob Storage for distributed access. Engineered a deep learning pipeline using custom VGG-16-based CNN, achieving 87%+ accuracy in identifying diabetic retinopathy severity levels. Reduced training time by 40% using Spark distributed compute.',
        tools: ['Python', 'Apache Spark', 'Azure Blob Storage', 'TensorFlow', 'VGG-16', 'TFRecords', 'Deep Learning'],
        role: 'Data Scientist',
        code: 'https://github.com/adimalkar/Diabetic-Retinopathy-Severity-Classification',
        demo: '',
    },
    {
        id: 3,
        name: 'AI-Powered Career Advisor',
        description: 'Architected an autonomous chatbot using LangChain, AWS Bedrock (Claude V2), and Streamlit with Agentic AI concepts like goal-seeking and tool-use. Developed a RAG pipeline that increased response relevance by 40% by integrating external career data. Designed an alignment & safety framework that reduced model hallucinations by 75%.',
        tools: ['LangChain', 'AWS Bedrock', 'Claude V2', 'Streamlit', 'RAG', 'Python', 'Agentic AI'],
        code: 'https://github.com/adimalkar/career-advisor_path-finder',
        role: 'AI Engineer',
        demo: '',
    },
    {
        id: 4,
        name: 'MultiModal Twitter Sentiment Analysis',
        description: "Preprocessed 1.6 million tweets using tokenization, stopword removal, and stemming. Implemented deep learning pipeline using Sequential Model with Embedding, Conv1D, MaxPooling1D, and LSTM layers, achieving 85%+ accuracy. Compared SVM, Decision Tree, Bi-LSTM, and BART models, achieving 12-18% higher F1-score with deep learning approaches.",
        tools: ['Python', 'Keras', 'TensorFlow', 'LSTM', 'BERT', 'NLP', 'Deep Learning'],
        code: 'https://github.com/adimalkar/Multimodal-Twitter-Sentiment-Analysis',
        demo: '',
        role: 'ML Engineer',
    },
    {
        id: 5,
        name: 'AI Agent for Automated Credentialing',
        description: 'Developed CrediSync, a multi-agent automation system for hospital credentialing, reducing manual form-filling time by ~90%. Engineered dual-agent architecture with LangChain: Parser Agent extracted 15+ key entities from PDFs, Form Filler Agent achieved 100% field mapping accuracy. Built custom Chrome extension for one-click auto-filling.',
        tools: ['AWS (RDS, EC2)', 'LangChain', 'React', 'Node.js', 'Python', 'OpenAI API'],
        code: '',
        demo: '',
        role: 'Full Stack AI Developer',
    },
    {
        id: 6,
        name: 'Neural Image Compressor',
        description: 'Working on Neural Data Compression for Images and Videos, exploring state-of-the-art deep learning techniques for efficient media compression while maintaining quality. Building foundation in AWS cloud services for scalable deployment.',
        tools: ['Python', 'PyTorch', 'Deep Learning', 'Computer Vision', 'AWS'],
        code: 'https://github.com/adimalkar/Neural-Image-Compressor',
        demo: '',
        role: 'ML Researcher',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },
