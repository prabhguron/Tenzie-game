import React, { useState } from "react";
import Die from "./die";
import {nanoid} from "nanoid";



export default function App() {
  const [diceArr, setDiceArr] = useState(allNewDice());

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push({
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            id: nanoid()
        })
    }
    return newDice
}
function holdDice(id){
 console.log(id)
}
function rollDice() {
  setDiceArr(allNewDice())
}

const diceElements = diceArr.map(die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
))
  return (
    <main>
      <div className="container">{diceElements}</div>
        <button className="roll" onClick={rollDice}>Roll</button>
    </main>
  );
}
