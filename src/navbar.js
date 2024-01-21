import React from "react";
import "./navbar.css";
import Genotek from "./images/Genotek.webp";
function Navbar(props) {
  return (
    <div>
      <ul style={{listStyleType:"none",margin:"0",padding:0,overflow:"hidden",backgroundColor:"#333"}}>
        <li>
          <img src={Genotek} alt="Genotek" />
        </li>
        <li>
          <a
            style={{ float: "right",fontFamily:"serif",fontSize:"20px",fontWeight:"400"}}
            href="https://www.genotek.global/project-listing"
          >
            Project
          </a>
        </li>
        <li>
          <a
            style={{ float: "right",fontFamily:"serif",fontSize:"20px",fontWeight:"400"}}
            href="https://www.genotek.global/products?category=Expansion%20Joint%20Covers"
          >
            Products
          </a>
        </li>
        <li>
          <a
            style={{ float: "right" ,fontFamily:"serif",fontSize:"20px",fontWeight:"400"}}
            href="https://www.genotek.global/products?category=Expansion%20Joint%20Covers"
          >
            Information
          </a>
        </li>
        <li style={{ float: "right",fontFamily:"serif",fontSize:"20px",fontWeight:"400" }}>
          <a href="https://www.genotek.global/about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
