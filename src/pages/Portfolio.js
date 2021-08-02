// Import dependencies
import React from "react";

// Import images
import Law from "../images/lawyer.jpg";
import Weather from "../images/weather.jpg";
import Trading from "../images/trading.jpg";
import Readme from "../images/generator.jpg";
import Employee from "../images/office.jpg";
import Yoga from "../images/yoga.jpg";
import Github from "../images/github.png";

const Portfolio = () => {
  return (
    <div
      className="row row-cols-1 row-cols-md-2 g-4 mt-3 mb-3"
      style={{ width: "80%", marginLeft: "9%" }}
    >
      <div className="col">
        <div className="card" style={{ border: "#151B25" }}>
          <a href="https://iglesias-and-associates.herokuapp.com/">
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
              <img src={Github} alt="linkedin" width="30" />
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ border: "#151B25" }}>
          <a href="https://andresplasenciaborja.github.io/Weather-Dashboard/">
            <img src={Weather} className="card-img-top" alt="weather" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Weather Dashboard</h5>
            <p className="card-text">
              You want to take a walk outside? Check how is the weather! In this
              fully responsive app with the usage of javascript, html, css and
              server side APIS the user can search for the weather of their
              city.
            </p>
            <a href="https://github.com/ANDRESPLASENCIABORJA/Weather-Dashboard">
              <img src={Github} alt="linkedin" width="30" />
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ border: "#151B25" }}>
          <a href="https://danrub98.github.io/BM-Trade-Analysis/">
            <img src={Trading} className="card-img-top" alt="trading" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Bank of Mexico Trade Analyst</h5>
            <p className="card-text">
              If you are a trader, or you just want to know how the Exchange
              rate of the BOM is doing. Then this collaborative app is great for
              you, powered by html, javascript, APIS and css the user can search
              for historical exchange rates and more.
            </p>
            <a href=" https://github.com/Danrub98/BM-Trade-Analysis">
              <img src={Github} alt="linkedin" width="30" />
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
