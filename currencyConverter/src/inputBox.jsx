import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency ="usd",
    amountDisable =false,
    currencyDisable = false,
}

){
    const amountInputId = useId()
        
    return(
        <div className="  rounded-lg  flex p-3">
            <div className="flex flex-col felx-wrap mr-12 ">
            <label className="my-2" htmlFor={amountInputId}>{label}</label>
            <input className="w-36 border-2 border-black-300 rounded" 
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value)) }
            value={amount}
            
            />
            </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <p className=" w-full  my-2">Currency Type</p>
                    <select className="bg-white p-1 rounded"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
                      
                      {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                        {currency}
                    </option>

                      ))}
                        
                    </select>

                </div>

           
        </div>
    )
}

export default InputBox