// Import dependencies
import React from "react";

// Import images
import Law from "../images/lawyer.jpg";
import Weather from "../images/weather.jpg";
import Trading from "../images/europe.jpg";
import Readme from "../images/generator.jpg";
import Employee from "../images/office.jpg";
import Yoga from "../images/yoga.jpg";
import Github from "../images/github.png";
import Gitlab from "../images/gitlab.png";

const Portfolio = () => {
  return (
    <div
      className="row row-cols-1 row-cols-md-2 g-4 mt-3 mb-3"
      style={{ width: "80%", marginLeft: "9%" }}
    >
      <div className="col">
        <div className="card" style={{ border: "#151B25" }}>
          <a href="https://iglesiasyabogados.com/">
            <img src={Law} className="card-img-top" alt="law" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Iglesias and lawyers</h5>
            <p className="card-text">
              In this front end and backend proyect, builded with the power of
              Node Js, html, css, and javascript the user can go to a fully
              responsive webpage to contact an attorney in Mexico City.
            </p>
            <a href="https://github.com/ANDRESPLASENCIABORJA/Iglesias-app">
              <img src={Github} alt="github" width="30" />
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ border: "#151B25" }}>
          <a href="https://fierce-chamber-39438.herokuapp.com/">
            <img src={Weather} className="card-img-top" alt="weather" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Rubio Special Machines</h5>
            <p className="card-text">
              If you want to hire amazing machine services then you should take
              a look at this amazing enterprize located in Mexico City. Builded
              with the power of Material Design Bootstrap and React this webpage
              will take you into a material jurney.
            </p>
            <a href="https://git.mdbgo.com/Borja98Loc/maquinados-especiales">
              <img src={Gitlab} alt="gitlab" width="30" />
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ border: "#151B25" }}>
          <a href="https://warm-shelf-78514.herokuapp.com/">
            <img src={Trading} className="card-img-top" alt="trading" />
          </a>
          <div className="card-body">
            <h5 className="card-title">International Lawyers</h5>
            <p className="card-text">
              You want to adquire another Nationality? Then take a look at this
              page and acopmplish your dream of having more then one
              nationality. Builded with the power of React and Bootstrap.
            </p>
            <a href="https://git.mdbgo.com/Borja98Loc/international-lawyers">
              <img src={Gitlab} alt="gitlab" width="30" />
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ border: "#151B25" }}>
          <a href="https://drive.google.com/file/d/1Q46FNwmqgzT7bbzhpzx8XBljBOsGKmeA/view">
            <img src={Readme} className="card-img-top" alt="readme" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Readme Generator</h5>
            <p className="card-text">
              This backend app is perfect for developers, just go to my code, or
              watch the video tuttorial to generate a professional readme
              powered by inquirer npm package, node.js an javascript.
            </p>
            <a href=" https://github.com/ANDRESPLASENCIABORJA/README-Generator">
              <img src={Github} alt="linkedin" width="30" />
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ border: "#151B25" }}>
          <a href="https://github.com/ANDRESPLASENCIABORJA/Employee-Traker">
            <img src={Employee} className="card-img-top" alt="employee" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Employee Tracker</h5>
            <p className="card-text">
              You have a company and you want to keep track of all your new
              employees? Then try the employee tracker app! Fully backend app
              powered by inquirer, Node JS and javascript will help the user to
              keep organized their company and their employees. Go to my code,
              watch the video tuttorial and try it.
            </p>
            <a href="https://github.com/ANDRESPLASENCIABORJA/Employee-Traker">
              <img src={Github} alt="linkedin" width="30" />
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ border: "#151B25" }}>
          <a href="https://damp-dawn-28515.herokuapp.com/">
            <img src={Yoga} className="card-img-top" alt="yoga" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Yoga Studio</h5>
            <p className="card-text">
              Want to know a great yoga academy in Mexico City? Then you sould
              visit the Yoga Studio! In this collaborative proyect powered by
              MYSQL, Node JS, javascript, handlebars and css we created a
              interactive webpage for a Yoga Academy. Hope you enjoy it!
            </p>
            <a href="https://github.com/Enrique246/yoga-project">
              <img src={Github} alt="linkedin" width="30" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
