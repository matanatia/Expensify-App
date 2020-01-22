import React, { useState, useEffect } from "react";
import "./Create.css";

const Create = props => {
  const [title, setTitle] = useState("Create component work");

  return <div className="Create">{title}!!</div>;
};

export default Create;
