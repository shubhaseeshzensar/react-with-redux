import { createSelector } from "reselect";


const selectCourseReducer = (state) => state.courseReducer


export const selectCourses = createSelector(
  [selectCourseReducer],
  (course) => course.courses
)

export const selectIsCoursesShown = createSelector(
  [selectCourseReducer],
  (course) => course.isCourseShown
)

export const selectInitialCourses = createSelector(
  [selectCourseReducer],
  (course) => course.setCourse
)
