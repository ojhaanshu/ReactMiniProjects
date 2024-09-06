import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [color,setColor]=useState("black");
let [tcolor,setTcolor] = useState("lightpink");
  return (
    <>
      <div className="w-full  h-screen flex  items-center justify-center  " style= {{backgroundColor: color}}>
        <h1 className="text-4xl font-bold  text-center  rounded-xl shadow-2xl shadow-slate-100" style= {{color: tcolor}}>BackGround Changer</h1>
        <div className="fixed flex bottom-12 justify-center bg-white rounded-lg gap-3 py-2 px-2">
          <button className=" px-1.5 py-2 rounded-3xl" style= {{backgroundColor: "red"}} onClick={()=>{return setColor("red"),setTcolor("green")}}>Red</button>
          <button className="bg-Blue px-1.5 rounded-3xl py-2" style= {{backgroundColor: "blue" }} onClick={()=>{return setColor("blue"),setTcolor("lightblue")}}>Blue</button>
          <button className=" px-1.5 py-2 rounded-3xl" style= {{backgroundColor: "green"}} onClick={()=>{return setColor("lightGreen"),setTcolor("green")}}>green</button>
          <button className="bg-Blue px-1.5 rounded-3xl py-2" style= {{backgroundColor: "yellow"}} onClick={()=>{return setColor("yellow"),setTcolor("orange")}}>Yellow</button>
          <button className=" px-1.5 py-2 rounded-3xl" style= {{backgroundColor: "orange"}} onClick={()=>{return setColor("orange"),setTcolor("red")}}>Orange</button>
          <button className="bg-Blue px-1.5 rounded-3xl py-2" style= {{backgroundColor: "purple"}} onClick={()=>{return setColor("purple"),setTcolor("white")}}>Purple</button>
          <button className=" px-1.5 py-2 rounded-3xl" style= {{backgroundColor: "olive"}} onClick={()=>{return setColor("olive"),setTcolor("black")}}>Olive</button>
          <button className="bg-Blue px-1.5 rounded-3xl py-2" style= {{backgroundColor: "pink"}} onClick={()=>{return setColor("pink"),setTcolor("yellow")}}>pink</button>
        
        </div>



      </div>
    </>
  )
}

export default App
