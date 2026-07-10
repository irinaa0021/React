import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);
const button = React.createElement("button", { "data-id": 123 }, "Me gusta 1");
const button2 = React.createElement("button", { "data-id": 456 }, "Me gusta 2");
const button3 = React.createElement("button", { "data-id": 789 }, "Me gusta 3");

const div = React.createElement(React.Fragment, null, [
  button,
  button2,
  button3,
]);

root.render(div);
