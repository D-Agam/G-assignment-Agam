import React from "react";
import assitance from "./images/assitance.webp";
import price from "./images/price.webp";
import track from "./images/track.webp";
import support from "./images/supprt.webp";
import "./why.css";
function Why(props) {
  return (
    <div>
      <br></br>
      <br></br>
      <h1
        style={{
          fontFamily: "sans-serif",
          fontSize: "50px",
          textAlign: "center",
        }}
      >
        Why{" "}
        <span
          style={{
            textDecoration: "underline",
            textDecorationColor: "#FF7900",
          }}
        >
          Genotek
        </span>
      </h1>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card1">
              <img src={assitance} alt="assistance" />
              <div className="card__content1">
                <p className="card__title1"><b>Technical Drawing Assistance</b></p>
                <p className="card__description1">
                Genotek offers our Clients complementary Shop Drawings, System Drawings and more.
                Please contact our team for assistance on any requirement you may have.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card1">
              <img src={price} alt="price" />
              <div className="card__content1">
                <p className="card__title1">Best Price</p>
                <p className="card__description1">
                Our Clients save an average of 30% on Material Costs by buying from the factory direct.
                Our Industry Leading Warranty offers our clients peace of mind and ensures we take their reputation seriously.
                </p>
              </div>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col" style={{ paddingTop: "25px" }}>
            <div className="card1">
              <img src={track} alt="track" />
              <div className="card__content1">
                <p className="card__title1"><b>Fast Delivery</b></p>
                <p className="card__description1">
                Streamlined Supply Chain enables us to offer our clients Supply of our products in as little as 3 Days from date of order.
                We offer delivery via Air, Sea and Road transport to ensure your products get delivered when you need them.
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={{ paddingTop: "25px" }}>
            <div className="card1">
              <img src={support} alt="support" />
              <div className="card__content1">
                <p className="card__title1"><b>Installation Support</b></p>
                <p className="card__description1">
                Genotek provides Technical Installation and Supervision services to ensure our products are installed correctly.
                Approved Installers are also available internationally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
