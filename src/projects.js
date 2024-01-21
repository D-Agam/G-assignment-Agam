import React from "react";
import Caesar from "./images/caesar.jpg";
import doha from "./images/doha.jpg";
import flame from "./images/flame.jpg";
function Projects(props) {
  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: "50px",
          textAlign: "right",
          marginRight:"120px"
        }}
      >
        Our
        <span
          style={{
            textDecoration: "underline",
            textDecorationColor: "#FF7900",
          }}
        >
        &nbsp;Projects
        </span>
      </h1>
      <br></br>
      <div class="container" style={{paddingLeft:"120px"}}>
        <div class="row">
          <div class="col-sm">
            <div class="card" style={{ width: "18rem",height:"50px" }}>
              <img src={Caesar} class="card-img-top" alt="Caesar" />
              <div class="card-body">
                <p class="card-text">
                  This project requires wide range of product for different
                  condition. The Design Team of Genotek work closely with
                  Brookfield Multiplex in order properly select the right
                  product the meets the aesthetic requirements and produce
                  maximum functionability
                </p>
                <a
                  href="https://www.genotek.global/project-listing?utm_referrer=https%3A%2F%2Fwww.genotek.global%2F"
                  style={{textDecoration:"none"}}
                >
                <br></br>
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "18rem",height:"50px" }}>
              <img src={doha} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  The airport will be the new home for Qatar Airways, one of the
                  fastest-growing airlines in the world. Since its relaunch in
                  1997, Qatar Airways has rapidly expanded from operating four
                  leased aircraft a little over 10 years ago to now owning more
                  than 60 modern Airbus and Boeing aircrafts.
                </p>
                <a
                                style={{textDecoration:"none"}}
                  href="https://www.genotek.global/project-listing?utm_referrer=https%3A%2F%2Fwww.genotek.global%2F"
                >
                    <br></br>
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "18rem",height:"50px" }}>
              <img src={flame} class="card-img-top" alt="falme" />
              <div class="card-body">
                <p class="card-text">
                  Flame Towers is a multi-use complex being developed in
                  Azerbaijan. When completed in 2012, the
                  complex will be one of the tallest skyscrapers in the country,
                  at nearly 200m. Construction of the complex is part of a
                  $6bn-a-year redevelopment plan aimed at transforming Baku into
                  a iconic city.
                </p>
                <a
                style={{textDecoration:"none"}}
                  href="https://www.genotek.global/project-listing?utm_referrer=https%3A%2F%2Fwww.genotek.global%2F"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
