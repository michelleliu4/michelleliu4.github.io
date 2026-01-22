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
  message: "SWE @ Databricks · Kleiner Perkins Fellow · Brown University",
  icons: [
    {
      image: "linkedin",
      url: "https://www.linkedin.com/in/michelleliu-4",
    },
    {
      image: "github",
      url: "https://github.com/michelleliu4",
    },
    {
      image: "x-twitter",
      url: "https://x.com/michelleliu_4",
    },
    {
      image: "discord",
      url: "https://discordapp.com/users/384794549412954113",
    },
    {
      image: "instagram",
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
  message: (
    <>
      <p>
        Hi! I’m Michelle, a software engineer at Databricks and recent Brown
        graduate in Applied Math–CS. I'm also a Kleiner Perkins Engineering
        Fellow. I’ve explored quant trading, software engineering, and data
        science through internships at Figma, SIG, JPMorgan, and more.
      </p>
      <p>
        I'm especially excited about product, UI, and startups. At Brown, I
        co-founded the Anime Video Game Ensemble—check out our performances at{" "}
        <a href="https://brownavge.org">brownavge.org</a>! Outside of work,
        you’ll usually find me at the piano, climbing, or building projects that
        bring ideas to life.
      </p>
    </>
  ),
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
              Computer Vision, Machine Learning, Natural Language Processing,
              Reinforcement Learning, Deep Learning
            </li>
            <li>
              Parallel Computing (CPU+GPU), Computer Systems, Theory of
              Computation
            </li>
            <li>
              Statistical Inference II, Stochastic Calculus, Real Analysis II
            </li>
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
              Game Theory, Topology, (Single Variable) Real Analysis, Number
              Theory, Microeconomics
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
      company: "Databricks",
      location: "Mountain View, CA",
      role: "Software Engineer",
      date: "Oct 2025 – Present",
      logo: require("../assets/img/logo_databricks.png"),
      description: [
        <ul>
          <li>
            Refactored tool-call UI for Databricks Assistant, redesigning
            agent–tool interaction surfaces and implementing changes in React
            and TypeScript{" "}
          </li>
          <li>
            Improved frontend reliability and maintainability via architectural
            refactors, Playwright test suites, and probes
          </li>
        </ul>,
      ],
    },
    {
      company: "Figma",
      location: "San Francisco, CA",
      role: "Software Engineer Intern",
      date: "Jun 2025 – Aug 2025",
      logo: require("../assets/img/logo_figma.png"),
      description: [
        <ul>
          <li>
            Developed custom stroke endcap sizing feature within Figma’s Core
            Experience team, with C++, React, and TypeScript
          </li>
          <li>
            Engineered geometry and SceneGraph logic to enable precise,
            user-controlled cap sizes through vector math
          </li>
          <li>
            Collaborated with designers to iterate the stroke settings panel
            design, shaping the endcap controls and overall UI/UX
          </li>
        </ul>,
      ],
    },
    {
      company: "Kleiner Perkins",
      location: "San Francisco, CA",
      role: "Kleiner Perkins Engineering Fellow",
      date: "Jun 2025 – Aug 2025",
      logo: require("../assets/img/logo_kp.jpeg"),
      description: [
        <ul>
          <li>
            Selected as a 2025 Kleiner Perkins Engineering Fellow, joining a
            cohort of top technical students for a mentorship program with
            access to KP portfolio companies and industry leaders
          </li>
        </ul>,
      ],
    },
    {
      company: "Lightspeed",
      location: "Providence, RI",
      role: "Data Science Intern",
      date: "Jan 2024 – May 2025",
      logo: require("../assets/img/logo_lightspeed.png"),
      description: [
        <ul>
          <li>
            Developed an LDA-based restaurant cohorting model optimize menu
            pricing and drive revenue growth
          </li>
          <li>
            Analyzed transactions using BigQuery to uncover sales patterns
            during holidays, informing restaurant strategy
          </li>
          <li>
            Developed sales and tip trend analyses using Google Cloud Platform
            Dataform and SQL, with Looker for strategic planning
          </li>
          <li>
            Led initiative to optimize table pacing, leveraging statistical
            models (scikit-learn, pandas) for over 5,000 restaurants
          </li>
        </ul>,
      ],
    },
    {
      company: "Susquehanna International Group",
      location: "New York, NY",
      role: "Quantitative Trading Intern",
      date: "Jun 2024 – Aug 2024",
      logo: require("../assets/img/logo_sig.jpg"),
      description: [
        <ul>
          <li>
            Modeled the impact of attention effects on stock price volatility
            leading up to earnings reports and events using Python, applying
            time series analysis and statistical testin
          </li>
          <li>
            Executed real-time trading strategies and risk management in
            simulated electronic mock trading sessions
          </li>
          <li>
            Explored options theory, financial markets, and financial
            instruments to understand trading strategies and market dynamics
          </li>
        </ul>,
      ],
    },

    {
      company: "Brown University",
      location: "Providence, RI",
      role: "Undergraduate Teaching Assistant",
      date: "Aug 2022 – Dec 2023",
      logo: require("../assets/img/logo_brown.png"),
      description: [
        <ul>
          <li>
            Courses: Computational Linguistics (Fall 2023), Statistical
            Inference (Spring 2023), Machine Learning (Spring 2023), Functional
            Programming (Fall 2022)
          </li>
          <li>
            Courses: Computational Linguistics, Machine Learning, Statistical
            Inference, Functional Programming
          </li>
          <li>
            Designed over 10 assignments and projects and supported over 300
            students through office hours
          </li>
          <li>
            Facilitated interactive workshops to foster collaboration, reinforce
            key concepts, and tackle challenging problem sets
          </li>
        </ul>,
      ],
    },
    {
      company: "JPMorgan Chase & Co.",
      location: "Jersey City, NJ",
      role: "Software Engineer Intern",
      date: "Jun 2023 – Aug 2023",
      logo: require("../assets/img/logo_jpmc.jpg"),
      description: [
        <ul>
          <li>
            Analyzed transactions using BigQuery to uncover sales patterns
            during holidays, informing restaurant strategy
          </li>
          <li>
            Implemented outlier detection and classification models, achieving
            over 90% accuracy in identifying irregular calls
          </li>
          <li>
            Created time series models to find trends in problematic calls
            across various regions, supporting over 10,000 call specialists
          </li>
        </ul>,
      ],
    },
    {
      company: "Western Digital",
      location: "Milpitas, CA",
      role: "Software Development Engineer Intern",
      date: "May 2022 – Aug 2022",
      logo: require("../assets/img/logo_wd.png"),
      description: [
        <ul>
          <li>
            Designed test prioritization algorithm using Python and machine
            learning, increasing cycle efficiency by 50%
          </li>
          <li>
            Constructed and fine-tuned regression, random forest, XGBoost, and
            neural network models for test failure prediction, achieving 95%
            accuracy through cross-validation and hyperparameter tuning
          </li>
          <li>
            Utilized FastAPI and SQL queries to access and post algorithm
            performances on Elasticsearch
          </li>
        </ul>,
      ],
    },
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
      date: "Sep 2021 – May 2025",
      description: (
        <ul>
          <li>
            Founded club and recruited over 100 members to arrange and perform
            anime and video game music in biannual concerts
          </li>
          <li>
            Orchestrated club operations, including weekly rehearsals and a{" "}
            <a href="https://www.youtube.com/@brownavge">Youtube channel</a>{" "}
            with over 100k views
          </li>
          <li>
            Club website available <a href="https://brownavge.org">here</a>
          </li>
        </ul>
      ),
    },
    {
      company: "Applied Math DUG",
      role: "President Emeritus, Executive Board",
      date: "Mar 2022 – May 2025",
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
      date: "Apr 2020 – May 2025",
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
      date: "Feb 2022 – May 2025",
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
    // {
    //   company: 'Machine Intelligence Community',
    //   role: 'Executive Board',
    //   date: 'Oct 2022 – May 2023',
    //   description:
    //     <ul>
    //       <li>Constructed educational machine learning workshops in song generation with GPT-2 and neuro style transfer</li>
    //       <li>Lead conceptual sessions for over 70 individuals, assisting them in understanding and coding machine learning projects</li>
    //     </ul>
    // },
    // {
    //   company: "Harvard WECode",
    //   role: "Tech Fellow",
    //   date: "Nov 2022 – Feb 2023",
    //   description: (
    //     <ul>
    //       <li>
    //         Performed club outreach and hosted events to promote Harvard's
    //         WECode conference, the largest student-run women in tech conference
    //         in the world
    //       </li>
    //     </ul>
    //   ),
    // },
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
    { username: "michelleliu4", repoName: "north-burial-ground" },
    { username: "pmcurtin", repoName: "intelligin" },
    { username: "michelleliu4", repoName: "DnD-Character-Creator" },
    { username: "michelleliu4", repoName: "NASA-Image-Generator" },
    { username: "michelleliu4", repoName: "Jreamboard" },
    // { username: "michelleliu4", repoName: "goodbot-slack" },
  ],
};

