import React, { useState } from "react";

import Die from "./die";



export default function App() {

  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 6) + 1);
    }
    return arr;
  }
  

  const [diceArr, setDiceArr] = useState(allNewDice());
  const dice = diceArr.map((num) => <Die value={num} />);
  function turn(){
    setDiceArr(prev =>  prev = allNewDice() )
  }
  return (
    <main>
      <div className="container">{dice}</div>
        <button onClick={turn}>Roll</button>
    </main>
  );
}
