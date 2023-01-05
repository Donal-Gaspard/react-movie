function App() {
const [counter, setCounter] = useState (0) 

const decrement = ()=> setCounter (counter-1)
const increment =() => setCounter(counter+1)
const addition =  (nombre1, nombre2) => {
return nombre1 + nombre2

};


}

  return (
  
    <div>
        
    <h1>My Movie DB</h1>
    <button onClick={decrement}>{"-"}</button> {counter} <button onClick={increment}>{"+"} </button> 
    
    </div>
    <div>
      <h2>Ajouter 2 nombres</h2>
    <input placeholder=" first number"type="number" >
    <input placeholder=" second number"type="number" ></input>
    </div>
  )
}
