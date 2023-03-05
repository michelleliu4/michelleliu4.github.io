// NAVIGATION BAR SECTION
const navBar = {
  show: true,
};


// MAIN BODY SECTION
// https://fontawesome.com/v4/icons/
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Michelle",
  middleName: "",
  lastName: "Liu",
  message: "Applied math and computer science student at Brown University",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/michelleliu4",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/michelleliu-4/",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/michelle.liu.4",
    // },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/michelle.liu.4/",
    },
  ],
};


// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot.jpg"),
  imageSize: 375,
  message:
    "Hi! I am a second-year undergraduate student at Brown University studying Applied Mathematics and Computer Science. I am a software engineer and an avid learner with many interests, especially in machine learning and entrepreneurship. ",
  resume: require("../editable-stuff/resume.pdf"),
  education:
    <div>
    <p style={{fontSize:22, marginBottom:0}}><b>Brown University</b></p>
    <p style={{fontSize:18, marginBottom:0}}>Sc.B. Applied Math and Computer Science, Sep 2021 – TBD </p>
    <ul>
      <li>CS Courses: Machine Learning, Deep Learning, Computer Systems,
        Data Structures & Algorithms, Functional Programming</li>
      <li>Math Courses:
        Numerical Methods for PDEs, Operations Research: Deterministic Models,
        Honors Statistics, Applied PDEs, Abstract Algebra, Graph Theory
      </li>
    </ul>

    <p style={{fontSize:22, marginBottom:0}}><b>University of Nevada Reno</b></p>
    <p style={{fontSize:18, marginBottom:0}}>Middle/High School Dual Enrollment, Aug 2015 – May 2021</p>
    <ul>
      <li>Courses: Game Theory, Topology, Real Analysis, Number Theory,
        Calculus III, Linear Algebra, Microeconomics</li>
    </ul>
    </div>,
};


// EXPERIENCES SECTION
const experience = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Incoming Software Engineer Intern',
      company: 'JP Morgan & Chase',
      companylogo: '', //require('../assets/img/dell.png')
      date: 'May 2023 – Aug 2023',
      description: 
        <ul>
          <li>Incoming software engineer intern at JP Morgan & Chase for summer 2023</li>
        </ul>,
    },
    {
      role: 'Undergraduate Teaching Assistant',
      company: 'Brown University TA',
      companylogo: '',
      date: 'Aug 2022 – Present',
      description: 
        <ul>
          <li>DATA 2060: Machine Learning (Spring 2023)</li>
          <li>APMA 1650: Statistical Inference (Spring 2023)</li>
          <li>CSCI 170: Functional Programming (Fall 2022)</li>
          <li>Develop assignments, workshops, and projects as well as assist over 300 students in office hours</li>
          <li>Lead and organize collaborative workshops to reinforce conceptual ideas and discuss challenging problems</li>
        </ul>,
    },
    {
      role: 'Research Assistant',
      company: 'Visual Prosthesis Lab',
      companylogo: '',
      date: 'Sep 2022 – Dec 2022',
      description: 
        <ul>
          <li>Research and implement computer vision frameworks in Python to assist visually impaired individuals with navigation</li>
          <li>Develop visual prosthetic devices with object localization utilizing YoloV5, grasping utilizing Text2Voice, and OCR utilizing pytesseract</li>
        </ul>,
    },
    {
      role: 'Mathematics Instructor',
      company: 'Cambridge Math Circle',
      companylogo: '',
      date: 'Apr 2020 – Present',
      description: 
        <ul>
          <li>Teach online math classes and explain challenging concepts for 1st-8th grade students in the Cambridge area</li>
          <li>Construct advanced Beast Academy and AoPS lesson plans used by over 150 students</li>
        </ul>,
    },
    {
      role: 'Software Development Engineer Intern',
      company: 'Western Digital',
      companylogo: '',
      date: 'May 2022 – Aug 2022',
      description: 
        <ul>
          <li>Designed test prioritization algorithm using Python and machine learning, increasing cycle efficiency by 50%</li>
          <li>Created regression, random forest, and neural network models to predict failures with 95% accuracy</li>
          <li>Utilized FastAPI and SQL queries to access and post algorithm performances on Elasticsearch</li>
          <li>Studied natural language processing to create code coverage maps</li>
        </ul>,
    },
    {
      role: 'First-Year Trading and Technology (FTTP) and INSIGHT Fellow',
      company: 'Jane Street',
      companylogo: '',
      date: 'Mar 2022, Aug 2022',
      description: 
        <ul>
          <li>Selected as one of 60 students for FTTP and one of 40 students for INSIGHT, both highly competitive program to learn market-making and algorithmic trading</li>
          <li>Programmed trading bot in Python placing 3rd in electronic trading competition</li>
        </ul>,
    },
    {
      role: 'Sophomore Trading Discovery Day Fellow',
      company: 'SIG',
      companylogo: '',
      date: 'Mar 2022',
      description: 
        <ul>
          <li>Selected as one of 30 students for this competitive program to learn about quantitative trading at SIG</li>
        </ul>,
    },
  ]
};

