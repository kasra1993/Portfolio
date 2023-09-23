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
    title: `Reactjs  Nextjs`,
    icon: web,
  },
  {
    title: "Tailwindcss Bootstrap Material UI  Sass",
    icon: creator,
  },
  {
    title: "Nodejs  Expressjs",
    icon: backend,
  },
  {
    title: "Mongodb  Sql",
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
    company_name: "Security Camera Vendor / Anabin Securities",
    icon: Freelancer,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Developing websites using various frameworks and programming Technologies including Typescript , Reactjs , Nodejs , Nextjs(v13) , Vite / Webpack , Mongodb , Expressjs , ReactQuery , Jest ,  Websocket , SocketIo , Mongoose , Redux Toolkit , Docker , Git / Github , Threejs , React Fiber , Framer Motion ",
      "conducting market research and performing data analysis",
      "Experience in Firebase and Vercel for Hosting Static Developments",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Staying up-to-date with emerging trends and technologies in web development",
      "Experiencing OOP and design patterns and Test-Driven Development",
      "Increasing performance and engagement via using PWA ",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Myzel",
    icon: myzelLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - 2023",
    points: [
      "Completely changing the User interface along with integrating new functionalities both in Frontside and on the server side.",
      "Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.",
      "Optimized the Class Component code to the highest universal MERN standards",
      "Experienced Working with cloud technologies such as AWS and Azure.",
      "Implementing and managing CI/CD pipelines",
      "Implementing of RESTful API design and development.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company_name: "HillzDealer Co",
    icon: Hillzlogo,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Meeting with the development team to discuss user interface ideas and applications.",
      "Developing and implementing highly responsive user interface components using react concepts.",
      "Documenting application changes and developing updates using version control system of GIT.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Design and develop new custom components to meet project requirements.",
    ],
  },
  {
    title: "Frontend Developer Internship",
    company_name: "Chaadko CO",
    icon: Hillzlogo,
    iconBg: "#E6DEDD",
    date: " 2018 -  2019",
    points: [
      "Build reusable components and front-end libraries for future use",
      "Working with CSS (Bootstrap)",
      "responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library.",
      "Address and improve any technical issues",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "With Mr Mahsouli's help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain.",
    name: "Mr Sharifi",
    designation: "CFO",
    company: "Myzel (Raamak)",
    image: User,
  },
  {
    testimonial:
      "We had high expectations for the visual look and functionality of Sweetheartmotor.com and they met and exceeded our expectations. We look forward to working with them in the near future on another project.",
    name: "Mr Riahi",
    designation: "CEO",
    company: "HillzDealer",
    image: User,
  },
  {
    testimonial:
      "It was a pleasure working with Mr mahsouli , his Professionalism and the ability to stick to a specific deadline given the amount of work , exceeded our expectations in every way .  ",
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
