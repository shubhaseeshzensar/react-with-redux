import { COURSE_ACTION_TYPES } from "./course.type";



const COURSE_INITIAL_STATE = {
  isCourseShown: false,
  courses: []
};

export const courseReducer = (state = COURSE_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case COURSE_ACTION_TYPES.SET_COURSE: {
      return {
        ...state,
        courses: payload,
      };
    }
    case COURSE_ACTION_TYPES.SET_IS_COURSE_SHOWN: {
      return {
        ...state,
        isCourseShown: payload,
      };
    }
    default:
      return state;
  }
};
