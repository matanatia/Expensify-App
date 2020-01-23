import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = props => {
  const title = "404!";

  return (
    <div className="NotFoundPage">
      {title}!! - <Link to="/">Go Home</Link>
    </div>
  );
};

NotFoundPage.defaultProps = {};

export default NotFoundPage;