const experience2 = {
  show: true,
  heading: "Career",
  lists: [
    {
      CompanyName: "Maestro Health",
      Address: "Chicago, IL",
      Title: "Senior Software Engineer",
      Time: "April, 2016 - Present",
      Descriptions: [
        "Revamped and delivered products in the insurance and benefits admin domain; built responsive SPAs using Vue Js, TypeScript and Rest APIs; ensured quality code through strong typing and extensive test coverage (about 95%) and code reviews; employed modern web techniques such as code splitting and tree shaking to ensure fast application start and response time; maintained and improved legacy systems using Angular Js and DJango Rest Framework"
      ],
      TechStack: ["Vue Js, TypeScript, .net core"]
    },
    {
      CompanyName: "Cision Inc.",
      Address: "Chicago, IL",
      Title: "Senior Software Engineer",
      Time: "2015 - 2016",
      Descriptions: [
        "Helped build CPRE (Cision Public Relations Enterprise) using Angular Js and Asp .net framework"
      ],
      TechStack: ["ASP .net Framework, jQuery, Angular Js 1.x"]
    },
    {
      CompanyName: "comScore",
      Address: "Chicago, IL",
      Title: "Junior / Senior / Staff Software Engieer",
      Time: "2009 - 2015",
      Descriptions: [
        "UI lead of multiple web applications, including comScore Direct, AdEffx (Advertising Effectiveness Web App) and XMedia (a web tool for audience        measurement across TV and digital medias); technologies used include Asp.net MVC, Ext js MVC framework; led a small team of front-end engineers"
      ],
      TechStack: ["ASP .net web forms, ASP .net MVC, Sencha Ext Js Framework, JavaScript"]
    },
    {
      CompanyName: "Gibson Consulting LLC",
      Address: "Chicago, IL",
      Title: "Senior Web Developer",
      Time: "2008 - 2009",
      Descriptions: [
        "Developed a survey engine using Asp .net and a set of web solutions, including a RFI and RFQ website for Dover Global Metals using jQuery and vanilla JavaScript"
      ],
      TechStack: ["ASP .net web forms, JavaScript, jQuery"]
    },
    {
      CompanyName: "DotnetSlackers",
      Address: "Canada",
      Title: "Moderator / Contributor",
      Time: "2008 - 2009",
      Descriptions: [
        "Moderated and contributed to DotNetSlackers website, a website for .NET news and articles, blogs and .NET forums"
      ],
      TechStack: []
    },
    {
      CompanyName: "Metro Chicago Information Center (MCIC)",
      Address: "Chicago, IL",
      Title: "Web developer / Data Analyst / GIS Programmer",
      Time: "2003 - 2008",
      Descriptions: [
        "Built and maintained MCIC’s official websites and intranet; developed systems for the city of Chicago using ASP pages and ESRI technologies."
      ],
      TechStack: ["ASP, JavaScript, ESRI technologies"]
    }
  ]
};


