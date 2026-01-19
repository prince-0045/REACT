import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {

    // Stores API data (rates)
    const [data, setData] = useState({})

    useEffect(() => {
        // Fetch exchange rates for selected base currency
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency])) // store only useful object

    }, [currency]) // re-run when base currency changes

    return data
}

export default useCurrencyInfo;
