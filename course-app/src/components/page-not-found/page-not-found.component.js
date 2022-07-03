import React from "react";
import { useNavigate } from "react-router-dom";
import "./page-not-found.styles.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/");
  };
  return (
    <div className="error-page">
        <button onClick={goBackHandler} className='error-page-button'>
          Go To Home !
        </button>
     
    </div>
  );
};

export default PageNotFound;
