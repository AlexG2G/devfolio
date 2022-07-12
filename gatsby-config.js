
module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://alexgreenfield.netlify.app/`,
    // Your Name
    name: 'Alex Greenfield',
    // Main Site Title
    title: `Alex Greenfield | University of Canberra | Student | Software Engineering`,
    // Description that goes under your name in main bio
    description: `Student at the University of Canberra | Class of 22-24`,
    // Optional: Github account URL
    github: `https://github.com/AlexG2G`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alex-greenfield-755142243/`,
    // Content of the About Me section
    about: `Hi my name is Alex, I am a Software Engineer and I am currently focusing on Web Development,
     I have many sought after skills in the ICT sector such
    as teamwork, collaboration, problem-solving, and communication skills. I am currently studying 
    Software Engineering, a Bachelor of Software Engineering at the University of Canberra. 
    I have learned many skills in many fields of Engineering, some of these skills are Testing,
    Programming in various langauges, Software Design and Database Design, Report Writing and undertaking analysis
    into my projects. During college, I coded in various languages such as HTML, CSS, JavaScript, Ruby, Rails,
    Lua, and Python and used software/hardware such as Visual Studio, Git Bash, GitHub, Arduino
    Uno, Unity, Space Gass, Autodesk Inventor, and AutoCAD to design and analyze the
    projects I have worked on. I look forward to furthering my knowledge in the field as I continue to learn.`,
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/AlexG2G/website',
      },
      {
        name: 'Finance GUI - APY & Balance Program with Exception Handler',
        description:
          'Finance GUI Calculator using Python',
        link: 'https://github.com/AlexG2G/intro-to-information-technology/tree/main/assignment_4',
      },
      {
        name: 'Web Site for Pacific Trails Resort',
        description:
          'HTML & CSS Project',
        link: 'https://github.com/AlexG2G/intro-to-information-technology/tree/main/assignment_5',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'University of Canberra',
        description: 'Full-Stack Developer, February 2022 - Present',
        link: 'https://www.linkedin.com/school/university-of-canberra/',

      },
      {
        name: 'University of Canberra',
        description: 'Front End Developer, February 2022 - Present',
        link: 'https://www.linkedin.com/school/university-of-canberra/',
      },
      {
        name: 'University of Canberra',
        description: 'Python Developer, February 2022 - Present',
        link: 'https://www.linkedin.com/school/university-of-canberra/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Python, Node.js, Express.js, React, Ruby, HTML, CSS, Bash, Lua, GatsbyJs, TailwindCSS',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Database Design, DBMS, CI / CD, API design, Agile / Scrum, Cyber Secuirty, Git Bash',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-233906999-2`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://alexgreenfield.netlify.app/`,
    // Your Name
    name: 'Alex Greenfield',
    // Main Site Title
    title: `Alex Greenfield | University of Canberra | Student | Software Engineering`,
    // Description that goes under your name in main bio
    description: `Student at the University of Canberra | Class of 22-24`,
    // Optional: Github account URL
    github: `https://github.com/AlexG2G`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/alex-greenfield-755142243/`,
    // Content of the About Me section
    about: `Hi my name is Alex, I am a Software Engineer and I am currently focusing on Web Development,
     I have many sought after skills in the ICT sector such
    as teamwork, collaboration, problem-solving, and communication skills. I am currently studying 
    Software Engineering, a Bachelor of Software Engineering at the University of Canberra. 
    I have learned many skills in many fields of Engineering, some of these skills are Testing,
    Programming in various langauges, Software Design and Database Design, Report Writing and undertaking analysis
    into my projects. During college, I coded in various languages such as HTML, CSS, JavaScript, Ruby, Rails,
    Lua, and Python and used software/hardware such as Visual Studio, Git Bash, GitHub, Arduino
    Uno, Unity, Space Gass, Autodesk Inventor, and AutoCAD to design and analyze the
    projects I have worked on. I look forward to furthering my knowledge in the field as I continue to learn.`,
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/AlexG2G/dev',
      },
      {
        name: 'Finance GUI - APY & Balance Program & Exception Handler',
        description:
          'Finance GUI Calculator using Python',
        link: 'https://github.com/AlexG2G/iit/tree/main/iit/assignment_4',
      },
      {
        name: 'Web Site for Pacific Trails Resort',
        description:
          'HTML & CSS Project',
        link: 'https://github.com/AlexG2G/iit/tree/main/iit/assignment_5',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'University of Canberra',
        description: 'Full-Stack Developer, February 2022 - Present',
        link: 'https://www.linkedin.com/school/university-of-canberra/',

      },
      {
        name: 'University of Canberra',
        description: 'Front End Developer, February 2022 - Present',
        link: 'https://www.linkedin.com/school/university-of-canberra/',
      },
      {
        name: 'University of Canberra',
        description: 'Python Developer, February 2022 - Present',
        link: 'https://www.linkedin.com/school/university-of-canberra/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Python, Node.js, Express.js, React, Ruby, HTML, CSS, Bash, Lua, GatsbyJs, TailwindCSS',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Database Design, DBMS, CI / CD, API design, Agile / Scrum, Cyber Secuirty, Git Bash',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-233906999-2`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

