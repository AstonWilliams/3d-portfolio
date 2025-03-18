import {
  mobile,
  backend,
  creator,
  web,
  AI,
  dotnet,
  django,
  css,
  reactjs,
  java,
  tailwind,
  indesign,
  python,
  git,
  figma,
  docker,
  meta,
  jinx,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  BLOG,
  Finance,
  fastapi,
  SCRAP,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Fastapi Developer",
    icon: backend,
  },
  {
    title: "Social Media Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "django 5",
    icon: django,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "AI",
    icon: AI,
  },
  {
    name: "dotnet",
    icon: dotnet,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "java Toolkit",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: indesign,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: fastapi,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Django Developer",
    company_name: "Independently published",
    icon: jinx,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed an AI-powered social media platform using Django and Python, integrating live news articles, weather forecasts, and user feeds.",
      "Implemented AI-driven room management for censoring harmful messages and conflict resolution.",
      "Enhanced user experience with personalization features like avatar generation.",
      "Collaborated with designers and developers to ensure a seamless and engaging platform.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Arslan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Arslan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Arslan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Finance Api",
    description:
      "This is a REST Api designed using FastAPI fetches reliable stock news both numerical data and news articles from renowned web sources such as yahoo finance and PR news etc.",
    tags: [
      {
        name: "FastApi",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: Finance,
    source_code_link: "https://github.com/AstonWilliams/Finance-Api",
  },
  {
    name: "Ai blog generation django api",
    description:
      "AI-Powered News Portal, built on Django, generates live news articles on trending topics. Leveraging AI technology, the portal fetches live data from Google Trends to ensure real-time updates",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: BLOG,
    source_code_link: "https://github.com/AstonWilliams/AI_NEWS_PORTAL",
  },
  {
    name: "powerful web scraping scripts",
    description:
      "Collection of Automated Aggressive Scraping scripts for both dataset creation and data analysis",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: SCRAP,
    source_code_link: "https://github.com/AstonWilliams/SCRAP/",
  },
];

export { services, technologies, experiences, testimonials, projects };
