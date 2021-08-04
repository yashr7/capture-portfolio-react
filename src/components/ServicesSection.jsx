import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={clock} alt="clock" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={teamwork} alt="teamwork" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={diaphragm} alt="diaphragm" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={money} alt="money" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </h2>
      </div>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </div>
  );
}

export default ServicesSection;
