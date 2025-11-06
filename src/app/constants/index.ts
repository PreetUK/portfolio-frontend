export interface Service {
  title: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// 👤 YOUR SERVICES
export const services: Service[] = [
  {
    title: "Full-Stack Developer",
    icon: "https://cdn-icons-png.flaticon.com/512/1336/1336494.png",
  },
  {
    title: "Backend Developer",
    icon: "https://cdn-icons-png.flaticon.com/512/2621/2621040.png",
  },
  {
    title: "Frontend Developer",
    icon: "https://cdn-icons-png.flaticon.com/512/1197/1197460.png",
  },
  {
    title: "Angular Developer",
    icon: "https://cdn-icons-png.flaticon.com/512/2092/2092662.png",
  },
];

// 💻 YOUR COMPLETE TECH STACK (Using Font Awesome Icons)
// 💻 YOUR COMPLETE TECH STACK (Using Font Awesome Icons)
export const technologies: Technology[] = [
  {
    name: "Java",
    icon: "fab fa-java",
  },
  {
    name: "Spring Boot",
    icon: "fas fa-leaf",
  },
  {
    name: "Angular",
    icon: "fab fa-angular",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
  },
  {
    name: "MySQL",
    icon: "fas fa-database",
  },
  {
    name: "HTML5",
    icon: "fab fa-html5",
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
  },
  {
    name: "Bootstrap",
    icon: "fab fa-bootstrap",
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
  },
  {
    name: "Python",
    icon: "fab fa-python",
  },
  {
    name: "GitHub",
    icon: "fab fa-github",
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
  },
];

// 💼 YOUR WORK EXPERIENCE
export const experiences: Experience[] = [
  {
    title: "Java Developer Intern",
    company_name: "InnoByte Services Pvt. Ltd.",
    icon: "https://cdn-icons-png.flaticon.com/512/3281/3281289.png",
    iconBg: "#383E56",
    date: "Aug 2025 - Oct 2025",
    points: [
      "Built an Online Quiz Application using Java, Spring Boot, and MySQL with full-stack implementation.",
      "Developed REST APIs for user authentication, quiz handling, scoring, and progress tracking.",
      "Implemented role-based access control (admin/user) with Spring Security for enhanced security.",
      "Integrated frontend-backend flows seamlessly and ensured smooth user experience.",
      "Managed version control using Git, participated in code reviews, and followed agile development practices.",
    ],
  },
];

// 🎓 YOUR TESTIMONIALS (You can customize or remove)
export const testimonials: Testimonial[] = [
  {
    testimonial: "Prit is an exceptional developer with strong problem-solving skills and a great work ethic!",
    name: "Senior Developer",
    designation: "Team Lead",
    company: "InnoByte Services",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial: "His dedication to learning and implementing new technologies is truly impressive.",
    name: "Tech Mentor",
    designation: "CTO",
    company: "Tech Corp",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial: "Delivered high-quality code consistently and collaborated effectively with the team.",
    name: "Project Manager",
    designation: "PM",
    company: "Innovation Labs",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

export const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};
export interface Tag {
  name: string;
  color: string;
}

export interface ProjectData {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
  live_link?: string;
}

export const projects: ProjectData[] = [
  {
    name: "Online Quiz Application",
    description: "Full-stack web application using Spring Boot, MySQL, and Bootstrap. Implemented Spring Security with role-based access, automated scoring engine with real-time analytics, and admin dashboard for quiz performance monitoring.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "REST API", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/PreetUK/online-quiz-application",
  },
  {
    name: "Prekart E-Commerce Application",
    description: "Full-stack e-Commerce platform using Spring Boot, Hibernate, and MySQL with product management, user authentication, shopping cart functionality, and secure checkout workflows. Implemented RESTful APIs and role-based access control.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Hibernate", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "REST API", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/PreetUK/prekart-ecommerce",
  },
  {
    name: "Portfolio Website",
    description: "Modern portfolio website built with Angular 18, Spring Boot, and MySQL. Features 3D animations with Three.js, GSAP animations, responsive design, and integrated contact form with backend API.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "Three.js", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/PreetUK/portfolio",
  },
];
export interface Education {
  degree: string;
  institution: string;
  date: string;
  icon: string;
  iconBg: string;
  points: string[];
}
export interface Education {
  degree: string;
  institution: string;
  date: string;
  icon: string;
  iconBg: string;
  points: string[];
}

export const education: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Technology",
    institution: "Government Polytechnic Solapur",
    date: "2021 - 2025",
    icon: "assets/company/education-icon.png",
    iconBg: "#383E56",
    points: [
      "CGPA: 7.0/10",
      "Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development",
      "Full Stack Java Development Certification from Symbiosis Capgemini (2025)",
      "Active participant in coding competitions and hackathons",
    ],
  },
  {
    degree: "Class 12th Maharashtra Board",
    institution: "Your School Name",
    date: "2021",
    icon: "assets/company/school-icon.png",
    iconBg: "#E6DEDD",
    points: [
      "Percentage: 89/100",
      "Strong foundation in Mathematics and Science",
    ],
  },
];