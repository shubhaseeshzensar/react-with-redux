import { COURSE_ACTION_TYPES } from "./course.type";
import { createAction } from "../../utils/reducer-utils";

export const setIsCoursesShown = (boolean) =>
  createAction(COURSE_ACTION_TYPES.SET_IS_COURSE_SHOWN, boolean);

const addCourse = (courses, courseToAdd) => {
  return [...courses, { ...courseToAdd }];
};

export const setCourse = (courses, courseToAdd) => {
  const newCourses = addCourse(courses, courseToAdd);
  return createAction(COURSE_ACTION_TYPES.SET_COURSE, newCourses);
};
