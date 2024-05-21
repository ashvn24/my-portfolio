import {
  linkedin,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  brototype,
  graduate,
  django,
  jenkins,
  postgres,
  ruby,
  colab,
  inventory,
  file,
  pass,
  anam,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id:"project",
    title:"Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PostgreSql",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Jenkins",
    icon:  jenkins,
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
    title: "Computer Science Engineering",
    company_name: "SDIT, Mangalore",
    icon: graduate,
    iconBg: "#383E56",
    date: "sept 2022",
    points: [
      "Mastered the basics of web development, gaining proficiency in HTML, CSS, JavaScript, and Python.", 
      "Acquired knowledge of data structures and algorithms.",
      "Demonstrated skills in React.js by successfully developing an E-learning web application.",
      "Completed an internship focusing on machine learning and deep learning technologies.",
    ],
  },
  {
    title: "Django full Stack Developer with React.js",
    company_name: "Brototype",
    icon: brototype,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Feb 2024",
    points: [
      "Developing and maintaining web applications using Django REST api and React js.",
      "Self-learned and proficiently utilized various tools to independently create two major projects, along with several mini-projects, showcasing versatility and adaptability.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed high communication skills, facilitating effective collaboration and communication within the team."
    ],
  },
  
];



const projects = [
  {
    name: "RUBY Jwellers",
    description:
    "Developed an intuitive eCommerce website with secure login, seamless product search, and efficient order placement for an enhanced online shopping experience.",
      tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ruby,
    source_code_link: "https://github.com/ashvn24/RUBY.git",
  },
  {
    name: "COLAB",
    description:
    "Colab- Simplifying content creation, it enables seamless file sharing, real-time communication, and automated YouTube uploads. ",
      tags: [
      {
        name: "Django REST",
        color: "blue-text-gradient",
      },
      {
        name: "Celery",
        color: "red-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: colab,
    source_code_link: "https://github.com/ashvn24/CoLab-backend.git",
  },
  {
    name: "Inventory Management",
    description:
    "Features include stock, order, and user management, Celery automation, JWT authentication, Docker deployment, and tested APIs for reliability.",
      tags: [
      {
        name: "Django REST",
        color: "blue-text-gradient",
      },
      {
        name: "Celery",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      
    ],
    image: inventory,
    source_code_link: "https://github.com/ashvn24/Inventory_management.git",
  },
  {
    name: "File Management",
    description:
    "File Management System offers efficient organization and deployment. Manage folders and files seamlessly, simplifying workflow with Docker integration.",
      tags: [
      {
        name: "Django REST ",
        color: "blue-text-gradient",
      },
      {
        name: "Signals",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      
    ],
    image: file,
    source_code_link: "https://github.com/ashvn24/file_managemet_app.git",
  },
  {
    name: "Password Generator",
    description:
    "React frontend and Django REST backend collaborate to generate personalized, 12-digit strong passwords, ensuring security and customization.",
      tags: [
      {
        name: "Django REST",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      
    ],
    image: pass,
    source_code_link: "https://github.com/ashvn24/password-backend.git",
  },
  {
    name: "Appointment Booking",
    description:
    "Developed a sleek appointment booking website for a salon business, enabling live bookings and efficient user management. Deployed on AWS.",
      tags: [
      {
        name: "Django REST",
        color: "blue-text-gradient",
      },
      {
        name: "Celery",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      
    ],
    image: anam,
    source_code_link: "https://github.com/ashvn24/An_amis-freelance.git",
  },
  
];

export { services, technologies, experiences, projects };
