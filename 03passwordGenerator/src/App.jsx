import { useCallback,useRef} from 'react';
import { useState , useEffect} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")


     // useRef hook

     const passwordRef = useRef(null);
     const passwordGenerator = useCallback(()=>{

     
         let pass = ""
         let str =  "ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz"
         if(numberAllowed) str += "1234567890";
         if(charAllowed) str += "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
         
         for (let i = 1; i <= length; i++) {
          let char = Math.floor(Math.random()*str.length)
          pass += str.charAt(char);
          
         }
         setPassword(pass);

        }, [length,numberAllowed,charAllowed,setPassword])

        const copyPassword = useCallback(() => {
          passwordRef.current.readOnly = false;
   
           passwordRef.current?.select()
          //passwordRef.current?.setSelectionRange(0,12);
          window.navigator.clipboard.writeText(password)
          passwordRef.current.readOnly = true;
        },[password])

        useEffect(()=>{
         passwordGenerator();
        }, [length,numberAllowed,charAllowed,])
        
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-7 text-orange-600 bg-gray-500'>
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      
      ref={passwordRef}
      />
       <button 
        onClick={copyPassword}
        
       className='outline-none bg-blue-700 text-white
       px-4 py-0.5 shrink-0'>
         copy
       </button>
    </div> 
    <div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1 '>
   <
    input type="range"
    min={6}
    max={25}
    value={length}
    className='cursor-pointer'
    onChange={(e) =>{setLength(e.target.value)}}
    ref={passwordRef}
   />
   <label>  length:{length} </label>
</div>

<div className='flex items-center gap-x-1'>
 <input type="checkbox"
 defaultChecked = {numberAllowed}
 id = "numberInput"
 onChange={() =>{
  setNumberAllowed((prev)=>!prev);
 }}
 
 />
 <label htmlFor="numberInput">Number</label>
</div>

<div className='flex items-center gap-x-1'>
 <input type="checkbox"
 defaultChecked = {charAllowed}
 id = "charInput"
 onChange={() =>{
  setCharAllowed((prev)=>!prev);
 }}
 />
 <label htmlFor="charInput">SP Character</label>
</div>

    </div>
    </div>
    </>
  )
}

export default App
