import React from "react";
import "../styles/mainName.css";

export default function MainName({ children }) {
  return (
    <div className="main-name-container">
      <h1 className="main-name">{children}</h1>
    </div>
  );
}
