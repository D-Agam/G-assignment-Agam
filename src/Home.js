import React from "react";
import home from "./images/home.jpg";
import "./Home.css";
function Home() {
  return (
    <div className="App">
    <br></br>
      <div className="container text-center">
        <div className="row">
          <img src={home} alt="Home" className="image" style={{ width: "100%" }} />
          <div className="middle">
            <div className="text">
              <h3 style={{ textDecorationColor: "#FF7900" }}>About Us</h3>
              <p>
                Elevate your architectural projects with our meticulously
                curated selection of products. Explore a range that includes
                expansion joint covers, movement joints, stair nosings, and
                more. Designed to save architects and contractors valuable time
                and costs, our precision-engineered solutions ensure a seamless
                and efficient construction process. Choose excellence for
                unparalleled results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
