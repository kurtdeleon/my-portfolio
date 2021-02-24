const selectedProjects = ["surgery-scheduler", "talab"];

const projectsData = [
  {
    id: "surgery-scheduler",
    title: "Surgery Scheduler",
    subtitle: "Turning a Java App into a PWA",
    tags: ["Web Development", "React"],
    summary:
      "A progressive web application made with React. The app will be used by hospital staff to schedule the use of facilities, equipment, and human resources. Previous schedules and bookings can also be viewed and edited on the fly.",
    infoList: [
      {
        title: "Technologies",
        items: ["React", "Java (Spring/Hibernate)", "Apache"],
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
              "To deal with the growing need for modernized platforms, I was tasked to reconstruct a PWA version of a scheduler program originally run on Java code. Due to time constraints, the API used for the application ran on Spring, which calls and reuses back-end code from the original application.",
          },
          {
            tag: "p",
            content:
              "At the start of the development, our two-man team decided to make use of React for the project as it seemed to fit the requirements. We also decided to go with a UI framework, which in this case is AntDesign, instead of making an in-house one so that we could get started quickly.",
          },
          {
            tag: "p",
            content:
              "For now, I'm only tasked to re-create the most basic functions of the application to start with, and that mostly includes viewing, creating, and editing schedules.",
          },
        ],
      },
      {
        title: "Development",
        body: [
          {
            tag: "p",
            content:
              "The first thing we started with is the Dashboard, which contains a calendar that displays schedules depending on the selected date and facility users want to view. Using this calendar, users can drag and drop schedules, as well as resize schedules to manage and adjust timings depending on the need.",
          },
          {
            tag: "p",
            content:
              "Users are also allowed to click on schedules to open a drop-down menu which contains actions for modifying schedules, such as locking them into place, as well as removing them from the final output.",
          },
          {
            tag: "img",
            content: "calendar.jpg",
            alt: "Text",
          },
          {
            tag: "p",
            content:
              "Aside from the actions displayed in the drop-down menus, users can also open and view schedules, as well as update values depending on what is needed. Various properties that are dependent on editable values are also displayed on these screens.",
          },
          {
            tag: "img",
            content: "open_cancel.png",
            alt: "Text",
          },
          {
            tag: "p",
            content:
              "Lastly, the users can also access a Scheduler Wizard, which allows them to create schedules by querying user data from the back-end. Most of the values on the forms are queried from the API as there are complex rules and conditions that are taken into consideration when querying if human and equipment resources are available or not.",
          },
          {
            tag: "img",
            content: "booking_wizard.jpg",
            alt: "Text",
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
      "TALAB is a one-day event that required an enlistment and information website to be used by the Loyola Schools student body. This is a joint project of Ateneo's User Experience Society (UXS) and Computer Society of the Ateneo (CompSAt).",
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
        url: "https://talab.ateneo.edu/infosite",
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
              "TALAB is an annual one-day event held by the Ateneo to give its students a platform to learn and contemplate on the pressing issues of today and tomorrow. Lectures are held by various instructors and renowned speakers in their respective fields, and students are given the chance to choose and enlist in whatever classes that piqued their interest.",
          },
          {
            tag: "p",
            content:
              "Initially, the Ateneo Integrated Student Information System (AISIS), which was used for the enlistment of classes, was planned to be used as the platform for TALAB. Unfortunately, it didn't work out due to unforeseen circumstances. Instead, they employed the help of a group of developers and designers (which I was part of) that could help create an enlistment website for TALAB.",
          },
        ],
      },
      {
        title: "Designing Process",
        body: [
          {
            tag: "p",
            content:
              "Before we started development, we had a co-design session with User Experience Society. The session included brainstorming of ideas on how to make the enlistment site an upgrade from the usual shenanigans AISIS makes students go through.",
          },
          {
            tag: "p",
            content:
              "There was also a brief design studio session, where we talked about features and implementations that we wanted to see. Some notable ones include equal distributions of slots across batches, single-click enlistment, and how to properly manage server load. Components of the website were debated on, and critiques had to be exchanged for each designing group.",
          },
          {
            tag: "img",
            content: "codesign_session.jpg",
            alt: "Text",
          },
          {
            tag: "p",
            content:
              "I personally think having this session is one of the key reasons why the TALAB enlistment was so successful in the first place.",
          },
        ],
      },
      {
        title: "Development",
        body: [
          {
            tag: "p",
            content:
              "Once development started, we split ourselves according to what we're most familiar with. I, along with another dev, got the front-end job for the information site. Our main tasks were to create the landing pages, as well as the FAQs and batch number checking page.",
          },
          {
            tag: "img",
            content: "infosite.png",
            alt: "Text",
          },
          {
            tag: "p",
            content:
              "For the succeeding school year (2nd TALAB), we were to maintain the enlistment website, as well as create an admin page. I was also given the extra task of making a to-do list type of app that was used for the registrations of the out-of-school tour classes.",
          },
          {
            tag: "img",
            content: "enlistment.jpg",
            alt: "Text",
          },
        ],
      },
      {
        title: "Results",
        body: [
          {
            tag: "p",
            content:
              "Fortunately, the creation of the enlistment sites was a success. People were praising our team, and were even comparing what we made to AISIS. It wasn't perfect as there were a significant amount of students who encountered issues, but it was a good first step towards a better enlistment system for Ateneo.",
          },
          {
            tag: "p",
            content:
              "Hopefully, in the future, AISIS can also implement some of the features we made for TALAB. One feature I would definitely love to see is the implementation of the fair distribution of class slots among batches.",
          },
          {
            tag: "img",
            content: "tweets.png",
            alt: "Text",
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
      "The stigmatization of mental illnesses has existed all throughout the history of humanity, and is still present today. Madman aims to raise awareness of the real nature of schizophrenia by simulating key symptoms of the disorder, such as visual and auditory hallucinations.",
    infoList: [
      {
        title: "Technologies",
        items: ["Unity (C++)", "HTC Vive / SteamVR", "Blender"],
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
        url: "",
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
              "Even before I got into programming, horror games have always interested me. So when I did finally formally pick up game development in college as a specialization in my course, I decided that I wanted to make one for my dissertation. Thankfully, I found a group of people that would be interested in doing the same thing.",
          },
          {
            tag: "p",
            content:
              'The idea of making the game revolve around symptoms of schizophrenia came later on, when I found out that one of the most vulnerable groups in the country today are people who suffer from mental illnesses. I found it extremely ironic considering that "taong grasa (madmen)" are usually people who are associated with being dangerous. And so our group decided to act on our desire to help by developing this game.',
          },
          {
            tag: "img",
            content: "gate.jpg",
            alt: "Text",
          },
        ],
      },
      {
        title: "Development",
        body: [
          {
            tag: "p",
            content:
              "Our thesis group decided that making the game in VR would be interesting due to the nature of our study. Since we were under the guidance of Ateneo Laboratory for the Learning Sciences (ALLS), we made use of some of their equipment, which included an HTC VIVE and a powerful PC to run our game on. As a framework for the Vive, we were recommended by our instructor to go with SteamVR. As for the game engine, our group went for Unity as it was what we were more familiar with at the time.",
          },
          {
            tag: "p",
            content:
              "The game we agreed on had a fairly simple plot and goal that were both inspired heavily by the popular 2009 game, Slenderman. The users play as a patient with schizophrenia who works as a school janitor. The objective of the game is to fix multiple fuseboxes around the school while dealing with auditory and visual hallucinations.",
          },
          {
            tag: "img",
            content: "classroom.jpg",
            alt: "Text",
          },
          {
            tag: "p",
            content:
              "The main visual hallucination is depicted as a black entity that follows users around. Whenever the user gets close to this illusion, they experience a variety of camera effects (noise filters, mostly) and their schizophrenia level increases. This, in turn, make the voices in the player's head get louder, more frequent, and more aggressive.",
          },
          {
            tag: "img",
            content: "monster.jpg",
            alt: "Text",
          },
          {
            tag: "p",
            content:
              "Most of the testing were done by our group, since having other people play the game for us would break the safety rules set by facilities. Although we did get help from some of our batchmates for the voice acting in the game, and we're super appreciative of that.",
          },
          {
            tag: "img",
            content: "testing.jpg",
            alt: "Text",
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
              'MADMAN later on was awarded the <a class="link" href="http://penoy.admu.edu.ph/~alls/archives/5794 target="_blank" rel="noreferrer"">2019 SOSE Interlinks People\'s Choice Awards</a>. It was a fun journey!',
          },
          {
            tag: "img",
            content: "peoples_choice_awards.jpg",
            alt: "Text",
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
      "A small hobby project directly inspired by 10FastFingers. This simple typing game tests how fast you type and how well you do it. Made with React.",
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
        url: "https://react-typr.herokuapp.com/",
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
              'A few months ago, I was looking to hone my React skills by starting a new, small project that makes use of hooks. The idea ended up being a typing practice tool, which was directly inspired by <a class="link" href="https://10fastfingers.com/typing-test/english" target="_blank" rel="noreferrer"/>10FastFingers</a>, a popular typing test.',
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
            tag: "p",
            content:
              "The app ended up working fine and looking nice, although I opted to save the users' scores locally for now instead of storing it in a server. It's a project for practice, anyway!",
          },
          {
            tag: "img",
            content: "typr.png",
            alt: "Text",
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
      "A straightforward tool to randomly generate strings out of letters, numbers, and symbols. For extra security, this app allows its users to cross-check generated passwords to HaveIBeenPwned's Pwned Passwords database.",
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
        url: "https://react-typr.herokuapp.com/",
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
              'My main inspiration for making this small tool was the password generation tool for <a class="link" href="https://keepass.info/" target="_blank" rel="noreferrer">KeePass</a>, which is a secure password safe that I\'ve been using for years now. By choosing for a set of options to build a character set, one was able to generate secure, randomized password. I figured I could make something like this but for the web.',
          },
          {
            tag: "img",
            content: "keepass.png",
            alt: "Text",
          },
          {
            tag: "p",
            content:
              'Knowing that there\'s probably countless other password generators currently online, I\'d have to think of something unique that could make my app stand out. The idea that came to mind was to make use of <a class="link" href="https://haveibeenpwned.com/Passwords" target="_blank" rel="noreferrer">HaveIBeenPwned\'s Pwned Passwords database</a>, which could be accessed via their public API. This would allow users to cross-check their newly generated passwords to the database for extra security.',
          },
          {
            tag: "img",
            content: "p4ssw0rd.png",
            alt: "Text",
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
