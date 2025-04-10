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
    "Hi! I am a senior at Brown University studying Applied Mathematics and Computer Science. I am passionate about using tech to improve the world and an avid learner with many interests, especially in machine learning and entrepreneurship.",
  resume: require("../editable-stuff/resume.pdf"),
  education: (
    <div>
      <p style={{ fontSize: 22, marginBottom: 0 }}>
        <b>Brown University</b>
      </p>
      <p style={{ fontSize: 18, marginBottom: 0 }}>
        Sc.B. Applied Math and Computer Science, Sep 2021 – May 2025{" "}
      </p>
      <ul>
        <li>
          Relevant Courses
          <ul>
            <li>
              Computer Vision (Current), Machine Learning, Natural Language Processing, Reinforcement
              Learning, Deep Learning
            </li>
            <li>Parallel Computing on Heterogenous Systems (Current), Computer Systems, Web Development, Theory of Computation</li>
            <li>
              Stochastic Calculus, Statistics, Deterministic Operations Research, Numerical Methods for Differential Equations
            </li>
            <li>Real Analysis (Current), Abstract Algebra, Complex Analysis, Graph Theory</li>
          </ul>
        </li>
      </ul>

      <p style={{ fontSize: 22, marginBottom: 0 }}>
        <b>University of Nevada Reno</b>
      </p>
      <p style={{ fontSize: 18, marginBottom: 0 }}>
        Middle/High School Dual Enrollment, Aug 2015 – May 2021
      </p>
      <ul>
        <li>
          Relevant Courses
          <ul>
            <li>
              Game Theory, Topology, (One Variable) Real Analysis, Number Theory, Calculus III,
              Linear Algebra, Microeconomics
            </li>
          </ul>
        </li>
      </ul>

      <p style={{ fontSize: 22, marginBottom: 0 }}>
        <b>Davidson Academy</b>
      </p>
      <p style={{ fontSize: 18, marginBottom: 0 }}>
        Middle/High School, Aug 2015 – May 2021
      </p>
      <ul>
        <li>
          ACT: 36 (composite), Math: 36, Science: 35, English: 36, Reading: 35,
          Writing: 10
        </li>
      </ul>
    </div>
  ),
};

