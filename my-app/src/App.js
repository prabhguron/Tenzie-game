import React, { useEffect, useState } from "react";
import Die from "./die";
import {nanoid} from "nanoid";



export default function App() {
  const [diceArr, setDiceArr] = useState(allNewDice());
  const [tenzie, setTenzie] = useState(false);

  useEffect(()=> {

  const check = diceArr.every(tenzieTime => {
    const diceFirstValue = diceArr[0].value
   return (tenzieTime.isHeld === true && tenzieTime.value === diceFirstValue)
})  

if(check){
  setTenzie(prev => prev = true)
}else{
  setTenzie(prev => prev = false)
}
   


    



  },[diceArr])

if(tenzie === true){
  console.log("works")
}


function generate(){
  return {
    value: Math.ceil(Math.random() * 6), 
    isHeld: false,
    id: nanoid()}
}


  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generate())
    }
    return newDice
}
function holdDice(id){
    setDiceArr(prevDice => {
       return prevDice.map(currentDice => {
         return currentDice.id === id ? {...currentDice, isHeld: !currentDice.isHeld} : currentDice
        })
    })

}
function rollDice() {
  setDiceArr(oldDice => oldDice.map(die => {
      return die.isHeld ? 
          die :
          generate()
  }))
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
