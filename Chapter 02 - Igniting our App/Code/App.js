import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h2",
  { key: "head1" },
  "Heading 1 created using react"
);
const heading2 = React.createElement(
  "h2",
  { key: "head2" },
  "Heading 2 created using react"
);
const container = React.createElement("div", {}, [heading1, heading2]);
const rootReactContainer = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(rootReactContainer);
rootContainer.render(container);
