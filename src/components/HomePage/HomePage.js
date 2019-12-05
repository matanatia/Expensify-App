import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = props => {
  const [title, setTitle] = useState("HomePage component work");

  useEffect(() => {});

  return <div className="HomePage">{title}!!</div>;
};

HomePage.defaultProps = {};

export default HomePage;
