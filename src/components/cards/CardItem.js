import React from "react";
import "./Cards.css";

function CardItem(props) {
  return (
    <>
      <div className="cards_items">
        <a className="cards_item_link" href={props.path} target="_blank">
          <figure className="cards_item_pic-wrap" data-category={props.label}>
            <img className="cards_item_img" src={props.src} alt="img" />
          </figure>
          <div className="cards_item_info">
            <h5 className=" cards_item_text">{props.text}</h5>
          </div>
        </a>
      </div>
    </>
  );
}

export default CardItem;
