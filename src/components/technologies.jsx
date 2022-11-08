import React from "react";
import "../styles/technologies.css";
import Techn from "./techn";
import npmImg from "../images/npm.svg";
import reactImg from "../images/reactjs.png";
import jsImg from "../images/js.png";
import gitImg from "../images/git.png";
import htmlImg from "../images/HTML.png";
import cssImg from "../images/css.png";
import nodeImg from "../images/NodeJS.png";
import mongoImg from "../images/mongo.png";
import tsImg from "../images/ts.png";

export default function Technologies() {
  return (
    <div className="tech-container">
      <div className="topath" id="skillset"></div>
      <h2 className="abm-h2">SKILLSET</h2>
      <div className="columns-skillset">
        <div className="div-skillset">
          <Techn img={npmImg} text="npm" color="#cb3837cc" />
          <Techn img={reactImg} text="React" color="#00d8ffb8" />
          <Techn img={jsImg} text="JavaScript" color="#f7df1ead" />
          <Techn img={gitImg} text="git" color="#f05133b8" />
          <Techn img={tsImg} text="TypeScript" color="#3178C6" />
        </div>
        <div className="div-skillset">
          <Techn img={mongoImg} text="MongoDB" color="#81C564b8" />
          <Techn img={cssImg} text="CSS" color="#0c73b8b8" />
          <Techn img={htmlImg} text="HTML" color="#f05133b8" />
          <Techn img={nodeImg} text="NodeJS" color="#3e863dcf" />
        </div>
      </div>
    </div>
  );
}
