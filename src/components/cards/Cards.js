import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="/cards">
      <div className="cards_container">
        <h1> Projects</h1>
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              text="Created using React.js with help of code-along Youtube videos"
              src="./images/to-do-app_pic.png"
              path="https://github.com/josephine-james/todo-app.git"
              label="To-do App"
            />
            <CardItem
              text="Created using Python and tkinter GUI package"
              src="./images/ceaser_pic.png"
              label="Ceaser Cipher Encrpyter"
              path="https://github.com/josephine-james/ceaser-cipher.git"
            />
            <CardItem
              text="Created using Python as a part of Cousera course using CodeSkulptor"
              src="./images/pong_pic.png"
              label="Pong"
              path="http://www.codeskulptor.org/#user47_lJHOPsbSM9qlFdl.py"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