// LEADERSHIP SECTION
const leadership = {
  show: true,
  heading: "Activities & Leadership",
  data: [
    {
      role: 'Executive Board',
      company: 'Machine Intelligence Community',
      companylogo: '',
      date: 'Oct 2022 – Present',
      description: 
        <ul>
          <li>Build and lead machine learning workshops such as song generation with GPT-2, MNIST, and neuro style transfer</li>
          <li>Lead conceptual workshops for over 70 students and assist students in coding machine learning projects</li>
          <li>Organize industry panels, guest speakers, and social events</li>
        </ul>,
    },
    {
      role: 'President',
      company: 'Applied Math DUG',
      companylogo: '',
      date: 'Mar 2022 – Present',
      description: 
        <ul>
          <li>Lead club of over 200 students and collaborate with board members to organize events such as industry panels, course advising, and social mixers</li>
          <li>Manage over $600 budget and organize social outreach as well as <a href="brownamdug.wordpress.com">website</a></li>
          <li>Coordinate with applied math department and clubs like SIAM to host and promote events and modeling competitions</li>
        </ul>,
    },
    {
      role: 'Founder, Co-President',
      company: 'Anime Video Game Ensemble',
      companylogo: '',
      date: 'Sep 2021 – Present',
      description: 
        <ul>
          <li>Founded club and recruited over 70 members to arrange and perform anime and video game music in biannual concerts</li>
          <li>Orchestrate club management, weekly rehearsals, and email and social media outreach including <a href="https://www.youtube.com/@brownavge">Youtube channel</a> with over 4k views</li>
        </ul>,
    },
    {
      role: 'Executive Board',
      company: 'Ensemble Theatre',
      companylogo: '',
      date: 'Feb 2022 – Present',
      description: 
        <ul>
          <li>Manage social media accounts and design graphics for posts reaching over 600 followers</li>
          <li>Executive producer for Hair (musical), coordinating the production team and acting as a liaison between Ensemble board and show</li>
          <li>Coordinate with other performance and theatre groups to organize shows and scheduling in advisory board</li>
        </ul>,
    },
    {
      role: 'Tech Fellow',
      company: 'Harvard WECode',
      companylogo: '',
      date: 'Nov 2022 – Feb 2023',
      description: 
        <ul>
          <li>Perform club outreach and host events to promote Harvard's WECode conference, the largest student-run women in tech conference in the world</li>
        </ul>,
    },
    {
      role: 'Full Stack Developer',
      company: 'Full Stack at Brown',
      companylogo: '',
      date: 'Feb 2022 – May 2022',
      description: 
        <ul>
          <li>Developed the backend for KeebWorld, an aggregate website for mechanical keyboard parts</li>
          <li>Utilized Python and Beautiful Soup to web scrape off vendor websites and organize data into Firebase</li>
        </ul>,
    },
  ]
};


// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "michelleliu4",
  reposLength: 3,
  specificRepos: ['Server-Time-Discord-Bot', 'Jreamboard', 'goodbot-slack'],
};


// AWARDS SECTION
const awards = {
  show: true,
  heading: "Awards",
  message:
  <div>
    <p style={{fontSize:20, marginBottom:0}}><b>AIME Qualifier (2018, 2021)</b></p>
      <ul>
        <li>Two-time AIME qualifier, scoring in the top 5% of all AMC 12 exam takers worldwide, as well as a Math Prize for Girls participant</li>
      </ul>
      <p style={{fontSize:20, marginBottom:0}}><b>Hackathon for Social Good Bronze Award (2022)</b></p>
      <ul>
        <li>Built <a href="https://github.com/michelleliu4/goodbot-slack">Goodbot</a>, a Slack bot for workplace satisfaction</li>
        <li><a href="https://robinhood.engineering/robinhoods-hackathon-for-social-good-92c91a5726c3">Robinhood blog post</a> about the hackathon</li>
      </ul>
      <p style={{fontSize:20, marginBottom:0}}><b>National Science Bowl Top 32 (2021)</b></p>
      <ul>
        <li>Member of the Nevada team at the National Science Bowl Competition, sponsored by the DOE</li>
      </ul>
      <p style={{fontSize:20, marginBottom:0}}><b>Doyle Foundation Scholarship (2021, 2022)</b></p>
      <ul>
        <li>Two-time recipient of the <a href="https://doylefound.org/">Doyle Foundation</a> Scholarship</li>
      </ul>
  </div>,
  images: [
    { 
      img: require("../assets/img/awards_robinhood.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      img: require("../assets/img/awards_nsb.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"400", //orig: 615
    height:"400" //orig: 450
  }
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  languages: [
    { name: "Python", value: require("../assets/img/logo_python.png") },
    { name: "JavaScript/HTML/CSS", value: require("../assets/img/logo_javascript.png") },
    //{ name: "HTML", value: require("../assets/img/logo_html.png") },
    //{ name: "CSS", value: require("../assets/img/logo_css.png") },
    { name: "ReasonML", value: require("../assets/img/logo_reasonml.png") },
    { name: "Racket", value: require("../assets/img/logo_racket.png") },
    { name: "C", value: require("../assets/img/logo_c.png") },
  ],
  librariesFrameworks: [
    { name: "NumPy", value: require("../assets/img/logo_numpy.png") },
    { name: "Matplotlib", value: require("../assets/img/logo_matplotlib.png") },
    { name: "Tensorflow", value: require("../assets/img/logo_tensorflow.png") },
    { name: "React", value: require("../assets/img/logo_react.png") },
    { name: "PostgreSQL", value: require("../assets/img/logo_postgresql.png") },
  ],
  otherSkills: [
    { name: "Git", value: require("../assets/img/logo_git.png") },
    { name: "Figma", value: require("../assets/img/logo_figma.png") },
    { name: "WordPress", value: require("../assets/img/logo_wordpress.png") },
  ],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Always open to opportunities! Please reach out to me at",
  email: "michelle_h_liu@brown.edu",
};


// BLOG SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, experience, experience2, leadership, repos, awards, skills, getInTouch };
