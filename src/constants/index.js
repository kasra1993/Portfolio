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
  myzelImage,
  User,
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
    title: ["Nodejs", "Expressjs"],
    icon: backend,
  },
  {
    title: ["Mongodb", "Sql"],
    icon: mobile,
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
    title: "Mern Stack",
    company_name: "Security Camera Vendor / Anabon Securities inc.",
    icon: Freelancer,
    iconBg: "#383E56",
    date: "March, 2023 - Present (Ongoing Project)",
    points: [
      "Developed websites using various frameworks and programming Technologies including Typescript, Reactjs, Nodejs, Nextjs(v13), Vite / Webpack, Mongodb, Expressjs, ReactQuery, Jest,  Websocket, SocketIo, Mongoose, Redux Toolkit, Docker, Git / Github, Threejs, React Fiber, Framer Motion ",
      "Used Jenkins to automate build and deployment that reduced human error and sped up production processes.",
      "Used github actions as CI/CD pipeline along with Docker Compose for container managment tool ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked with development, testing and deployment tools such as  Git, Github Actions, Gitlab CI CD, Docker, Docker compose and Kubernetes based on project needs and scale .",
      "Experience in using Nagios and Prometheus as Server monitoring tools and Terraform and Ansible for infrastructure setup and configuration.",
      "Increasing performance and engagement via using PWA ",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Myzel inc.",
    icon: myzelLogo,
    iconBg: "#E6DEDD",
    date: "January, 2020 - March, 2023",
    points: [
      "The transformation from Junior Frontend Developer to Junior Fullstacker with access to handle the Automation process of CI CD pipelines on Linux VPS Server and AWS Cloud Server.",
      "Completely changed the User interface along with integrating new functionalities both in Frontside and on the server side.",
      "Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.",
      "Optimized the Class Component code to the highest universal MERN standards",
      "Reduced pages load times from 7-10s to 3-7s by implementing Server side Rendering , Storage Optimization and memoization .",
      "Worked on Continuous Delivery system that led to improvement in ship time by 25%.",
      "Reduced IT Department costs by 30% by eliminating unnecessary servers , minimizing workload put upon remaining servers.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "HillzDealer inc.",
    icon: Hillzlogo,
    iconBg: "#383E56",
    date: "July, 2019 - January, 2020",
    points: [
      "Met with the development team to discuss user interface ideas and applications.",
      "Developed and implementing highly responsive user interface components using react concepts.",
      "Documented application changes and developing updates using version control system of GIT.",
      "Participated in code reviews and providing constructive feedback to other developers.",
      "Design and develop new custom components to meet project requirements.",
    ],
  },
  {
    title: "Frontend Developer Internship",
    company_name: "Chaadko inc.",
    icon: Hillzlogo,
    iconBg: "#E6DEDD",
    date: " Augest, 2018 -  April, 2019",
    points: [
      "Built reusable components and front-end libraries for future use",
      "Worked with CSS (Bootstrap)",
      "Responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library.",
      "Addressed and improved any technical issues",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kasra has done a fantastic job overall. Throughout the entire process , his skills began to evolve and more responsibilities were assigned to him. It’s obvious he takes tremendous pride in his work, and I wouldn’t hesitate to recommend or work with him again.",
    name: "Mr Sharifi",
    designation: "CFO",
    company: "Myzel (Raamak)",
    image: User,
  },
  {
    testimonial:
      "Mr Mahsouli is an incredibly talented developer but what really made him stand out was his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients.",
    name: "Mr Riahi",
    designation: "CEO",
    company: "HillzDealer",
    image: User,
  },
  {
    testimonial:
      "It was a pleasure working with Mr mahsouli , his Professionalism and the ability to stick to a specific deadline given the amount of work , exceeded our expectations in every way .",
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
    name: "Raamak (Myzel Department)",
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
    image: myzelImage,
    source_code_link: "https://dev.myzel.ir",
  },
];

export { services, technologies, experiences, testimonials, projects };
