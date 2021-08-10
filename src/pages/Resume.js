// Import dependencies
import React from "react";

// Import pdf cv file
// import Cv from "../images/Andres-Plasencia-Borja(2).pdf";

const Resume = () => {
  return (
    <div
      className="resume-div"
      style={{ width: "50%", marginLeft: "27.5%", marginBottom: "2.5%" }}
    >
      <h1>Resume</h1>
      <a href="https://drive.google.com/file/d/1_fgwtW93VDDBmUvKkV6r9Pxt-nfzVzOf/view?usp=sharing" style={{ fontSize: "larger"}} download>
        Download my Resume
      </a>
      <h3 style={{ marginTop: "2.5% "}} >Front-end Proficienties</h3>
      <ul className="list-group list-group-flush">
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          HTML
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          CSS
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          JavaScript
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          jQuery
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          Responsive design
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          React
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          Bootstrap
        </li>
      </ul>

      <h3 style={{ marginTop: "1.5% "}}>Back-end Proficienties</h3>
      <ul className="list-group list-group-flush">
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          APIs
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          Node
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          Express
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          MySQL, Sequelize
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          MongoDB, Mongoose
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          REST
        </li>
        <li
          className="list-group-item"
          style={{ backgroundColor: "#151B25", color: "#87aca3" }}
        >
          GraphQL
        </li>
      </ul>
    </div>
  );
};

export default Resume;
