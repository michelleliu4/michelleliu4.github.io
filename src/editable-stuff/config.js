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
      url: "https://www.linkedin.com/in/michelleliu-4",
    },
    // {
    //   image: "fa-discord",
    //   url: "https://discordapp.com/users/384794549412954113",
    // },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/michelle.liu.4",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/michelle.liu.4",
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
    "Hi! I am a junior at Brown University studying Applied Mathematics and Computer Science. I am passionate about using tech to improve the world and an avid learner with many interests, especially in machine learning and entrepreneurship.",
  resume: require("../editable-stuff/resume.pdf"),
  education:
    <div>
    <p style={{fontSize:22, marginBottom:0}}><b>Brown University</b></p>
    <p style={{fontSize:18, marginBottom:0}}>Sc.B. Applied Math and Computer Science, Sep 2021 – May 2025 </p>
    <ul>
      <li>Computer Science Courses
        <ul>
          <li>Machine Learning, Deep Learning, NLP</li>
          <li>Computer Systems, Web Development, Functional Programming</li>
          <li>Theory of Computation, Data Structures & Algorithms</li>
        </ul>
      </li>
      <li>Math Courses
        <ul>
          <li>Numerical Solutions of Differential Equations, Operations Research: Deterministic Models, Stochastic Calculus</li>
          <li>Honors Statistics, Applied Partial Differential Equations</li>
          <li>Abstract Algebra, Complex Analysis, Graph Theory</li>
        </ul>
      </li>
    </ul>

    <p style={{fontSize:22, marginBottom:0}}><b>University of Nevada Reno</b></p>
    <p style={{fontSize:18, marginBottom:0}}>Middle/High School Dual Enrollment, Aug 2015 – May 2021</p>
    <ul>
      <li>Relevant Courses
        <ul>
          <li>Game Theory, Topology, Real Analysis, Number Theory,
        Calculus III, Linear Algebra, Microeconomics</li>
        </ul>
      </li>
    </ul>

    <p style={{fontSize:22, marginBottom:0}}><b>Davidson Academy</b></p>
    <p style={{fontSize:18, marginBottom:0}}>Middle/High School, Aug 2015 – May 2021</p>
    <ul>
      <li>ACT: 36 (composite), Math: 36, Science: 35, English: 36, Reading: 35, Writing: 10</li>
    </ul>
    </div>,
};

