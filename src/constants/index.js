
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Ui UX Designer",
  //   icon: creator,
  // },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Material Ui",
  //   icon: mui,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Express Js",
  //   icon: express,
  // },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "MySql",
  //   icon: mysql,
  // },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Teach2Grow",
    icon: tekisky,
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    points: [
     [
  "Built and customized responsive web pages within Graphy’s code structure using HTML, CSS, and JavaScript.",
  "Adapted quickly to unfamiliar code environments and workflows, demonstrating strong learning agility.",
  "Collaborated with the team to improve UI/UX and align implementations with modern design standards.",
  "Contributed to the development of heymentor.in, helping shape its frontend experience.",
]
,
    ],
  },
];

const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
//     name: "MD Mustaqeem",
//     designation: "Ecommerce",
//     company: "QuickMart",
//     image: firstTestimonial,
//   },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
  //   name: "Abdul Raheman",
  //   designation: "Ecommerce Business",
  //   company: "justbuyz",
  //   image: secondTestimonial,
  // },
  // {
  //   testimonial:
  //     "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "James Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: thirdTestimonial,
  // },
];

const projects = [
  {
    name: "NyayVoice",
    description:
      " AI-powered tool that helps users generate RTIs, FIRs, and complaints using text,voice or vernacular input",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "bhashini",
        color: "pink-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Health Dashboard",
    description:
      " A responsive health dashboard designed for early detection of mental and physical health issues. built using React and Tailwind, focusing on clean UI, data visualization, and user-friendly tracking features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "emailJs",
      //   color: "green-text-gradient",
      // },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio",
    description:
      "My personel portfolio built using ract and three js for 3d animations and gsap for smooth scrolling and animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three js",
        color: "white-text-gradient",
      },
      // {
      //   name: "node",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
    ],
    image: project3,
    source_code_link: "https://github.com/HimeshPant/Portfolio.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
