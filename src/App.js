import "./App.css";
import Images from "./Images";
import { useState } from "react";
import { shuffle } from "lodash";

function App() {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));

  return (
    <div className="App">
      <div className="board">
        {cards.map((card, index) => (
          <div className="card-outer">
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
