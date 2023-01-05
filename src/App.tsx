import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
const [counter, setCounter] = useState (0) 

const decrement = ()=> setCounter (counter-1)
const increment =() => setCounter(counter+1)
const addition =  (nombre1, nombre2) => (nombre1 + nombre2)

  return (
  
    <div>
        
    <h1>My Movie DB</h1>
    <button onClick={decrement}>{"-"}</button> {counter} <button onClick={increment}>{"+"} </button> 
    <br>
    
    
    </br>
     <h2>Ajouter 2 nombres</h2>
    <input placeholder="first number"type="number" ></input>
    <input placeholder="second number"type="number" ></input>
    <br /><br />
    <button onClick={addition}> total</button>
    </div>
  )
  
}

export default App
