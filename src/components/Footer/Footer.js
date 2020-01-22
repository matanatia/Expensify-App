import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = props => {
  const [title, setTitle] = useState("Footer component work");

  return <div className="Footer">{title}!!</div>;
};

export default Footer;
