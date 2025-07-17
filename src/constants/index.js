export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home'
  },
  {
    id: 2,
    name: "About",
    href: "#about"
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects"
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact"
  }
]






//Responsive sizes
export const responsiveSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskRotation: isSmall ? [0.1, 0, -0.01] : isMobile ? [0.1, 0, -0.01] : [0.05, 0, 0],
    deskScale: isSmall ? 3.5 : isMobile ? 4.2 : 5,
    deskPosition: isMobile ? [0, -1, 0] : [0, -2, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [10, 2, 0],
    roboBotPosition: isSmall ? [-4, 4, -10] : isMobile ? [-6, 5, -10] : isTablet ? [-11, 3, -10] : [-13, 3, -10],
  };
};



//List of Projects
export const myProjects = [

  {
    title: 'Stream View - Video Streaming Platform',
    desc: 'Stream View is a full-featured video streaming platform where users can upload, manage, and watch videos. It provides secure user authentication, content organization, and personalized recommendations to enhance viewer engagement.',
    subdesc:
      'Built using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB, Stream View is a scalable and performance-driven platform offering seamless video streaming, secure sessions with JWT, and interactive features like likes, comments, and subscriptions.',
    href: 'https://stream-view-6qv2.onrender.com',
    video: '/myProjectsAssets/projectsVideo/stream-view.mp4',
    logo: '/myProjectsAssets/projectsLogo/stream_view.png',
    logoStyle: {
      backgroundColor: 'rgb(223, 252, 216)',
      border: '0.2px solid rgb(28, 128, 3)',
      boxShadow: '0px 0px 60px 0px rgb(102, 232, 113)',
    },
    spotlight: '/myProjectsAssets/spotlight3.png', // change as per your asset
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/myProjectsAssets/react.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/myProjectsAssets/js.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/myProjectsAssets/node.svg',
      },
      {
        id: 4,
        name: 'Tailwind css',
        path: '/myProjectsAssets/tailwindcss.png',
      },
      {
        id: 5,
        name: 'MongoDB',
        path: '/myProjectsAssets/mongo.png',
      },
    ],
  },
  {
    title: 'Vision Board - Collaborative Whiteboard',
    desc: 'Vision Board is an interactive, real-time collaborative whiteboard platform that allows users to draw, brainstorm, and share ideas seamlessly. It’s perfect for remote teams and creative sessions.',
    subdesc:
      'Developed using React.js, Tailwind CSS, Node.js, Express.js, and Socket.io, Vision Board ensures smooth real-time synchronization across users. The platform supports drawing tools, chat functionality, and an intuitive UI for effortless collaboration.',
    href: 'https://vision-board-zq7f.onrender.com',
    video: '/myProjectsAssets/projectsVideo/vision_board.mp4',
    logo: '/myProjectsAssets/projectsLogo/vision.png',
    logoStyle: {
      backgroundColor: 'rgb(2, 2, 2)',
      border: '0.2px solid #1F2937',
      boxShadow: '0px 0px 60px 0px rgb(142, 75, 244)',
    },
    spotlight: '/myProjectsAssets/spotlight5.png',
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
        name: 'Node.js',
        path: '/myProjectsAssets/node.svg',
      },
      {
        id: 4,
        name: 'Socket.io',
        path: '/myProjectsAssets/socketio.png',
      },
    ],
  },
  {
    title: 'Aarogya - Exercise Platform',
    desc: 'Aarogya is an innovative platform focused on providing personalized exercise routines and wellness plans. It helps users stay fit by offering a variety of exercises that they can easily follow and track.',
    subdesc:
      'Developed using React.js, Tailwind CSS, JavaScript, Aarogya is built with performance and scalability in mind. The platform ensures a seamless experience for users looking to improve their physical health through easy-to-follow exercise plans.',
    href: 'https://aarogya-exercises.onrender.com',
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
    title: 'Merchant Console - E-commerce',
    desc: 'Merchant Console is a dynamic and user-friendly platform designed for managing and monitoring e-commerce stores. It provides tools for inventory management, order tracking, and analytics to enhance the efficiency of online businesses.',
    subdesc:
      'Built using React.js, Tailwind CSS, and JavaScript, Merchant Console offers a responsive, intuitive interface for e-commerce merchants. It ensures that store owners can easily track sales, manage products, and analyze data for better decision-making.',
    href: 'https://merchant-console-cl7s.onrender.com',
    video: '/myProjectsAssets/projectsVideo/merchent-console.mp4',
    logo: '/myProjectsAssets/projectsLogo/merchant-console.png',
    logoStyle: {
      backgroundColor: '#2A3D45',
      border: '0.2px solid #3B5C68',
      boxShadow: '0px 0px 60px 0px #4F7380',
    },
    spotlight: '/myProjectsAssets/spotlight3.png',
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
  }

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