// AWARDS SECTION
const awards = {
  show: true,
  heading: "Awards",
  message: (
    <div>
      <p>
        <b>Rohn Truell Premium Prize in Applied Mathematics (2025)</b>
        <br />
        Awarded annually to a graduating senior in Applied Mathematics at Brown
        who has achieved special distinction.
      </p>

      <p>
        <b>PEAK6 Trading Micro-Internship (2024)</b>
        <br />
        Selected for a one-week program on volatility strategy. Delivered
        options-based trade pitches using Python and macroeconomic research.
      </p>

      <p>
        <b>Jane Street Electronic Trading Challenge – 3rd Place (2022)</b>
        <br />
        Placed 3rd in a trading bot competition using Python for arbitrage and
        bond pricing. Selected for Jane Street’s FTTP program.
      </p>

      <p>
        <b>Hackathon for Social Good – Bronze Award (2022)</b>
        <br />
        Built a Slack-integrated sentiment analysis bot,{" "}
        <a href="https://github.com/michelleliu4/goodbot-slack">Goodbot</a>, to
        boost workplace morale. Awarded Bronze at Robinhood's{" "}
        <a href="https://robinhood.engineering/robinhoods-hackathon-for-social-good-92c91a5726c3">
          Hackathon for Social Good
        </a>
        .
      </p>

      <p>
        <b>AIME Qualifier (2018, 2021)</b>
        <br />
        Two-time AIME qualifier and Math Prize for Girls participant.
      </p>

      {/* <p>
        <b>National Merit Scholar (2021)</b>
        <br />
        Selected as a recipient of the National Merit $2500 Scholarship out of
        1.5 million students.
      </p> */}

      {/* <p>
        <b>National Science Bowl – Top 32 (2021)</b>
        <br />
        Represented Nevada at the National Science Bowl, placing in the top 32
        teams nationally. Sponsored by the U.S. Department of Energy.
      </p> */}
      {/* <p>
        <b>Doyle Foundation Scholarship (2021–2024)</b>
        <br />
        Four-time recipient of the{" "}
        <a href="https://doylefound.org/">Doyle Foundation</a> Scholarship
        awarded for academic excellence.
      </p> */}
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
    width: "400",
    height: "400",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  languages: [
    { name: "Python", value: require("../assets/img/logo_python.png") },
    { name: "JavaScript", value: require("../assets/img/logo_javascript.png") },
    { name: "TypeScript", value: require("../assets/img/logo_typescript.png") },
    { name: "HTML/CSS", value: require("../assets/img/logo_html.png") },
    { name: "C", value: require("../assets/img/logo_c.png") },
    { name: "C++", value: require("../assets/img/logo_cpp.png") },
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
    {
      name: "Amazon Web Services",
      value: require("../assets/img/logo_aws.png"),
    },
    { name: "Google Cloud", value: require("../assets/img/logo_gcp.png") },
    { name: "Git", value: require("../assets/img/logo_git.png") },
    { name: "Docker", value: require("../assets/img/logo_docker.png") },
    { name: "Figma", value: require("../assets/img/logo_figma.png") },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "Always open to opportunities! Please reach out to me at",
  email: "michellemq6 [at] gmail [dot] com",
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
