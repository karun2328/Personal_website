export interface Skill {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Project {
  title: string;
  type: string;
  bullets: string[];
  technologies?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  graduationDate: string;
  gpa?: string;
}

export interface Resume {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  skills: Skill[];
  experience: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
}

export const resume: Resume = {
  name: "Purna Satya Karun Saride",
  title: "ML Systems Engineer | LLM Inference & Deployment",
  location: "USA",
  phone: "+1 (775) 300-9330",
  email: "purnasatyakarunsaride.24s@gmail.com",
  linkedin: "https://www.linkedin.com/in/karun-saride-57284b349/",
  github: "https://github.com/karun2328",
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "C", "C++", "SQL", "JavaScript (ES6+)"],
    },
    {
      category: "GPU & Systems Programming",
      items: [
        "CUDA programming",
        "CUDA kernel development",
        "GPU memory hierarchy",
        "Latency and throughput tradeoffs",
        "Profiling & debugging",
      ],
    },
    {
      category: "ML and LLM Systems",
      items: [
        "LLM inference",
        "Inference latency and throughput",
        "Batching",
        "Tokenization",
        "Hugging Face Transformers",
        "Embedding optimization",
        "RAG pipelines",
        "FAISS",
        "Chunking strategies",
        "Vector databases",
      ],
    },
    {
      category: "Systems & Deployment",
      items: [
        "Docker",
        "REST-based inference APIs",
        "AWS (EC2, S3, Lambda)",
        "CI/CD (GitHub Actions)",
        "Concurrency handling",
        "Profiling and debugging",
        "RunPod",
      ],
    },
    {
      category: "Data & Storage",
      items: [
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "Schema design",
        "Structured and semi-structured data",
      ],
    },
    {
      category: "Tools & Frameworks",
      items: [
        "FastAPI",
        "LangChain",
        "Git",
        "GitHub",
        "Linux",
        "API testing (Postman)",
      ],
    },
  ],
  experience: [
    {
      company: "Saatvik Advisors",
      position: "AI Systems Engineer",
      location: "USA",
      startDate: "Aug 2025",
      endDate: "Dec 2025",
      bullets: [
        "Built production-oriented data pipelines to support LLM-based inference workflows over structured and semi-structured system logs, eliminating over 85% of manual preprocessing.",
        "Engineered deterministic complex keys across OSI layers (L3–L7) to enable reliable downstream ML inference and anomaly classification, reducing false-positive signals by 30%.",
        "Designed and optimized semantic retrieval paths using FAISS and transformer embeddings, achieving sub-second inference latency under realistic query loads.",
        "Applied tokenization-aware chunking and embedding optimization techniques to improve inference relevance and stability in retrieval-augmented ML systems.",
        "Collaborated with infrastructure and security stakeholders to align ML inference outputs with enterprise workflows, enabling traceable and explainable system-level decisions.",
      ],
    },
    {
      company: "Saatvik Advisors",
      position: "Network Data Engineer",
      location: "USA",
      startDate: "May 2025",
      endDate: "Aug 2025",
      bullets: [
        "Analyzed L3–L7 packet metadata to trace transport-layer behaviors impacting application-level system performance across 10K+ enterprise transactions.",
        "Classified TCP/IP behaviors (retransmissions, flow stalls, malformed segments) and mapped them to downstream service degradation observable by ML-driven monitoring systems.",
        "Designed structured metadata keys linking transport-layer signals to ServiceNow HRSD workflows, enabling ML assisted root-cause analysis and reducing troubleshooting time by 40%.",
        "Modeled normalized schemas to preserve end-to-end traceability between packet-level events and application outcomes, improving data integrity validation throughput by 2.5x.",
        "Partnered with cybersecurity and infrastructure teams to refine anomaly scoring logic used as input features for AI-assisted detection systems.",
      ],
    },
  ],
  projects: [
    {
      title: "Inference Runtime Optimization Pipeline",
      type: "Independent Project",
      technologies: ["PyTorch", "ONNXRuntime", "TensorRT"],
      bullets: [
        "Benchmarked transformer inference across PyTorch eager execution, ONNXRuntime CUDA, and TensorRT to analyze latency, throughput, and batching behavior on GPU and CPU.",
        "Implemented CPU INT8 dynamic quantization and evaluated precision vs performance trade-offs, identifying batch-size-dependent overhead effects.",
        "Achieved up to 2.5–8× GPU throughput improvement by eliminating Python runtime overhead via ONNX graph execution.",
        "Conducted hardware-aware analysis showing cases where CUDA outperform TensorRT due to GPU constraints, emphasizing empirical benchmarking over assumptions.",
      ],
    },
    {
      title: "High-Throughput LLM Inference Serving Benchmarking",
      type: "Independent Project",
      technologies: ["vLLM", "GPU"],
      bullets: [
        "Built and deployed a vLLM-based LLM inference server on NVIDIA L4 GPU, exposing OpenAI-compatible /v1/chat/completions APIs and validating GPU memory allocation, KV-cache behavior, and scheduling under load.",
        "Designed and executed systematic concurrency benchmarks (8 → 64 clients) to measure throughput saturation, request failure modes, and timeout behavior under fixed context windows (up to 4K tokens).",
        "Analyzed GPU memory residency and KV-cache pressure using nvidia-smi, correlating stable VRAM usage (~21 GB) with request failures caused by context-length overflow and batching constraints, not GPU OOM.",
        "Implemented custom load-testing scripts to quantify QPS collapse when input tokens exceeded model context limits, identifying preprocessing bottlenecks and request-level validation failures in vLLM.",
        "Investigated latency vs throughput trade-offs across varying prompt sizes (512–4096 tokens), demonstrating that higher concurrency did not increase QPS once batching limits were reached.",
        "Structured benchmark artifacts into reproducible scripts / results / benchmarks folders, enabling repeatable inference experiments and clean separation of execution, metrics, and analysis.",
      ],
    },
  ],
  education: [
    {
      institution: "University of Nevada, Reno",
      degree: "Master of Science in Computer Science",
      graduationDate: "Dec 2025",
      gpa: "3.87 / 4.00",
    },
    {
      institution: "Sasi Institute of Technology and Engineering",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      graduationDate: "May 2023",
      gpa: "3.20 / 4.00",
    },
  ],
};