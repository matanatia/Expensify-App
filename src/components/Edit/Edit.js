import React, { useState, useEffect } from "react";
import "./Edit.css";

const Edit = props => {
  const [error, isError] = useState(false);

  useEffect(() => {});

  return (
    <div className="Edit">
      Editing the expanse wite the id of {props.match.params.id}!!
    </div>
  );
};

Edit.defaultProps = {};

export default Edit;
