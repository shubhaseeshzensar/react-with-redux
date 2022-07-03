const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 3,
    category: "JavaScript",
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 2,
    category: "JavaScript",
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 2,
    category: "JavaScript",
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices",
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture",
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 2,
    category: "Career",
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 3,
    category: "HTML5",
  },
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/courses", (req, res) => {
  let course = courses;
  if (!course) res.status(404).send("courses not found.");
  res.send(course);
});

// sends only one courses info associated with the id
app.get("/api/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The given ID was not found.");
  res.send(course);
});

// post method

// app.post("/api/courses/", (req, res) => {
//   const course = {
//     id: Math.random(),
//     title: "Web Component Fundamentals",
//     slug: "web-components-shadow-dom",
//     authorId: 3,
//     category: "HTML5",
//   };
//   const newCourses = { ...course, course };
//   res.send(newCourses);
// });

//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
