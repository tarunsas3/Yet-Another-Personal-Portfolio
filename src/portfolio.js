/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tarun's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products to develop sustainable, scalable, social and technical systems to create impact.",
  og: {
    title: "Tarun Sastry Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Tarun Sastry",
  logo_name: "TarunSastry",
  nickname: "FullStack Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products to develop sustainable, scalable, social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1MkZIUzpiYIU78gu7_CVkf8T7XxU_UCNd/view?usp=sharing",
  portfolio_repository: "https://github.com/tarunsas3",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/tarunsas3",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tarun-sastry-394230b3/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:tarunsastry99@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "GitLab",
    link: "https://gitlab.com/tarunsas3",
    fontAwesomeIcon: "fa-gitlab", // Reference https://fontawesome.com/icons/gitlab?style=brandsback
    backgroundColor: "#FCA121",
  },
  {
    name: "Medium",
    link: "https://medium.com/@tarunsastry99",
    fontAwesomeIcon: "fab fa-medium", // Reference https://fontawesome.com/icons/gitlab?style=brandsback
    backgroundColor: "#000000",
  },
  {
    name: "StackOverflow",
    link: "https://stackoverflow.com/users/17234665/tarun-sastry",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/gitlab?style=brandsback
    backgroundColor: "#f48024",
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/tarunsastry",
    fontAwesomeIcon: "fa-kaggle", // Reference https://fontawesome.com/icons/gitlab?style=brandsback
    backgroundColor: "#20BEFF",
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/tarunsastry99",
    },
    {
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/tarunsastry99",
    },
    {
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/tarunsastry99",
    },
    {
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@tarun987",
    },
    {
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/tarunsastry",
    },
  ],
};

// const degrees = {
//   degrees: [
//     {
//       title: "Indian Institute of Information Technology Kurnool",
//       subtitle: "B.Tech. in Computer Engineering",
//       logo_path: "iiitk_logo.png",
//       alt_name: "IIITDM Kurnool",
//       duration: "2016 - Present",
//       descriptions: [
//         "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
//         "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
//         "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
//       ],
//       website_link: "http://iiitk.ac.in",
//     },
//   ],
// };

