import React from "react";

import Andres from "../images/APB-IMAGE.jpeg";

const About = () => {
  return (
    <main>
      <div className="container-fluid mx-auto" style={{ width: "275px" }}>
        <div className="text-center ">
          <div
            className="card text-white "
            style={{ width: "15rem", backgroundColor: "#151B25", border: "none" }}
          >
            <img src={Andres} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3 className="card-text">Who is this guy</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 of the main webpage with text */}
      <figure
        className="container-fluid text-center"
        style={{ width: "80%", marginTop: "0.5%" }}
      >
        <blockquote className="blockquote">
          <p>
            Full Stack Web Developer graduated from Tecnológico de Monterrey in
            Mexico City, with a great passion for Front end and Back end Web
            Development, with hunger of work and get things done with the best
            practices and structures, working until the goals of each project
            are accomplished, never giving up and always improving it's coding
            skills.
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Isaac Newton{" "}
          <cite title="Source Title">
            If I have seen further is by standing on the shoulders of gigants
          </cite>
        </figcaption>
      </figure>
    </main>
  );
};

export default About;
