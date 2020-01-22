import React, { useState, useEffect } from "react";
import "./Help.css";

const Help = props => {
  const [title, setTitle] = useState("Help component work");

  return <div className="Help">{title}!!</div>;
};

export default Help;
