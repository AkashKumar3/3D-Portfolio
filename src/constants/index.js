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
        name:"Work",
        href:"#work"
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
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [10,2, 0],
      roboBotPosition: isSmall ? [-4, 4, -10] : isMobile ? [-6, 5, -10] : isTablet ? [-11, 3, -10] : [-13, 3, -10],
    };
  };