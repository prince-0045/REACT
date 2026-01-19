import React, { useId } from 'react'

function InputBox({
    label,                // Label for input (From / To)
    amount,               // Value inside input
    onAmountChange,       // Function when amount changes
    onCurrencyChange,     // Function when currency changes
    currencyOptions = [], // List of currencies (usd, inr, eur...)
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

   // useId gives a unique ID so label and input are linked properly
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            
            {/* LEFT PART → AMOUNT INPUT */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => 
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>

            {/* RIGHT PART → CURRENCY SELECT */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => 
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                >
                    {/* Map through all currency options */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
