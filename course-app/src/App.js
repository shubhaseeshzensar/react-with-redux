import React, { Fragment, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./common/header-component";
import Home from "./components/home/home-page.component";
import PageNotFound from "./components/page-not-found/page-not-found.component";
import Courses from "./components/courses/courses.component";
import About from "./components/about/about-page.component";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCourse } from "./store/course/course.action";
import { selectCourses } from "./store/course/course.selector";

const baseURL = `http://localhost:5000/api/courses`;


function App() {
  const dispatch = useDispatch()
  const courses = useSelector(selectCourses)

  useEffect(()=>{
    axios.get(baseURL).then(
      res => {
        console.log(res.data)
        dispatch(setCourse(res.data, courses))
      }
    )
  },[])
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Fragment>
  );
}

export default App;
