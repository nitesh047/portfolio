export const person = {
  name: "Nitesh Saini",
  jobTitle: "AI/ML Engineer",
  email: "niteshsaini5112001@gmail.com",
  url: "https://niteshsaini.com",
  github: "https://github.com/nitesh047",
  linkedin: "https://linkedin.com/in/nitesh-saini-80893b1a0",
  alumniOf: "Indian Institute of Technology Delhi",
  worksFor: {
    name: "Bharti Institute of Public Policy (BIPP), Indian School of Business",
    shortName: "BIPP",
  },
};

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  status: "shipped" | "in-progress";
  summary: string;
};

// NOTE: nCount, VanSaathi/CommFor, and RatiFi entries below use
// placeholder metrics/summaries — fill these in once those project
// details are mapped out, then flesh out matching MDX case studies
// in app/work/[slug]/content/.
export const projects: Project[] = [
  {
    slug: "monodbh",
    name: "MonoDBH",
    oneLiner:
      "YOLOv8s-seg instance segmentation pipeline for automated structural counting.",
    metrics: [
      { label: "Mask mAP50", value: "0.953" },
      { label: "Model", value: "YOLOv8s-seg" },
    ],
    stack: ["YOLOv8", "PyTorch", "OpenCV", "AWS EC2"],
    status: "shipped",
    summary:
      "An instance-segmentation pipeline built on YOLOv8s-seg for automated detection and counting, tuned for high mask precision in production inference conditions.",
  },
  {
    slug: "barkvisionai",
    name: "BarkVisionAI",
    oneLiner:
      "156,001-image benchmark dataset for bark/tree-species vision models, published in Nature Scientific Data.",
    metrics: [
      { label: "Images", value: "156,001" },
      { label: "Venue", value: "Nature Sci. Data" },
    ],
    stack: ["Grounding DINO", "SAM2", "Python", "AWS S3"],
    status: "shipped",
    summary:
      "A large-scale annotated image dataset built with a Grounding DINO + SAM2 labeling pipeline, published as a peer-reviewed dataset paper in Nature Scientific Data.",
  },
  {
    slug: "ncount",
    name: "nCount",
    oneLiner: "Computer-vision counting system — details in progress.",
    metrics: [{ label: "Status", value: "TBD" }],
    stack: ["YOLOv8"],
    status: "in-progress",
    summary:
      "Case study pending — metrics and system design details to be added.",
  },
  {
    slug: "vansaathi-commfor",
    name: "VanSaathi / CommFor",
    oneLiner: "Geospatial pipeline project — details in progress.",
    metrics: [{ label: "Status", value: "TBD" }],
    stack: ["Geospatial", "AWS Lambda"],
    status: "in-progress",
    summary:
      "Case study pending — metrics and system design details to be added.",
  },
  {
    slug: "ratifi",
    name: "RatiFi",
    oneLiner: "RAG-based system — details in progress.",
    metrics: [{ label: "Status", value: "TBD" }],
    stack: ["RAG", "pgvector"],
    status: "in-progress",
    summary:
      "Case study pending — metrics and system design details to be added.",
  },
];

export type Publication = {
  title: string;
  venue: string;
  status: "published" | "submitted" | "in-prep";
  year: string;
  link?: string;
};

export const publications: Publication[] = [
  {
    title: "BarkVisionAI: a 156,001-image dataset for bark/tree-species recognition",
    venue: "Nature Scientific Data",
    status: "published",
    year: "2025",
  },
  {
    title: "A GNSS positioning dataset for [survey area] — targeting GPS Solutions",
    venue: "GPS Solutions",
    status: "in-prep",
    year: "2026",
  },
  {
    title: "Evaluations & Datasets submission",
    venue: "NeurIPS 2026",
    status: "submitted",
    year: "2026",
  },
];

export const nav = [
  { href: "/", label: "index" },
  { href: "/work", label: "work" },
  { href: "/publications", label: "publications" },
  { href: "/about", label: "about" },
  { href: "/resume", label: "resume" },
];
