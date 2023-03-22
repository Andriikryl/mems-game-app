import "./App.css";
import Images from "./Images";
import { useState } from "react";
import { shuffle } from "lodash";

function App() {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [activeCards, setActiveCards] = useState([]);
  function flipCard(index) {
    setActiveCards([index]);
  }

  return (
    <div className="App">
      <div className="board">
        {cards.map((card, index) => (
          <div
            className={
              "card-outer " +
              (activeCards.indexOf(index) !== -1 ? "flipped" : "")
            }
            onClick={() => flipCard(index)}
          >
            <div className="card">
              <div className="front">
                <img src={card}></img>
              </div>
              <div className="back"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
