import React from "react";
import ReactDom from "react-dom/client";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<TwitterFollowCard username={"midudev"} name={"Miguel Duran"} />);
