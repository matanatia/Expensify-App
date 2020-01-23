import React from "react";
import "./Edit.css";

const Edit = props => {
  return (
    <div className="Edit">
      Editing the expanse wite the id of {props.match.params.id}!!
    </div>
  );
};

Edit.defaultProps = {};

export default Edit;
