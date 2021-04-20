import React from "react";
import './Card.css'
export default function Card(props) {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <img src={props.imgSrc} alt="card_img" className="card_img" />
          <div className="card_info">
            <span className="card_category">Netflix original series</span>
            <h3 className="card_title">{props.cardTitle}</h3>
            <a href="" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
