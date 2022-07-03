import React, { Fragment } from "react";
import "./home-page.styles.css";
import courseImage from "../../assets/courses.jpg";
const Home = () => {
  return (
    <Fragment>
      <div className="home-container">
        <h2>Welcome To Courses Plus</h2>
        <p>
          Unlimited access to 7,000+ world-class courses, hands-on projects, and
          job-ready certificate programs, for one all-inclusive subscription
          price.
        </p>
      </div>
      <div className="main-image">
        <img src={courseImage} alt="course-image" />
      </div>
    </Fragment>
  );
};

export default Home;
