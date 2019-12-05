import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = props => {
  const [title, setTitle] = useState("Footer component work");

  useEffect(() => {});

  return <div className="Footer">{title}!!</div>;
};

Footer.defaultProps = {};

export default Footer;
