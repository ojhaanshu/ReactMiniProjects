import { useState } from 'react'
import Inputbox from './inputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'



function App() {
 let background ="https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const[amount ,setAmount] =useState(0);
const[from , setFrom] = useState("usd");
const[to,setTo] =useState("inr");
const [convertedAmount,setConvertedAmount]=useState(0);
const currencyInfo = useCurrencyInfo(from);
const options =Object.keys(currencyInfo);

const swap =()=>{
setFrom(to);
setTo(from);
setConvertedAmount(amount)
setAmount(convertedAmount)
}

const convert=()=>{
 setConvertedAmount(amount*currencyInfo[to])
}
  return (
    <>
      
      <div className="w-full h-screen flex flex-wrap items-center " style={{backgroundImage:`url('${background}')`}}>
        <div className=" bg-teal-50 max-w-full mx-auto border-4 border-teal-500 rounded-xl p-3">
       <form onSubmit={(e)=>{e.preventDefault();
                              convert();
       }}>
        <div className="w-full mb-2 mt-3 border-2 border-teal-400 rounded-xl p-4">
        <Inputbox 
        label="from" 
        amount ={amount}
        currencyOptions={options}
        onCurrencyChange ={(currency)=>setFrom(currency)}
        selectCurrency ={from}
        onAmountChange = {(amount)=>setAmount(amount)}
        />
        </div>
        <div className="relative w-full h-0.5">
          <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-300 rounded-lg  p-2 " onClick={swap}>Swap</button>
        </div>
        <div className="w-full  mb-2 border-2 border-teal-400 rounded-xl p-4">
        <Inputbox 
        label="to" 
        amount ={convertedAmount}
        currencyOptions={options}
        onCurrencyChange ={(currency)=>setTo(currency)}
        selectCurrency ={to}
        amountdisable />
        </div>
       </form>
      <button type="submit" className="p-2 text-center text-bold bg-teal-300 rounded-lg w-full " onClick={convert}>Convert {from} to {to} </button>
      
      </div>
      </div>
    
    </>
  )
}

export default App
