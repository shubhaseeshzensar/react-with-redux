import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectCourses,
  selectIsCoursesShown,
} from "../../../store/course/course.selector";
import {
  setCourse,
  setIsCoursesShown,
} from "../../../store/course/course.action";
import "./course-form.styles.css";

const CourseForm = () => {

  const courses = useSelector(selectCourses);
  const isCourseShown = useSelector(selectIsCoursesShown);
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState({
    enteredcourseTitle: "",
    enteredcourseAuthorId: "",
    enteredcourseCategory: "",
  });

  const courseTitleHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredcourseTitle: event.target.value };
    });
  };

  const courseAuthorIdHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredcourseAuthorId: event.target.value };
    });
  };

  const courseCategoryHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredcourseCategory: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const courseToAdd = {
      id: Math.random(),
      title: userInput.enteredcourseTitle,
      authorId: userInput.enteredcourseAuthorId,
      category: userInput.enteredcourseCategory,
    };
    dispatch(setCourse(courses, courseToAdd));

    setUserInput(() => {
      return {
        enteredcourseTitle: "",
        enteredcourseAuthorId: "",
        enteredcourseCategory: "",
      };
    });
  };
  const courseShownHandler = () => {
    dispatch(setIsCoursesShown(!isCourseShown));
  };

  return (
    <form onSubmit={submitHandler} className="form-container">
      <div className="control">
        <label>Course Title</label>
        <input
          value={userInput.enteredcourseTitle}
          type="text"
          onChange={courseTitleHandler}
        />
      </div>
      <div className="control">
        <label>Course Author ID</label>
        <input
          type="text"
          value={userInput.enteredcourseAuthorId}
          onChange={courseAuthorIdHandler}
        />
      </div>
      <div className="control">
        <label>Course Category</label>
        <input
          type="text"
          value={userInput.enteredcourseCategory}
          onChange={courseCategoryHandler}
        />
      </div>
      <div className="action">
        <button type="submit" className="button">
          Add New Course
        </button>
        <button type="button" onClick={courseShownHandler} className="button">
          {!isCourseShown ? `Show Courses` : `Hide Courses`}
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
