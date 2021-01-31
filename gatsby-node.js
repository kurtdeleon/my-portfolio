const data = require("./src/data/projects.js");

exports.createPages = ({ actions: { createPage } }) => {
  const { projects, selectedProjects } = data;

  //Creates homepage
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/home.js"),
    context: { selectedProjects },
  });

  //Creates index of projects
  createPage({
    path: `project-list`,
    component: require.resolve("./src/templates/project-list.js"),
    context: { projects },
  });

  //Creates a page for each project entry
  projects.forEach(project => {
    createPage({
      path: `project/${project.id}`,
      component: require.resolve("./src/templates/project.js"),
      context: { project },
    });
  });

  //Creates 404 page and replaces default one
  createPage({
    path: `/404`,
    component: require.resolve("./src/templates/404.js"),
  });
};
