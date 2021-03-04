const selectedProjects = ["surgery-scheduler", "talab"];

const projectsData = [
  {
    id: "surgery-scheduler",
    title: "Surgery Scheduler",
    subtitle: "Turning a Java App into a PWA",
    tags: ["Web Development", "React"],
    summary:
      "A progressive web application made with React. The app will be used by hospital staff to schedule the use of facilities, equipment, and human resources. Scheduled operations can also be viewed and modified as needed.",
    infoList: [
      {
        title: "Technologies",
        items: ["React", "Java Spring", "MS SQL Server"],
      },
      {
        title: "Roles",
        items: ["Full-Stack Developer", "Designer"],
      },
    ],
    actions: [],
    chapters: [
      {
        title: "Background, Goals, and Limitations",
        body: [
          {
            tag: "p",
            content:
              "To keep up with the growing need for modern applications, I was tasked to reconstruct a Java applet into a PWA. Said application will be running on an API made in Spring, which calls and reuses back-end code from the original application. The purpose of this reconstruction won't be to fully replace the original program (not for now, at least) but to enable nurses and surgeons to schedule operations on tablets and mobile phones.",
          },
          {
            tag: "p",
            content:
              'Before we started development, our two-man team decided to make use of React for the project as it seemed to fit the requirements. We also decided to make use of a UI framework, which in this case is <a class="link" href="https://ant.design/" target="_blank" rel="noreferrer">AntDesign</a>, so that we could create a proof-of-concept as soon as possible.',
          },
          {
            tag: "p",
            content:
              "Since this app will only be an extension of the original program, only the most basic functions will be added for now. This includes creating, viewing, updating, and cancelling booked operations.",
          },
        ],
      },
      {
        title: "Development",
        body: [
          {
            tag: "p",
            content:
              "The first thing we started with was the Dashboard, which contains a calendar that displays operations depending on the selected date and the facility users select. Here, users will be able to drag and drop schedules, as well as resize them to manage and adjust timings depending on their need.",
          },
          {
            tag: "p",
            content:
              "Users are also allowed to click on booked operations to open a drop-down menu, which contains modification, such as finalizing their details, as well as cancelling them to temporarily remove them from the calendar view.",
          },
          {
            tag: "img",
            content: "calendar.jpg",
            alt: "The main calendar view of the app",
          },
          {
            tag: "p",
            content:
              "Aside from the actions displayed in the drop-down menus, users can also open and view schedules, as well as update values depending on what is needed. Various properties that are dependent on editable values are also displayed on these screens.",
          },
          {
            tag: "img",
            content: "open_cancel.png",
            alt:
              "Various features of the app, such as viewing details of operations, and the cancel booking feature",
          },
          {
            tag: "p",
            content:
              "Lastly, the users can access a Scheduler Wizard, which allows them to create and book operations by querying user data from the back-end. Most of the values on the forms are queried from the API as there are complex rules and conditions that are taken into consideration when querying if human and equipment resources are available or not. An example of this is the availability of a surgeon at a certain time period, which the system doesn't allow to prevent overlapping schedules.",
          },
          {
            tag: "img",
            content: "booking_wizard.jpg",
            alt: "Booking Wizard that allows users to schedule operations",
          },
        ],
      },
    ],
  },
  {
    id: "talab",
    title: "Talakayang Alay sa Bayan",
    subtitle: "An Enlistment System for the Loyola Schools",
    tags: ["Web Development"],
    summary:
      "An enlistment system and information website for TALAB, a one-day annual event hosted by the Loyola Schools. This is a joint project of Ateneo's User Experience Society (UXS) and Computer Society of the Ateneo (CompSAt).",
    infoList: [
      {
        title: "Technologies",
        items: ["HTML/CSS", "JavaScript", "Bootstrap"],
      },
      {
        title: "Roles",
        items: ["Front-end Developer"],
      },
    ],
    actions: [
      {
        url: "https://talab.ateneo.edu/",
        text: "View website",
      },
    ],
    chapters: [
      {
        title: "Background",
        body: [
          {
            tag: "p",
            content:
              "TALAB is an annual one-day event held by the Loyola Schools to give its students a platform to learn and contemplate on the pressing issues of today and tomorrow. Lectures are held by various instructors and renowned speakers in their respective fields, and students are given the chance to choose and enlist in whatever classes that piqued their interest.",
          },
          {
            tag: "p",
            content:
              'The <a class="link" href="https://aisis.ateneo.edu/" target="_blank" rel="noreferrer">Ateneo Integrated Student Information System (AISIS)</a>, which is used for the enlistment of classes, was initially planned to be used as the enlistment platform for TALAB. Unfortunately, it didn\'t work out due to unforeseen circumstances. To mitigate the issue, the administrators employed the help of a group of developers and designers (which I was a part of) that could help create an enlistment website for TALAB.',
          },
        ],
      },
      {
        title: "Designing Process",
        body: [
          {
            tag: "p",
            content:
              "Before we started development, we had a co-design session with some membors of the User Experience Society. The session included a brainstorming of ideas on how to make an enlistment website that fixed the problems and annoyances students faced when using AISIS.",
          },
          {
            tag: "img",
            content: "codesign_session.jpg",
            alt: "Co-design session between UXS and CompSAt",
          },
          {
            tag: "p",
            content:
              "There was also a brief design studio session, where we talked about some features and implementations that we wanted to see in the project. Some notable ones included equal distributions of slots across batches, single-click enlistment, and proper management of server load. Components and pages of the website were debated on, and critiques had to be exchanged for each designing group.",
          },
        ],
      },
      {
        title: "Development",
        body: [
          {
            tag: "p",
            content:
              "To start off the development, we split ourselves according to what technologies we were most familiar with. I, along with another dev, got the front-end tasks for the information site. Our main goals were to create the landing pages, as well as the FAQs and batch number checking page.",
          },
          {
            tag: "img",
            content: "infosite.png",
            alt: "An example of how the information site looked like",
          },
          {
            tag: "p",
            content:
              "For the second iteration of TALAB the following year, we were tasked to maintain the enlistment website, as well as create an admin page. I was also given the extra task of making a to-do list type of app that was used for the registrations of the out-of-school tour classes.",
          },
          {
            tag: "img",
            content: "enlistment.jpg",
            alt: "A view enlistment website from a guest's perspective",
          },
        ],
      },
      {
        title: "Results",
        body: [
          {
            tag: "p",
            content:
              "Fortunately, the creation of the enlistment system was a success. People were praising our team, and were even comparing what we made to AISIS. It wasn't perfect as there was a significant amount of students who encountered issues, but it was a good first step towards a better enlistment system for the Ateneo student body.",
          },
          {
            tag: "p",
            content:
              "Hopefully, in the future, AISIS can also implement some of the features we made for TALAB. One feature I would definitely love to see is the implementation of the fair distribution of class slots among batches.",
          },
          {
            tag: "img",
            content: "tweets.png",
            alt: "Some tweets tweeting praise of our work",
          },
        ],
      },
    ],
  },
  {
    id: "madman",
    title: "Madman",
    subtitle: "A Virtual Reality Psychological Horror Game",
    tags: ["Game Development"],
    summary:
      "Madman is a psychological horror game that aims to raise awareness of the real nature of schizophrenia by simulating key symptoms of the disorder, such as  hallucinations.",
    infoList: [
      {
        title: "Technologies",
        items: ["Unity (C#)", "HTC Vive / SteamVR", "Blender"],
      },
      {
        title: "Roles",
        items: ["Game Scripter", "Environment/Audio Designer", "Writer"],
      },
    ],
    actions: [
      {
        url: "https://github.com/Albdog/Madman",
        text: "View source code",
      },
      {
        url: "https://kurtdeleon.dev/MADMAN-Alcantara-deLeon-Jacinto.pdf",
        text: "Read Dissertation",
      },
    ],
    chapters: [
      {
        title: "Ideation",
        body: [
          {
            tag: "p",
            content:
              "Even before I got into programming, horror games have always interested me. So when I did finally formally pick up game development in college as a specialization FOR my course, I decided that I wanted to make one for my dissertation. Thankfully, I found a group of FRIENDS that would be interested in doing the same thing.",
          },
          {
            tag: "p",
            content:
              'The idea of making the game revolve around symptoms of schizophrenia came later on, when I found out that one of the most vulnerable groups in the country today are people who suffer from mental illnesses. I found it extremely ironic that the "taong grasa", who are usually people who most think are dangerous, are actually the ones who need help the most. And so our group decided to act on our desire to help by developing this game.',
          },
          {
            tag: "img",
            content: "gate.jpg",
            alt:
              "A picture of the gate, where the player spawns in at the start of the game",
          },
        ],
      },
      {
        title: "Development",
        body: [
          {
            tag: "p",
            content:
              "Our thesis group decided that making the game in VR would be interesting due to the nature of our study. Since we were under the guidance of Ateneo Laboratory for the Learning Sciences (ALLS), we made use of some of their equipment, which included an HTC VIVE and a powerful PC to render and run our game on. Madman ran on the Unity game engine, since it was what our group was most familiar with. As a framework for the Vive, we were recommended by our instructor to go with SteamVR.",
          },
          {
            tag: "p",
            content:
              "The game we agreed on had a fairly simple plot and goal that were heavily inspired by the popular 2009 game, Slenderman. The users get to play as a patient with schizophrenia who works as a school janitor. The objective of the game is to fix multiple fuseboxes around the school while dealing with auditory and visual hallucinations.",
          },
          {
            tag: "img",
            content: "classroom.jpg",
            alt: "A classroom, where players could possible find a fusebox in",
          },
          {
            tag: "p",
            content:
              "The main visual hallucination is depicted as a black entity that follows users around. Whenever the user gets close to this illusion, they experience a variety of camera effects (noise filters, mostly) and their schizophrenia level increases. This in turn makes the voices in the player's head, which make them sound louder, more frequent, and more aggressive.",
          },
          {
            tag: "img",
            content: "monster.jpg",
            alt: "The main visual hallucination that follows players around",
          },
          {
            tag: "p",
            content:
              "Most of the testing were done by our group, since having other people play the game for us would break the safety rules set by facilities. Although we did get help from some of our batchmates for the voice acting in the game, and we're super appreciative of that.",
          },
          {
            tag: "img",
            content: "testing.jpg",
            alt: "Testing being done at our groupmate's house",
          },
        ],
      },
      {
        title: "Results",
        body: [
          {
            tag: "p",
            content:
              "Once we finished the development, we started actual testing on people who would consent for a playthrough of the game. There were a lot of playtesters who enjoyed the experience, but unfortunately, the main takeaway was that we needed a lot more work to do to counteract the motion sickness effects because of VR. We also found out that other methods of virtual locomotion (in-game movement) was necessary to accommodate all types of players.",
          },
          {
            tag: "p",
            content:
              'MADMAN later on was awarded the <a class="link" href="http://penoy.admu.edu.ph/~alls/archives/5794" target="_blank" rel="noreferrer">2019 SOSE Interlinks People\'s Choice Awards</a>. It was a fun journey!',
          },
          {
            tag: "img",
            content: "peoples_choice_awards.jpg",
            alt:
              "Our group presenting our work to people going around the event",
          },
        ],
      },
    ],
  },
  {
    id: "typr",
    title: "Typr",
    subtitle: "A Minimalist Typing Practice Tool",
    tags: ["Web Development", "React"],
    summary:
      "A small hobby project made with React, and is directly inspired by 10FastFingers. This simple typing game that tests how fast you type and how well you do it.",
    infoList: [
      {
        title: "Technology",
        items: ["React"],
      },
      {
        title: "Role",
        items: ["Developer"],
      },
    ],
    actions: [
      {
        url: "https://react-typr.netlify.app/",
        text: "View website",
      },
      {
        url: "https://github.com/kurtdeleon/react-typr",
        text: "View source code",
      },
    ],
    chapters: [
      {
        title: "Development",
        body: [
          {
            tag: "p",
            content:
              'A few months ago, I was looking to hone my React skills by starting a new, small project that makes use of hooks. The idea ended up being a typing practice tool, directly inspired by <a class="link" href="https://10fastfingers.com/typing-test/english" target="_blank" rel="noreferrer"/>10FastFingers</a>, a popular typing test website.',
          },
          {
            tag: "p",
            content:
              'Basically, what the tool does is calculate how fast you type in words-per-minute (WPM) and how accurate you do it. Both of these are computed depending on how many characters you type accurately over a given time span, which in this case is sixty seconds. The equations used to compute for these were taken from <a class="link" href="https://www.speedtypingonline.com/typing-equations" target="_blank" rel="noreferrer">SpeedTypingOnline</a>.',
          },
          {
            tag: "p",
            content:
              "One thing that I planned on doing to separate my app from 10FastFingers was to make everything look dark and comfy, so everything is easy on the users' eyes. I also opted to display the WPM and Accuracy instead of only displaying it after the minute ends.",
          },
          {
            tag: "img",
            content: "typr.png",
            alt: "A screenshot of the main page of Typr",
          },
          {
            tag: "p",
            content:
              "The app ended up working fine and looking nice, although I opted to save the users' scores in localStorage for now instead of storing it in a server. Maybe in the future I can create a back-end system for it.",
          },
        ],
      },
    ],
  },
  {
    id: "p4ssw0rd",
    title: "p4ssw0rd",
    subtitle: "Secure Password Generator",
    tags: ["Web Development", "React"],
    summary:
      "A small, straightforward app that allows users to randomly generate strings out of character sets. For extra security, this tool allows its users to cross-check generated passwords to HaveIBeenPwned's Pwned Passwords database.",
    infoList: [
      {
        title: "Technology",
        items: ["React"],
      },
      {
        title: "Role",
        items: ["Developer"],
      },
    ],
    actions: [
      {
        url: "https://p4ssw0rd.netlify.app/",
        text: "View website",
      },
      {
        url: "https://github.com/kurtdeleon/p4ssw0rd",
        text: "View source code",
      },
    ],
    chapters: [
      {
        title: "Development",
        body: [
          {
            tag: "p",
            content:
              'My main inspiration for making this small tool was the password generation tool for <a class="link" href="https://keepass.info/" target="_blank" rel="noreferrer">KeePass</a>, which is a secure password safe that I\'ve been using for years now. By choosing for a set of options to build a character set, one was able to generate secure, randomized password. I figured I could make something like this but for the web.',
          },
          {
            tag: "p",
            content:
              'Knowing that there\'s probably countless other password generators currently online, I\'d have to think of something unique that could make my app stand out. The idea that came to mind was to make use of <a class="link" href="https://haveibeenpwned.com/Passwords" target="_blank" rel="noreferrer">HaveIBeenPwned\'s Pwned Passwords database</a>, which could be accessed via their public API. This would allow users to cross-check their newly generated passwords to the database for extra security.',
          },
          {
            tag: "img",
            content: "p4ssw0rd.png",
            alt: "A screenshot of p4ssw0rd in action",
          },
          {
            tag: "p",
            content:
              "The app right now looks sleek and minimalist, although I plan on building a dark/light mode switch for people who prefer bright websites over dark ones.",
          },
        ],
      },
    ],
  },
];

exports.projects = projectsData;

exports.selectedProjects = projectsData.filter(
  p => selectedProjects.indexOf(p.id) > -1
);