// EXPERIENCE SECTION
const experience = {
  show: true,
  heading: "Experience",
  data: [
    {
      company: "Lightspeed",
      location: "Providence, RI",
      role: "Data Science Intern",
      date: "Jan 2024 – Current",
      description: [
        <ul>
          <li>Developing an item price recommendation algorithm using clustering techniques on guest profiles to optimize menu pricing and drive revenue growth (ongoing project)</li>
          <li>Analyzed over 10,000 transactions using BigQuery to uncover sales patterns during holidays, informing restaurant strategy</li>
          <li>Developed sales and tip trend analyses using Google Cloud Platform Dataform and SQL, with Looker for strategic planning</li>
          <li>Led initiative to optimize table pacing, leveraging statistical models (scikit-learn, pandas) for over 5,000 restaurants</li>
        </ul>,
      ],
    },
    {
      company: "Susquehanna International Group",
      location: "New York, NY",
      role: "Quantitative Trading Intern",
      date: "Jun 2024 – Aug 2024",
      description: [
        <ul>
          <li>Modeled the impact of attention effects on stock price volatility leading up to earnings reports and events using Python, applying time series analysis and statistical testin</li>
          <li>Executed real-time trading strategies and risk management in simulated electronic mock trading sessions</li>
          <li>Explored options theory, financial markets, and financial instruments to understand trading strategies and market dynamics</li>
        </ul>,
      ],
    },
    {
      company: "PEAK6",
      location: "Chicago, Illinois",
      role: "Trading Micro-Intern",
      date: "May 2024 – May 2024",
      description: [
        <ul>
          <li>Developed stock pitches by analyzing options theory and macroeconomic trends for long-term and short-term volatility trades, combining fundamental analysis with quantitative strategies</li>
          <li>Analyzed open interest's impact on implied volatility using Python data libraries and an in-house suite of tools to analyze term structures and implied vs. realized volatilities</li>
        </ul>,
      ],
    },

    {
      company: "Brown University",
      location: "Providence, RI",
      role: "Undergraduate Teaching Assistant",
      date: "Aug 2022 – Dec 2023",
      description: [
        <ul>
          <li>
            Courses: Computational Linguistics (Fall 2023), Statistical
            Inference (Spring 2023), Machine Learning (Spring 2023), Functional
            Programming (Fall 2022)
          </li>
          <li>Designed over 10 assignments and projects for natural language processing, machine learning, statistics, and functional programming courses</li>
          <li>Facilitated interactive workshops to foster collaboration, reinforce key concepts, and tackle challenging problem sets</li>
          <li>Supported over 300 individuals by moderating a question forums and providing individualized guidance during office hours</li>
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
          <li>Built a data pipeline using Splunk and AWS to extract and preprocess call center log data, improving data accessibility and analytics efficiency for over 50,000 users</li>
          <li>Implemented outlier detection and classification models, achieving over 90% accuracy in identifying irregular calls</li>
          <li>Created time series models to find trends in problematic calls across various regions, supporting over 10,000 call specialists</li>
        </ul>,
      ],
    },
    {
      company: "Visual Prosthesis Lab",
      location: "Providence, RI",
      role: "Research Assistant",
      date: "Sep 2022 – Dec 2022",
      description: [
        <ul>
          <li>Researched and implemented Python-based computer vision frameworks (OpenCV, YOLOv5, Text2Voice) to assist visually impaired individuals in real-time object detection and navigation</li>
        </ul>,
      ],
    },
    {
      company: "Western Digital",
      location: "Milpitas, CA",
      role: "Software Development Engineer Intern",
      date: "May 2022 – Aug 2022",
      description: [
        <ul>
          <li>
            Designed test prioritization algorithm using Python and machine
            learning, increasing cycle efficiency by 50%
          </li>
          <li>
          Constructed and fine-tuned regression, random forest, XGBoost, and neural network models
          for test failure prediction, achieving 95% accuracy through cross-validation and hyperparameter tuning
          </li>
          <li>
            Utilized FastAPI and SQL queries to access and post algorithm
            performances on Elasticsearch
          </li>
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
  ],
};

// LEADERSHIP SECTION
const leadership = {
  show: true,
  heading: "Activities & Leadership",
  data: [
    {
      company: "Anime Video Game Ensemble",
      role: "Co-Founder",
      date: "Sep 2021 – Present",
      description: (
        <ul>
          <li>
            Founded club and recruited over 70 members to arrange and perform
            anime and video game music in biannual concerts
          </li>
          <li>
            Orchestrated club operations, including weekly rehearsals and a{" "}
            <a href="https://www.youtube.com/@brownavge">Youtube channel</a>{" "}
            with over 100k views
          </li>
        </ul>
      ),
    },
    {
      company: "Applied Math DUG",
      role: "President Emeritus, Executive Board",
      date: "Mar 2022 – Present",
      description: (
        <ul>
          <li>
            Lead a club of over 500 students, collaborating with board members
            to plan events such as industry panels, course advising, and social
            mixers
          </li>
          <li>
            Managed over $1800 budget, allocating reosurces for social outreach
            initiatives and overseeing the{" "}
            <a href="https://brownamdug.wordpress.com/">website</a>
          </li>
          <li>
            Coordinated with the applied math department and clubs like SIAM and
            Association of Women in Mathematics to host events such as Pi Day,
            peer and faculty advising, and math talks
          </li>
        </ul>
      ),
    },
    {
      company: "Cambridge Math Circle",
      role: "Mathematics Instructor",
      date: "Apr 2020 – Present",
      description: (
        <ul>
          <li>
            Taught online math classes and explained challenging concepts for
            1st-8th grade students in the Cambridge area
          </li>
          <li>
            Constructed advanced Beast Academy and AoPS lesson plans used by
            over 150 students
          </li>
        </ul>
      ),
    },
    {
      company: "Ensemble Theatre",
      role: "Executive Board",
      date: "Feb 2022 – Present",
      description: (
        <ul>
          <li>
            Coordinated the production team and acted as a liaison between the
            board and and the show as an executive producer
          </li>
          <li>
            Managed social media accounts and designed graphics for posts
            reaching over 600 followers
          </li>
          <li>
            Coordinated with other performance and theatre groups to organize
            shows and scheduling in an advisory board
          </li>
        </ul>
      ),
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
      company: "Harvard WECode",
      role: "Tech Fellow",
      date: "Nov 2022 – Feb 2023",
      description: (
        <ul>
          <li>
            Performed club outreach and hosted events to promote Harvard's
            WECode conference, the largest student-run women in tech conference
            in the world
          </li>
        </ul>
      ),
    },
  ],
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  // gitHubUsername: "michelleliu4",
  // reposLength: 4,
  specificRepos: [
    { username: "michelleliu4", repoName: "michelleliu4.github.io" },
    { username: "pmcurtin", repoName: "intelligin" },
    { username: "michelleliu4", repoName: "DnD-Character-Creator" },
    { username: "michelleliu4", repoName: "NASA-Image-Generator" },
    { username: "michelleliu4", repoName: "Jreamboard" },
    { username: "michelleliu4", repoName: "goodbot-slack" },
  ],  
};

// AWARDS SECTION
const awards = {
  show: true,
  heading: "Awards",
  message: (
    <div>
      <b>AIME Qualifier (2018, 2021)</b>
      <ul>
        <li>
          Two-time AIME qualifier, scoring in the top 5% of all AMC 12 exam
          takers worldwide, as well as a Math Prize for Girls participant
        </li>
      </ul>

      <b>Jane Street Electronic Trading Challenge 3rd Place (2022)</b>
      <ul>
        <li>Selected as one of 60 students for FTTP, a competitive program to learn about trading</li>
        <li>Programmed trading bot in Python leveraging arbitrage and bond pricing to place 3rd</li>
      </ul>

      <b>Hackathon for Social Good Bronze (2022)</b>
      <ul>
        <li>
          Built{" "}
          <a href="https://github.com/michelleliu4/goodbot-slack">Goodbot</a>, a
          Slack bot for workplace satisfaction
        </li>
        <li>
          <a href="https://robinhood.engineering/robinhoods-hackathon-for-social-good-92c91a5726c3">
            Robinhood blog post
          </a>{" "}
          about the hackathon
        </li>
      </ul>

      <b>National Science Bowl Top 32 (2021)</b>
      <ul>
        <li>
          Member of the Nevada team at the National Science Bowl Competition,
          sponsored by the DOE
        </li>
      </ul>

      <b>Doyle Foundation Scholarship (2021, 2022, 2023, 2024)</b>
      <ul>
        <li>
          Four-time recipient of the{" "}
          <a href="https://doylefound.org/">Doyle Foundation</a> Scholarship
        </li>
      </ul>
    </div>
  ),
  images: [
    {
      img: require("../assets/img/awards_robinhood.png"),
      label: "",
      paragraph: "",
    },
    {
      img: require("../assets/img/awards_nsb.png"),
      label: "",
      paragraph: "",
    },
  ],
  imageSize: {
    width: "400", //orig: 615
    height: "400", //orig: 450
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  languages: [
    { name: "Python", value: require("../assets/img/logo_python.png") },
    { name: "JavaScript", value: require("../assets/img/logo_javascript.png") },
    { name: "HTML/CSS", value: require("../assets/img/logo_html.png") },
    // { name: "ReasonML", value: require("../assets/img/logo_reasonml.png") },
    { name: "C/C++", value: require("../assets/img/logo_c.png") },
  ],
  librariesFrameworks: [
    { name: "React", value: require("../assets/img/logo_react.png") },
    { name: "TensorFlow", value: require("../assets/img/logo_tensorflow.png") },
    { name: "Pytorch", value: require("../assets/img/logo_pytorch.png") },
    { name: "NumPy", value: require("../assets/img/logo_numpy.png") },
    { name: "pandas", value: require("../assets/img/logo_pandas.png") },
    { name: "PostgreSQL", value: require("../assets/img/logo_postgresql.png") },
  ],
  otherSkills: [
    { name: "Amazon Web Services", value: require("../assets/img/logo_aws.png") },
    { name: "Google Cloud", value: require("../assets/img/logo_gcp.png") },
    { name: "Git", value: require("../assets/img/logo_git.png") },
    { name: "Docker", value: require("../assets/img/logo_docker.png") },
    { name: "Figma", value: require("../assets/img/logo_figma.png") },
    { name: "WordPress", value: require("../assets/img/logo_wordpress.png") },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "Always open to opportunities! Please reach out to me at",
  email: "michellemq6@gmail.com",
};

// BLOG SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  experience,
  leadership,
  repos,
  awards,
  skills,
  getInTouch,
};
