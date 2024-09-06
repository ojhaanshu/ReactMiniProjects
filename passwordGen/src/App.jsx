import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  let [length,setLength] = useState(8);
  let [isNum ,setIsNum] = useState(false);
  let [isChar , setIsChar] = useState(false);
  let [password ,setPassword] =useState("");

  const passwordGenerator =useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""
    if(isNum){
      str = str+"0123456789"
    }
    if(isChar){
      str = str+"!@#%^&*?"
    }
    
    
    for(let i=1;i<=length;i++){
    let a = Math.floor(Math.random()*str.length +1)
    pass += str.charAt(a);
    }
    setPassword(pass);
  }
  ,[length,isChar,isNum,setPassword]) 

  useEffect(()=>{
    passwordGenerator()
  },[length,isChar,isNum,passwordGenerator])
  
const passwordRef =useRef(null);

const copyonclipboard = ()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
}


  return (
    <>
    <div className=" bg-black w-full max-w-prose mx-auto px-4 my-8 rounded-lg text-orange-500">
    <h1 className="font-bold text-2xl text-center text-white mb-5 mt-8 p-2 ">Password Generator</h1>
     <div className="flex  overflow-hidden   ">
      <input 
      type="text" 
      placeholder="Password" 
      className='rounded w-full py-1 px-1 mb-1'
      value={password}
      ref={passwordRef}
      readOnly
       />
       <button onClick={copyonclipboard} className="bg-sky-500 hover:bg-sky-700 text-white rounded px-1 py-1 mb-1"
      >copy</button>
       </div>
   
   
   <div className="flex  overflow-hidden  items-center " >

      <input type="range"
      min={6}
      max={100}
      value={length}
      className="cursor-pointer py-2 mt-1 mx-2"
      onChange={(e)=>{setLength(e.target.value)}}></input>
      
      <label className='text-white'>Length : {length}</label>

      <div className="flex items-center  px-4 gap-x-3">
      <input 
      type="checkbox"
      id = "numberInput"
      defaultChecked={isNum}
      onChange={()=>setIsNum((prevValue)=>!prevValue)}
      />
      <label className='text-white' htmlFor='numberInput'>Numbers</label>

      <input 
      type="checkbox"
      id = "charInput"
      defaultChecked={isChar}
      onChange={()=>setIsChar((prevValue)=>!prevValue)}
      />
      <label className='text-white' htmlFor='charInput'>character</label>
</div>
     </div>

    
    </div>
      
    </>
  )
}

export default App
