import React from "react";
import CourseForm from "./course-form/course-form.component";
import CourseList from "./course-list/course-list.component";
import { useSelector } from "react-redux";
import { selectCourses } from "../../store/course/course.selector";
import { selectIsCoursesShown } from "../../store/course/course.selector";
import './courses.styles.css';


const Courses = () => {
  const isCourseShown = useSelector(selectIsCoursesShown);
  const courses = useSelector(selectCourses);

  return (
    <div className="courses-container">
      {/* <h2>Add New Courses Here...</h2> */}
      <CourseForm />
      {isCourseShown ? (
        <CourseList courses={courses} />
      ) : (
        <h3></h3>
      )}
    </div>
  );
};

export default Courses;
