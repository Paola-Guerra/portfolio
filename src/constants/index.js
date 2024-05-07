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
    php,
    tailwind,
    symfony,
    aframe,
    git,
    githu,
    docker,
    comillas,
    alien,
    totoro,
    nextmusic,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
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
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Symfony",
      icon: symfony,
    },
    {
      name: "Aframe",
      icon: aframe,
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
      name: "githu",
      icon: githu,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: comillas,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: comillas,
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
      icon: comillas,
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
      icon: comillas,
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
  
 
  const projects = [
    {
      name: "Alien Attack",
      description:
        "This project combines A-Frame technology with 3D objects and JavaScript to create an immersive experience where users witness the abduction of a cow by extraterrestrial beings. At the end of the experience, through a button you enter a game where you shoot and keep a count of how many planets you have destroyed.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "a-frame",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: alien,
      source_code_link: "https://github.com/Paola-Guerra/Alien-Attack",
    },
    {
      name: "Api Studio Ghibli",
      description:
        "Create an API using HTML and JavaScript to display Studio Ghibli movies with custom cards. Incorporate a surprise modal for a unique experience and personalize some cards from the first three films to add a special touch. This application allows you to explore Ghibli films in an interactive and fun way, providing a unique experience to users.",
      tags: [
        {
          name: "html/javascript",
          color: "blue-text-gradient",
        },
        {
          name: "vercel/json",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: totoro,
      source_code_link: "https://github.com/Paola-Guerra/API-Studio-Ghibli",
    },
    {
      name: "NextMusic",
      description:
        "Is an minimalism aesthetically pleasing and responsive web music application built using Next.js, Tailwind CSS, Spotify and the Unsplash API. This project combines the power of Next.js for efficient server-side rendering, Tailwind CSS for a sleek and responsive design, and the Unsplash API for accessing a vast collection of high-quality images. Additionally, the project leverages Daisy UI components to enhance the user interface and deliver a seamless user experience. Next-play",
      tags: [
        {
          name: "react/nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nextmusic,
      source_code_link: "https://github.com/Paola-Guerra/nextmusic",
    },
  ];
  
  export { services, technologies, experiences,  projects };