// EXPERIENCE SECTION
const experience = {
  show: true,
  heading: "Experience",
  data: [
    {
      company: 'SIG',
      location: "New York, NY",
      role: 'Quantitative Trading Intern',
      date: 'Summer 2024',
      description: [
        <ul>
          <li>Incoming for Summer 2024</li>
        </ul>
      ],
    },
    {
      company: 'Lightspeed',
      location: "Providence, RI",
      role: 'Data Science Intern',
      date: 'Spring 2024',
      description: [
        <ul>
          <li>Incoming for Spring 2024</li>
        </ul>
      ],
    },
    {
      company: 'Brown University',
      location: "Providence, RI",
      role: 'Undergraduate Teaching Assistant',
      date: 'Aug 2022 – Present',
      description: [
        <ul>
          <li>Courses: Computational Linguistics (Fall 2023), Statistical Inference (Spring 2023), Machine Learning (Spring 2023), Functional Programming (Fall 2022)</li>
          <li>Designed projects, homework, and exams as well as assisted with grading of assignments</li>
          <li>Facilitated interactive workshops to foster collaboration, reinforce key concepts, and tackle challenging problem sets</li>
          <li>Supported over 300 individuals by moderating an online question forum and providing guidance during office hours</li>
        </ul>,
      ],
    },
    {
      company: "JPMorgan Chase & Co.",
      location: "Jersey City, NJ",
      role: "Software Engineer Intern",
      date: "Jun 2023 – Aug 2023",
      description: [
        <ul>
          <li>Leveraged Splunk queries and AWS to construct a robust data pipeline for extracting and preprocessing call center log data</li>
          <li>Developed and implemented outlier detection and classification models, achieving over 90% accuracy identifying irregular and bad calls</li>
          <li>Created time series models to find general trends in problematic calls across various regions, supporting a user base of over 50,000 call specialists</li>
        </ul>
      ],
    },
    {
      company: 'Visual Prosthesis Lab',
      location: "Providence, RI",
      role: 'Research Assistant',
      date: 'Sep 2022 – Dec 2022',
      description: [
        <ul>
          <li>Conducted research and implemented Python computer vision frameworks to aid visually impaired individuals in navigation</li>
          <li>Developed visual prosthesis devices by leveraging YoloV5 for object localization, Text2Voice for intuitive grasping, and OCR for character recognition</li>
        </ul>,
      ],
    },
    {
      company: 'Western Digital',
      location: "Milpitas, CA",
      role: 'Software Development Engineer Intern',
      date: 'May 2022 – Aug 2022',
      description: [
        <ul>
          <li>Designed test prioritization algorithm using Python and machine learning, increasing cycle efficiency by 50%</li>
          <li>Created regression, random forest, and neural network models to predict failures with 95% accuracy</li>
          <li>Utilized FastAPI and SQL queries to access and post algorithm performances on Elasticsearch</li>
          <li>Studied natural language processing to create code coverage maps</li>
        </ul>,
      ],
    },
    // {
    //   company: 'D.E. Shaw & Co.',
    //   location: "New York, NY",
    //   role: 'Discovery Fellowship Attendee',
    //   date: 'May 2023',
    //   description: [
    //     <ul>
    //       <li>Selected as one of 30 attendees for selective program to learn about roles at DE Shaw & Co</li>
    //       <li>Studied financial market topics such as alpha and behavioral finance</li>
    //     </ul>,
    //   ],
    // },
    {
      company: 'Citadel',
      location: "New York, NY",
      role: 'Discover Citadel & Citadel Securities Participant',
      date: 'Apr 2023',
      description: [
        <ul>
          <li>Selected as one of 120 out of over 2600 students to learn about quantitative roles at Citadel</li>
          <li>Attended networking sessions with senior leaders to learn about company structure</li>
          <li>Leveraged asset pricing and bidding to place 1st in a trading game</li>
        </ul>,
      ],
    },
    {
      company: 'Jane Street',
      location: "New York, NY",
      role: 'First-Year Trading and Technology (FTTP) and INSIGHT Fellow',
      date: 'Mar 2022, Aug 2022',
      description: [
        <ul>
          <li>Selected as one of 60 students for FTTP and one of 40 students for INSIGHT, both highly competitive program to learn market-making and algorithmic trading</li>
          <li>Programmed trading bot in Python leveraging arbitrage and bond pricing to place 3rd in electronic trading competition</li>
        </ul>,
      ],
    },
    // {
    //   company: 'Jadepoint',
    //   location: "Remote",
    //   role: 'Consulting Intern',
    //   date: 'Jan 2022',
    //   description: [
    //     <ul>
    //       <li>Collaborated with the consulting team to design PowerPoint presentations and training tasks for clients in Aruba, effectively conveying performance psychology concepts</li>
    //       <li>Conducted market research on the luxury hotel industry, providing valuable insights and recommendations to support strategic decision-making for the consulting projects</li>
    //     </ul>,
    //   ],
    // },
  ]
};

