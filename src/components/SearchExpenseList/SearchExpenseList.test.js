import React from "react";
import ReactDOM from "react-dom";
import SearchExpenseList from "./SearchExpenseList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchExpenseList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
