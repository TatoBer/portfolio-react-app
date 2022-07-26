import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <small>
        Developed and designed by Tato Bernardini. 2022 All rights reserved.
      </small>
      <small>
        <a
          target="_blank"
          href="https://github.com/TatoBer/portfolio-react-app"
        >
          Repository
        </a>{" "}
        | <a href="#contact">Contact me</a>
      </small>
    </footer>
  );
}
