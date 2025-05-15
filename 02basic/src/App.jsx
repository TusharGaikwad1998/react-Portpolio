import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let Counter = 101;
  let [Counter , setcounter] = useState(10);


   function addValue() {
    console.log('click ' , Counter);
    if (Counter<20){
    Counter = Counter+1;
    }
    setcounter(Counter)
  }
  function removeValue() {
    console.log('click ' , Counter);
    if(Counter>0){
      Counter = Counter-1;
    }
    
    
    setcounter(Counter)
  }

   

  return (
    <>
    <h2>chai aur react</h2>
    <h3>Counter value</h3>
    <button 
    onClick =  {addValue}
    >Add value  {Counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove value</button>
     

    </>
  )
}

export default App
