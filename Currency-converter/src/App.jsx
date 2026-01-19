import { useState } from 'react'
import { InputBox } from './InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  // Amount user types
  const [amount, setAmount] = useState(0)

  // From currency
  const [from, setFrom] = useState("usd")

  // To currency
  const [to, setTo] = useState("inr")

  // Final converted value
  const [convertedAmount, setConvertedAmount] = useState(0)

  // Custom hook to fetch currency rates
  const currencyInfo = useCurrencyInfo(from)

  // All available currency keys
  const options = Object.keys(currencyInfo)

  // Swap from ↔ to currencies and values
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // Convert amount using selected currency rate
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          
          {/* Form wrapper */}
          <form
            onSubmit={(e) => {
              e.preventDefault(); // stop page reload
              convert()          // do conversion
            }}
          >
            {/* FROM INPUT */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} // update FROM currency
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}     // update amount
              />
            </div>

            {/* SWAP BUTTON */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* TO INPUT */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)} // update TO currency
                selectCurrency={to}
                amountDisable // user cannot type here
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
