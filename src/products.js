import React from "react";
import "./products.css";
import expansion from "./images/expansion.webp";
import entrance from "./images/entrance.webp";
import floor from "./images/floor.webp";
import movement from "./images/movement.webp";
import tile from "./images/tile.webp";
import wall from "./images/wall.webp";
import more from "./images/more.png";
function Products(props) {
  return (
    <div>
    <br></br>
    <br></br>
      <h1 style={{fontFamily:"sans-serif",fontSize:"50px",textAlign:"center"}}>Our <span style={{textDecoration:"underline",textDecorationColor:"#FF7900"}}>Products</span></h1>
      <ul className="honeycomb" lang="es">
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={expansion} alt="expansion" />
          <div className="honeycomb-cell__title"><a href="https://www.genotek.global/products?category=Expansion%20Joint%20Covers">Expansion Joint Covers</a></div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={entrance} alt="entrance" />
          <div className="honeycomb-cell__title"><a href="https://www.genotek.global/products?category=Entrance%20Mat">Entrance Mat Systems</a></div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={floor} alt="floor" />
          <div className="honeycomb-cell__title"><a href="https://www.genotek.global/products?category=Temporary%20Floor%20Protection">Temporary Floor Protection</a></div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={movement} alt="movement" />
          <div className="honeycomb-cell__title"><a href="https://www.genotek.global/products?category=Movement%20Control%20Joints">Movement Control Joints</a></div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={tile} alt="tile" />
          <div className="honeycomb-cell__title">
           <a href="https://www.genotek.global/products?category=Stair-Nosing%20and%20Tile%20Trims">Stair Noisings and Tile Profiles</a>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={wall} alt="wall" />
          <div className="honeycomb-cell__title">
           <a href="https://www.genotek.global/products?category=Wall%20Protection%20System">Wall Protection Systems</a>
          </div>
        </li>
        <li className="honeycomb-cell">
          <img className="honeycomb-cell__image" src={more} alt="more" />
          <div className="honeycomb-cell__title">And Much More</div>
        </li>
        <li className="honeycomb-cell honeycomb__placeholder"></li>
      </ul>
    </div>
  );
}

export default Products;
