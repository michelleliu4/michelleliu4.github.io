// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
// https://fontawesome.com/v4/icons/
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Michelle",
  middleName: "",
  lastName: "Liu",
  message: " Applied math and computer science student at Brown University ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/michelleliu4",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/michelle.liu.4",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/michelle.liu.4/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/michelleliu-4/",
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
  imageLink: require("../editable-stuff/michelleheadshot.jpg"),
  imageSize: 375,
  message:
    "Hi! I am a second-year undergraduate student at Brown University studying Applied Mathematics and Computer Science. I am a software engineer and an avid learner with many interests, especially in machine learning and entrepreneurship. ",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "michelleliu4", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../assets/img/wecode.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/michelleheadshot.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615", //orig: 615
    height:"450" //orig: 450
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
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

// const oldExperience = {
//   show: false,
//   heading: "Experiences",
//   data: [
//     {
//       role: 'Software Engineer',// Here Add Company Name
//       companylogo: require('../assets/img/dell.png'),
//       date: 'June 2018 – Present',
//     },
//   ]
// };

const experience = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Research Assistant',
      company: 'Visual Prosthesis Lab',
      companylogo: '', //require('../assets/img/dell.png'),
      date: 'Sep 2022 – Present',
      description: 
        <ul>
          <li>Research and implement computer vision frameworks in Python to assist visually impaired individuals with navigation</li>
          <li>Develop visual prosthetic devices with object localization utilizing YoloV5, grasping utilizing Text2Voice, and OCR utilizing pytesseract</li>
        </ul>,
    },
    {
      role: 'Undergraduate Teaching Assistant',
      company: 'Brown University',
      companylogo: '',
      date: 'Aug 2022 – Present',
      description: 
        <ul>
          <li>Teaching assistant for CSCI 170, a functional programming course taught in Racket and ReasonML</li>
          <li>Develop assignments, workshops, and projects in Racket and ReasonML as well as assist over 150 students in office hours</li>
          <li>Lead and organize collaborative workshops to reinforce conceptual ideas and discuss challenging problems</li>
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
  ]
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experience };
