export const navLinks = [
    {
        id:1,
        name: 'Home',
        href: '#home'
    },
    {
        id:2,
        name:"About",
        href:"#about"
    },
    {
        id:3,
        name:"Projects",
        href:"#projects"
    },
    {
        id:4,
        name:"Contact",
        href:"#contact"
    }
]






//Responsive sizes
export const responsiveSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskRotation: isSmall ? [0.1,0,-0.01] : isMobile ? [0.1,0,-0.01] : [0.05,0,0],
      deskScale: isSmall ? 3.5 : isMobile ? 4.2 : 5,
      deskPosition: isMobile ? [0, -1, 0] : [0, -2, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [10,2, 0],
      roboBotPosition: isSmall ? [-4, 4, -10] : isMobile ? [-6, 5, -10] : isTablet ? [-11, 3, -10] : [-13, 3, -10],
    };
  };



  //List of Projects
  export const myProjects = [
    {
      title: 'Aarogya - Exercise Platform',
      desc: 'Aarogya is an innovative platform focused on providing personalized exercise routines and wellness plans. It helps users stay fit by offering a variety of exercises that they can easily follow and track.',
      subdesc:
        'Developed using React.js, Tailwind CSS, JavaScript, Aarogya is built with performance and scalability in mind. The platform ensures a seamless experience for users looking to improve their physical health through easy-to-follow exercise plans.',
      href: 'https://akashkumar3.github.io/Aarogya-Exercises',
      video: '/myProjectsAssets/projectsVideo/aarogya.mp4', 
      logo: '/myProjectsAssets/projectsLogo/aarogya.png', 
      logoStyle: {
        backgroundColor: '#1A2D31', 
        border: '0.2px solid #214B54', 
        boxShadow: '0px 0px 60px 0px #3A7260', 
      },
      spotlight: '/myProjectsAssets/spotlight1.png', 
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/myProjectsAssets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/myProjectsAssets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/myProjectsAssets/js.png',
        },
      ],
    },
    {
      title: 'Mercent Console - Exercise Platform',
      desc: 'Aarogya is an innovative platform focused on providing personalized exercise routines and wellness plans. It helps users stay fit by offering a variety of exercises that they can easily follow and track.',
      subdesc:
        'Developed using React.js, Tailwind CSS, JavaScript, Aarogya is built with performance and scalability in mind. The platform ensures a seamless experience for users looking to improve their physical health through easy-to-follow exercise plans.',
      href: 'https://akashkumar3.github.io/Aarogya-Exercises',
      video: '', 
      logo: '/myProjectsAssets/projectsLogo/aarogya.png', 
      logoStyle: {
        backgroundColor: '#1A2D31', 
        border: '0.2px solid #214B54', 
        boxShadow: '0px 0px 60px 0px #3A7260', 
      },
      spotlight: '/myProjectsAssets/spotlight1.png', 
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/myProjectsAssets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/myProjectsAssets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/myProjectsAssets/js.png',
        },
      ],
    },
  ];




  //testimonials
  export const testimonials = [
    {
      id: 1,
      name: 'Rohan Kumar',
      position: 'Founder of Pehla Nivesh Investment Firm',
      img: 'assets/review2.png',
      review:
        'Working with Akash was a fantastic experience. He built a modern and user-friendly website for my company, and his attention to detail and commitment to quality are unmatched. I highly recommend him for any web development projects.',
    },
    {
      id: 2,
      name: 'Aditya Raghuvanshi',
      position: 'CTO of MN Consultancy Service',
      img: 'assets/review3.png',
      review:
        'He worked as an intern in our company and provided excellent service across multiple projects. His dedication, attention to detail, and teamwork made him a valuable asset to the team, always delivering quality results.',
    },
  ]