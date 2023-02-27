import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="title">Namaste react</h1>;

const HeaderComponent = () => {
  return (
    <div>
      {Title()}
      <h2>Namaste React functional component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//async defer
root.render(<HeaderComponent />);
