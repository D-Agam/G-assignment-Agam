import React from "react";
import turner from "./images/turner.png";
import samsung from "./images/samsung.png";
import parsons from "./images/parsons.png";
import depa from './images/depa.webp';
import wsp from './images/wsp.png';
import arabtec from './images/arabtec.png';
import arch from './images/arch.webp';
import asgc from './images/asgc.png';
import acg from './images/acg.webp';
function Client(props) {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: "50px",
          textAlign: "right",
          marginRight: "1020px",
        }}
      >
        Our
        <span
          style={{
            textDecoration: "underline",
            textDecorationColor: "#FF7900",
          }}
        >
          &nbsp;Clients
        </span>
      </h1>
      <br></br>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <img src={turner} className="d-block w-100" alt="..." />{" "}
                </div>
                <div className="col-sm">
                  <img src={samsung} className="d-block w-100" alt="..." />{" "}
                </div>
                <div className="col-sm">
                  <img src={parsons} className="d-block w-100" alt="..." />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-sm">
                <img src={depa} className="d-block w-100" alt="..." />
                </div>
                <div className="col-sm">
                <img src={arabtec} className="d-block w-100" alt="..." />
                </div>
                <div className="col-sm">
                <img src={wsp} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="container">
              <div className="row">
                <div className="col-sm">
                <img src={arch} className="d-block w-100" alt="..." />
                </div>
                <div className="col-sm">
                <img src={asgc} className="d-block w-100" alt="..." />
                </div>
                <div className="col-sm">
                <img src={acg} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
<br></br>;