// LEADERSHIP SECTION
const leadership = {
  show: true,
  heading: "Activities & Leadership",
  data: [
    {
      company: 'Anime Video Game Ensemble',
      role: 'Co-Founder',
      date: 'Sep 2021 – Present',
      description: 
        <ul>
          <li>Founded club and recruited over 70 members to arrange and perform anime and video game music in biannual concerts</li>
          <li>Orchestrated club operations, including weekly rehearsals and a <a href="https://www.youtube.com/@brownavge">Youtube channel</a> with over 100k views</li>
        </ul>,
    },
    {
      company: 'Applied Math DUG',
      role: 'President Emeritus, Executive Board',
      date: 'Mar 2022 – Present',
      description:
        <ul>
          <li>Lead a club of over 400 students, collaborating with board members to plan events such as industry panels, course advising, and social mixers</li>
          <li>Managed over $1800 budget, allocating reosurces for social outreach initiatives and overseeing the <a href="https://brownamdug.wordpress.com/">website</a></li>
          <li>Coordinated with the applied math department and clubs like SIAM and Association of Women in Mathematics to host events such as Pi Day, peer and faculty advising, and math talks</li>
        </ul>,
    },
    {
      company: 'Cambridge Math Circle',
      role: 'Mathematics Instructor',
      date: 'Apr 2020 – Dec 2022',
      description:
        <ul>
          <li>Taught online math classes and explained challenging concepts for 1st-8th grade students in the Cambridge area</li>
          <li>Constructed advanced Beast Academy and AoPS lesson plans used by over 150 students</li>
        </ul>,
    },
    {
      company: 'Ensemble Theatre',
      role: 'Executive Board',
      date: 'Feb 2022 – Present',
      description: 
        <ul>
          <li>Coordinated the production team and acted as a liaison between the board and and the show as an executive producer</li>
          <li>Managed social media accounts and designed graphics for posts reaching over 600 followers</li>
          <li>Coordinated with other performance and theatre groups to organize shows and scheduling in an advisory board</li>
        </ul>,
    },
    {
      company: 'Machine Intelligence Community',
      role: 'Executive Board',
      date: 'Oct 2022 – May 2023',
      description:
        <ul>
          <li>Constructed educational machine learning workshops in song generation with GPT-2 and neuro style transfer</li>
          <li>Lead conceptual sessions for over 70 individuals, assisting them in understanding and coding machine learning projects</li>
        </ul>
    },
    {
      company: 'Harvard WECode',
      role: 'Tech Fellow',
      date: 'Nov 2022 – Feb 2023',
      description: 
        <ul>
          <li>Performed club outreach and hosted events to promote Harvard's WECode conference, the largest student-run women in tech conference in the world</li>
        </ul>,
    },
    // {
    //   company: 'Full Stack at Brown',
    //   role: 'Full Stack Developer',
    //   date: 'Feb 2022 – May 2022',
    //   description: 
    //     <ul>
    //       <li>Developed the backend for KeebWorld, an aggregate website for mechanical keyboard parts</li>
    //       <li>Utilized Python and Beautiful Soup to web scrape off vendor websites and organize data into Firebase</li>
    //     </ul>,
    // },
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
  reposLength: 4,
  specificRepos: ['Jreamboard', 'goodbot-slack'],
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
      <p style={{fontSize:20, marginBottom:0}}><b>Doyle Foundation Scholarship (2021, 2022, 2023)</b></p>
      <ul>
        <li>Three-time recipient of the <a href="https://doylefound.org/">Doyle Foundation</a> Scholarship</li>
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
    { name: "JavaScript", value: require("../assets/img/logo_javascript.png") },
    { name: "HTML/CSS", value: require("../assets/img/logo_html.png") },
    // { name: "CSS", value: require("../assets/img/logo_css.png") },
    { name: "ReasonML", value: require("../assets/img/logo_reasonml.png") },
    // { name: "Racket", value: require("../assets/img/logo_racket.png") },
    { name: "C/C++", value: require("../assets/img/logo_c.png") },
  ],
  librariesFrameworks: [
    { name: "TensorFlow", value: require("../assets/img/logo_tensorflow.png") },
    { name: "NumPy", value: require("../assets/img/logo_numpy.png") },
    { name: "pandas", value: require("../assets/img/logo_pandas.png") },
    { name: "scikit-learn", value: require("../assets/img/logo_scikitlearn.png") },
    { name: "Matplotlib", value: require("../assets/img/logo_matplotlib.png") },
    { name: "React", value: require("../assets/img/logo_react.png") },
    { name: "PostgreSQL", value: require("../assets/img/logo_postgresql.png") },
  ],
  otherSkills: [
    { name: "Git", value: require("../assets/img/logo_git.png") },
    { name: "Docker", value: require("../assets/img/logo_docker.png") },
    { name: "Figma", value: require("../assets/img/logo_figma.png") },
    { name: "WordPress", value: require("../assets/img/logo_wordpress.png") },
    { name: "Agile", value: require("../assets/img/logo_agile.png") },
    { name: "Jira", value: require("../assets/img/logo_jira.png") },
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

export { navBar, mainBody, about, experience, leadership, repos, awards, skills, getInTouch };
