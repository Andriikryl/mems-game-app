import "./App.css";
import Images from "./Images";
import { useState } from "react";
import { shuffle } from "lodash";

function App() {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [activeCards, setActiveCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);
  function flipCard(index) {
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondIndex = index;
      if (cards[firstIndex] === cards[secondIndex]) {
        setFoundPairs([...foundPairs, firstIndex, secondIndex]);
      }
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
  }

  return (
    <div className="App">
      <div className="board">
        {cards.map((card, index) => {
          const flippedToFront =
            activeCards.indexOf(index) !== -1 ||
            foundPairs.indexOf(index) !== -1;
          return (
            <div
              className={"card-outer " + (flippedToFront ? "flipped" : "")}
              onClick={() => flipCard(index)}
            >
              <div className="card">
                <div className="front">
                  <img src={card}></img>
                </div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
