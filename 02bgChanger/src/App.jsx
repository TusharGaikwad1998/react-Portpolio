import { useState } from 'react'


import './App.css'

function App() {
  const   [color, setColor] = useState("olive");

  return (
    <div className= "w-full max-h-screen "
    
    style = {{backgroundColor : "#000"}}
    >

     <div className='fixed flex flex-wrap
     justify-center bottom-10 inset-x-0 px-2'>

     <div className="fixed flex  flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        
        <button 
        className = "outline-none px-4 py-1 rounded-xl"
        style={{backgroundColor : "red" }}>
         red
         
        </button>
        <button 
        onClick={()=>setColor("red")}
        className = "outline-none px-4 py-1 rounded-xl"
        style={{backgroundColor : "green" }}>
         green
        </button> 

     </div>
     </div> 
    </div>
  )
}

export default App


