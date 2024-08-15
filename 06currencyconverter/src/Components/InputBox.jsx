import React, { useId } from 'react'

function InputBox({ //these variables have the value which is given as input by the user, the InputBox.
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],// array coz of json data from API
  selectCurrency = "usd",
  amountDisable = false ,
  currencyDisable = false,  
  className = "",  //   this is the class for user to change if he a=has any css to change
}) {
 
const amountInputId = useId ()  //from this we'll egt the unique id or unique value

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>  {/*here we are adding ternary operator coz ifm the user wants to customize the UI then whatever he is going to change the CSS he can do it .Hence, we have given a variable className="" from the Input function  i.e., abluve  */}
          <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount" disabled={amountDisable}
                  value={amount}  onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
              />

          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"     
                  value={selectCurrency}   disabled={currencyDisable} 
                  onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}     
              >

                        {currencyOptions.map((currency)=>(   //here we are adding the loop for the option component below coz it has to take the value from the json api according to the user selection which is an array i.e., currencyOPtions  

                            <option key={currency} //remember the key in loops of jsx if not itll effect performance 
                            value={currency}>
                            {currency}
                            </option>
                        ))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;