import React from "react";
import architect from "./images/architect.svg";
import construct from "./images/contractors.svg";
function Knowledge(props) {
  return (
    <div>
      <br></br>
      <br></br>
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: "50px",
          marginLeft: "50px",
        }}
      >
        Get In{" "}
        <span
          style={{
            textDecoration: "underline",
            textDecorationColor: "#FF7900",
          }}
        >
          Touch
        </span>
      </h1>
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem;" }}>
            <img src={architect} className="card-img-top" alt="architect" />
            <div className="card-body">
              <p className="card-text">
                Select and Specify better products, to ensure your projects are
                delivered the same way to envision them
              </p>
              <a
                href="https://www.genotek.global/blog/tag/for-architect"
                style={{textDecoration:"none"}}
              >
                I'm an architect
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem;" }}>
            <img src={construct} className="card-img-top" alt="contract" />
            <div className="card-body">
              <p className="card-text">
                Choose Products that help you deliver projects on time and on
                budget
              </p>
               <br></br>
              <a
                href="https://www.genotek.global/blog/tag/for-contractor"
                style={{textDecoration:"none"}}
              >
                I'm a contractor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
