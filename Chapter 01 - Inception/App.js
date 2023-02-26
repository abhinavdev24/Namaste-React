// Basic react element
const heading = React.createElement(
  "h2",
  { className: "greeting" },
  "Created using react"
);
const rootReact = document.getElementById("rootReact");
const root = ReactDOM.createRoot(rootReact);
root.render(heading);

// Nested elements
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
const rootReactContainer = document.getElementById("rootReactContainer");
const rootContainer = ReactDOM.createRoot(rootReactContainer);
rootContainer.render(container);
