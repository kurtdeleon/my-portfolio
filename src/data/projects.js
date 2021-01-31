const selectedProjects = ["sample-project", "sample-project-2"];

const projectsData = [
  {
    id: "sample-project",
    headerImg: "https://source.unsplash.com/random/500x300",
    title: "Sample Project",
    subtitle: "Next-gen project",
    tags: ["Game Development", "C# (Unity)"],
    summary:
      "Elit non aliquip commodo dolore pariatur duis. Magna ullamco esse magna non excepteur non deserunt irure. Consectetur proident id occaecat amet incididunt tempor est veniam ea. Eu incididunt enim et est ipsum culpa mollit. Consectetur nisi eiusmod dolore aute non officia est est adipisicing nostrud proident pariatur.",
    infoList: [
      {
        title: "Technologies",
        items: ["C++", "Kracken", "Bratoom"],
      },
      {
        title: "Roles",
        items: ["Software Developer", "Designer", "Cheerleader"],
      },
    ],
    actions: [
      {
        url: "https://google.com/",
        text: "Go to site #1",
      },
      {
        url: "https://yahoo.com/",
        text: "Go to site #2",
      },
    ],
    chapters: [
      {
        title: "Chapter 1",
        body: [
          {
            tag: "p",
            content:
              "Eiusmod labore id sunt excepteur veniam cupidatat magna duis eu velit est. Ex voluptate Lorem dolor et quis velit aliqua excepteur. Adipisicing consequat aliqua consequat non voluptate ad proident deserunt. In anim duis magna occaecat nisi commodo magna proident cupidatat laboris. Irure Lorem mollit occaecat eu incididunt aliquip deserunt pariatur culpa labore adipisicing. Quis magna eiusmod labore tempor Lorem dolore ea et dolor elit esse aliquip ullamco cupidatat. Labore Lorem nulla ex nostrud ut excepteur nisi commodo officia sit.",
          },
          {
            tag: "img",
            content: "https://source.unsplash.com/random/400x200",
            alt: "Text",
          },
          {
            tag: "p",
            content:
              "Eiusmod tempor sint non tempor. Velit anim labore laboris labore mollit consectetur. Ex ad eiusmod ut labore duis ad commodo non tempor proident nostrud voluptate. Est consequat esse qui aute ipsum labore sint ut proident adipisicing cupidatat est mollit. Commodo veniam exercitation proident eiusmod nulla dolore tempor proident velit. Occaecat incididunt pariatur magna irure deserunt ut sit excepteur duis consequat labore ut et nostrud.",
          },
        ],
      },
      {
        title: "Chapter 2",
        body: [
          {
            tag: "p",
            content:
              "Eiusmod labore id sunt excepteur veniam cupidatat magna duis eu velit est. Ex voluptate Lorem dolor et quis velit aliqua excepteur. Adipisicing consequat aliqua consequat non voluptate ad proident deserunt. In anim duis magna occaecat nisi commodo magna proident cupidatat laboris. Irure Lorem mollit occaecat eu incididunt aliquip deserunt pariatur culpa labore adipisicing. Quis magna eiusmod labore tempor Lorem dolore ea et dolor elit esse aliquip ullamco cupidatat. Labore Lorem nulla ex nostrud ut excepteur nisi commodo officia sit.",
          },
          {
            tag: "img",
            content: "https://source.unsplash.com/random/400x200",
            alt: "Text",
          },
          {
            tag: "p",
            content:
              "Eiusmod tempor sint non tempor. Velit anim labore laboris labore mollit consectetur. Ex ad eiusmod ut labore duis ad commodo non tempor proident nostrud voluptate. Est consequat esse qui aute ipsum labore sint ut proident adipisicing cupidatat est mollit. Commodo veniam exercitation proident eiusmod nulla dolore tempor proident velit. Occaecat incididunt pariatur magna irure deserunt ut sit excepteur duis consequat labore ut et nostrud.",
          },
        ],
      },
    ],
  },
  {
    id: "sample-project-2",
    headerImg: "https://source.unsplash.com/random/500x300",
    title: "Example Project",
    subtitle: "Last-gen project",
    tags: ["Web Design", "Figma"],
    summary:
      "Adipisicing ullamco ex elit deserunt duis aliquip est fugiat deserunt adipisicing officia. Proident Lorem enim consequat id ad enim minim incididunt. Lorem officia minim in elit deserunt nulla. Nulla est elit do minim reprehenderit magna fugiat veniam ut aliqua ipsum. Fugiat laborum laborum dolor velit magna dolor labore incididunt cupidatat ullamco.",
    infoList: [
      {
        title: "Technologies",
        items: ["C++", "Kracken", "Bratoom"],
      },
      {
        title: "Roles",
        items: ["Software Developer", "Designer", "Cheerleader"],
      },
    ],
    actions: [
      {
        url: "https://google.com/",
        text: "Go to site #1",
      },
      {
        url: "https://yahoo.com/",
        text: "Go to site #2",
      },
    ],
    chapters: [
      {
        title: "Chapter 1",
        body: [
          {
            tag: "p",
            content:
              "Laboris cupidatat proident consectetur consequat. Amet veniam quis dolor dolore. Eiusmod ipsum minim fugiat Lorem. Amet velit anim consectetur non laborum aliquip non consequat irure ipsum.",
          },
          {
            tag: "img",
            content: "https://source.unsplash.com/random/400x200",
            alt: "Text",
          },
          {
            tag: "p",
            content:
              "Eiusmod tempor sint non tempor. Velit anim labore laboris labore mollit consectetur. Ex ad eiusmod ut labore duis ad commodo non tempor proident nostrud voluptate. Est consequat esse qui aute ipsum labore sint ut proident adipisicing cupidatat est mollit. Commodo veniam exercitation proident eiusmod nulla dolore tempor proident velit. Occaecat incididunt pariatur magna irure deserunt ut sit excepteur duis consequat labore ut et nostrud.",
          },
        ],
      },
      {
        title: "Chapter 2",
        body: [
          {
            tag: "p",
            content:
              "Eiusmod labore id sunt excepteur veniam cupidatat magna duis eu velit est. Ex voluptate Lorem dolor et quis velit aliqua excepteur. Adipisicing consequat aliqua consequat non voluptate ad proident deserunt. In anim duis magna occaecat nisi commodo magna proident cupidatat laboris. Irure Lorem mollit occaecat eu incididunt aliquip deserunt pariatur culpa labore adipisicing. Quis magna eiusmod labore tempor Lorem dolore ea et dolor elit esse aliquip ullamco cupidatat. Labore Lorem nulla ex nostrud ut excepteur nisi commodo officia sit.",
          },
          {
            tag: "img",
            content: "https://source.unsplash.com/random/400x200",
            alt: "Text",
          },
          {
            tag: "p",
            content:
              "Eiusmod tempor sint non tempor. Velit anim labore laboris labore mollit consectetur. Ex ad eiusmod ut labore duis ad commodo non tempor proident nostrud voluptate. Est consequat esse qui aute ipsum labore sint ut proident adipisicing cupidatat est mollit. Commodo veniam exercitation proident eiusmod nulla dolore tempor proident velit. Occaecat incididunt pariatur magna irure deserunt ut sit excepteur duis consequat labore ut et nostrud.",
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