// const certifications = {
//   certifications: [
//     {
//       title: "Machine Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Deep Learning",
//       subtitle: "- Andrew Ng",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "Data Science",
//       subtitle: "- Alex Aklson",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Big Data",
//       subtitle: "- Kim Akers",
//       logo_path: "microsoft_logo.png",
//       certificate_link:
//         "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//       alt_name: "Microsoft",
//       color_code: "#D83B0199",
//     },
//     {
//       title: "Advanced Data Science",
//       subtitle: "- Romeo Kienzler",
//       logo_path: "ibm_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//       alt_name: "IBM",
//       color_code: "#1F70C199",
//     },
//     {
//       title: "Advanced ML on GCP",
//       subtitle: "- GCP Training",
//       logo_path: "google_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "DL on Tensorflow",
//       subtitle: "- Laurence Moroney",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//       alt_name: "deeplearning.ai",
//       color_code: "#00000099",
//     },
//     {
//       title: "Fullstack Development",
//       subtitle: "- Jogesh Muppala",
//       logo_path: "coursera_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//       alt_name: "Coursera",
//       color_code: "#2A73CC",
//     },
//     {
//       title: "Kuberenetes on GCP",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//     {
//       title: "Cryptography",
//       subtitle: "- Saurabh Mukhopadhyay",
//       logo_path: "nptel_logo.png",
//       certificate_link:
//         "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//       alt_name: "NPTEL",
//       color_code: "#FFBB0099",
//     },
//     {
//       title: "Cloud Architecture",
//       subtitle: "- Qwiklabs",
//       logo_path: "gcp_logo.png",
//       certificate_link:
//         "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//       alt_name: "GCP",
//       color_code: "#4285F499",
//     },
//   ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteer ship",
  description:
    "I have worked with many evolving startups as Freelance Fullstack Developer, Designer and Software Architect. I have also worked with some well established companies as a Tester. I love organizing events and that is why I am also involved with many open-source communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Test Associate",
          company: "Maveric Systems",
          company_url: "https://maveric-systems.com/",
          logo_path: "maveric-logo.png",
          duration: "June 2021 - PRESENT",
          location: "Chennai, Tamil Nadu",
          description:
            "I am working on Testing products. The project involves process such as Test Designing and Test Execution. I am currently working on a Banking Project. Our goal is to make the bank application as less erroneous as possible.",
          color: "#0879bf",
        },
        {
          title: "Fullstack Developer",
          company: "codeSMARTr",
          company_url: "",
          logo_path: "codesmartr-logo.png",
          duration: "May 2020 - Feb 2021",
          location: "Hyderabad, Telangana",
          description:
            "I have created complete Fullstack Application for the company. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image and etc.., as part of Employee management. I was involved in a team for creating complete software architecture of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Application Developer",
          company: "SDS Ramcides Pvt. Ltd.",
          company_url: "https://www.ramcides.com/",
          logo_path: "ramcides-logo.png",
          duration: "July 2019 - Feb 2020",
          location: "Chennai, Tamil Nadu",
          description:
            "SDS Ramcides is an CropScience company located in Chennai. I have redesigned the entire application from scratch and changed the integration of the whole app from Firebase to MongDB. I learnt and used the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real world scenarios. I learnt the Designing of UI on perspective of the client.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Technology Consultant Intern",
          company: "Deloitte",
          company_url: "https://www2.deloitte.com/us/en.html",
          logo_path: "deloitee-logo.png",
          duration: "Feb 2020 - Jun 2020",
          location: "Remote",
          description:
            "I have worked on project of predicting considerations for mobilizations based on client discovery data. The objectives: were to define an approach for the project based on scanning the market and to analyze, predict solutions to suffice the business design cases. I have closely worked with cloud computing models to create solution for this. At the end of internship, I had created model deployed on cloud, to perform feasibility and readiness assessment of projects whenever they are uploaded to the cloud and provide accurate plan of action",
          color: "#ee3c26",
        },
        {
          title: "Software Engineering Intern",
          company: "JP Morgan Chase & Co",
          company_url: "https://www.jpmorgan.com/global",
          logo_path: "jp_logo.png",
          duration: "Feb 2020 - Jun 2020",
          location: "Remote",
          description:
            "For this program the aim was to create open source environment to gather Financial data from various peers. We had to organize collected data for the purpose of Data visualization. We had to build frontend web application for the same and collate the output of the pre processed data coming from the data visualization algorithms",
          color: "#ee3c26",
        },
        {
          title: "Accenture Discovery Intern",
          company: "Accenture",
          company_url: "https://www.accenture.com/",
          logo_path: "accenture-logo.png",
          duration: "Nov 2019 - Jun 2020",
          location: "Remote",
          description:
            "I have worked on project of predicting user journey based on previous data. There were two objectives: (1) To build a forecasting engine to predict user journey and to re design the approach. (2) To embed feature in the model which can explain the seasonal major changes in user journey based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Microsoft Student Intern",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - Jun 2020",
          location: "Remote",
          description:
            "Microsoft Student Intern is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have gained hands on experience through workshops and seminars to about Cloud Computing concepts.",
          color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     // {
    //     //   title: "Google Explore ML Facilitator",
    //     //   company: "Google",
    //     //   company_url: "https://about.google/",
    //     //   logo_path: "google_logo.png",
    //     //   duration: "June 2019 - April 2020",
    //     //   location: "Hyderabad, Telangana",
    //     //   description:
    //     //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //     //   color: "#4285F4",
    //     // },
    //     // {
    //     //   title: "Microsoft Student Partner",
    //     //   company: "Microsoft",
    //     //   company_url: "https://www.microsoft.com/",
    //     //   logo_path: "microsoft_logo.png",
    //     //   duration: "Aug 2019 - May 2020",
    //     //   location: "Hyderabad, Telangana",
    //     //   description:
    //     //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //     //   color: "#D83B01",
    //     // },
    //     // {
    //     //   title: "Mozilla Campus Captain",
    //     //   company: "Mozilla",
    //     //   company_url: "https://www.mozilla.org/",
    //     //   logo_path: "mozilla_logo.png",
    //     //   duration: "Oct 2019 - May 2020",
    //     //   location: "Kurnool, Andhra Pradesh",
    //     //   description:
    //     //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //     //   color: "#000000",
    //     // },
    //     // {
    //     //   title: "Developer Students Club Member",
    //     //   company: "DSC IIITDM Kurnool",
    //     //   company_url:
    //     //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //     //   logo_path: "dsc_logo.png",
    //     //   duration: "Jan 2018 - May 2020",
    //     //   location: "Kurnool, Andhra Pradesh",
    //     //   description:
    //     //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //     //   color: "#0C9D58",
    //     // },
    //     // {
    //     //   title: "Developer Program Member",
    //     //   company: "Github",
    //     //   company_url: "https://github.com/",
    //     //   logo_path: "github_logo.png",
    //     //   duration: "July 2019 - PRESENT",
    //     //   location: "Work From Home",
    //     //   description:
    //     //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //     //   color: "#181717",
    //     // },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Fullstack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactMailDark.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://tarunsastry99.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Chennai, Tamil Nadu",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/DKywnTNkoqfx3Tor6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 63743 85023",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  //degrees,
  //certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
