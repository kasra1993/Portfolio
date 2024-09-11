import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  Raamak,
  Anabon,
  Sweetheart,
  Hillzlogo,
  Freelancer,
  myzelLogo,
  User,
  dijunoImage,
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
    title: ["Reactjs", "Nextjs"],
    icon: web,
  },
  {
    title: ["Tailwindcss", "Bootstrap", "Material UI", "Sass"],
    icon: creator,
  },
  {
    title: ["Typescript", "Javascript"],
    icon: mobile,
  },
  {
    title: ["Nodejs", "Expressjs", "Mongodb", "Sql"],
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    title: "Senior Frontend Developer (Remote)",
    company_name: "Interrodata Ltd. (Dijuno)",
    icon: Freelancer,
    iconBg: "#383E56",
    date: "January, 2024 - Present",
    points: [
      "Collaborating closely with backend developers and data scientists to understand data structures and requirements, ensuring seamless integration and accurate representation of data on the front end",
      "Developing and maintaining React.js applications to efficiently display data-driven charts derived from backend processes, enhancing clients' understanding of their business metrics.",
      "Collaborating with cross-functional teams in an Agile environment, participating in weekly and bi-monthly meetings to review project progress, discuss challenges, and ensure alignment with company objectives.",
      "Utilizing a stack comprising Amplitude, Material UI, Fuse.js, Plotly, pptxgen, Redux, and integrating backend technologies such as AWS and Airflow to optimize data visualization and user experience.",
    ],
  },
  {
    title: "FullStack Developer with Focus on Front",
    company_name: "Security Camera Vendor / Anabon Securities inc.",
    icon: Freelancer,
    iconBg: "#383E56",
    date: "Aug, 2020 - January 2023",
    points: [
      "Led the development of dynamic web applications using TypeScript, Next.js (v13), and Node.js, ensuring high performance and scalability. Configured Vite for optimized delivery, and leveraged React Query for efficient data fetching.",
      "Built and maintained robust backend services with Express.js, MongoDB, and Mongoose, including real-time features us.",
      "Enhanced user interfaces with Three.js, React Fiber, and Framer Motion, delivering visually immersive and interactive experiences. Implemented testing strategies with Jest for high code quality.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Rierco Rubber Research Company",
    icon: Freelancer,
    iconBg: "#E6DEDD",
    date: "March, 2023 - December, 2023",
    points: [
      "Spearheaded a comprehensive overhaul of the user interface, seamlessly integrating new functionalities on both the frontend and server sides to enhance user experience.",
      "Engaged in project planning, scheduling, and design discussions, actively contributing insights and providing support throughout the testing phase.",
      "Implemented rigorous optimizations to elevate Class Component code to meet universal MERN standards, ensuring optimal performance and maintainability.",
      "Significantly improved page load times from 7-10 seconds to 3-7 seconds by employing advanced techniques such as server-side rendering, storage optimization, and memoization.",
      "Collaborated on the development and implementation of a Continuous Delivery system, resulting in a 25% enhancement in shipment efficiency.",
      "Achieved a remarkable 30% reduction in IT Department costs by strategically eliminating unnecessary servers and redistributing workloads to optimize resource utilization.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "HillzDealer inc.",
    icon: Hillzlogo,
    iconBg: "#383E56",
    date: "February, 2018 - June, 2020",
    points: [
      "Collaborated with the development team to brainstorm and refine user interface concepts and applications, ensuring alignment with project objectives and user needs.",
      "Designed and implemented highly responsive user interface components using React concepts, enhancing user experience and interface functionality.",
      "Documented application changes and managed updates utilizing Git version control system, ensuring accurate tracking of modifications and facilitating seamless collaboration among team members.",
      "Engaged in code reviews, offering valuable insights and constructive feedback to fellow developers, fostering a collaborative and quality-driven development environment.",
      "Designed and developed bespoke components to address specific project requirements, contributing to the creation of tailored solutions that align with project goals and user expectations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " I am confident that Mr. Kasra Mahsouli's combination of technical expertise, professionalism, and strong interpersonal skills will make him an invaluable asset to any team. I highly recommend him for any opportunity he pursues and believe that his future is very bright in the field of web development.",
    name: "Mr Amin Azarbadegan",
    designation: "Director",
    company: "Bentoak Systems (Interrodata / Dijuno)",
    image: User,
  },
  {
    testimonial:
      "Kasra's commitment to excellence is evident in his work ethic and the quality of his deliverables, I highly recommend Kasra for any development project.",
    name: "Mr Riahi",
    designation: "CEO",
    company: "HillzDealer",
    image: User,
  },
  {
    testimonial:
      "It was a pleasure working with Mr Mahsouli, his Professionalism and the ability to stick to a specific deadline given the amount of work, exceeded our expectations in every way.",
    name: "Fred Lim",
    designation: "Regional Business Development Manager",
    company: "Anabon Securities",
    image: User,
  },
];

const projects = [
  {
    name: "Car Dealership",
    description:
      "Mern based platform that allows users to search, book, and manage car rentals and purchasing , providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Sweetheart,
    source_code_link: "https://sweetheartmotor.com/",
  },
  {
    name: "Security Camera Vendor (Anabon Securities)",
    description:
      "A new branch provided for leading distributor of security products with over 30 years of experience within the security industry",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next 13",
        color: "green-text-gradient",
      },
      {
        name: "Node (Express)",
        color: "pink-text-gradient",
      },
    ],
    image: Anabon,
    source_code_link: "https://anabon.com/",
  },
  {
    name: "Interrodata Ltd. (Dijuno product)",
    description:
      "An Ecommerce Mern based platform enabling users to select and purchase goods and have them delievered",
    tags: [
      {
        name: "Mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: dijunoImage,
    source_code_link: "https://www.dijuno.ai/",
  },
];

export { services, technologies, experiences, testimonials, projects };
