import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {

//     const [data, setdata] = useState({});

//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json`)
//             .then((res) => res.json())
//             .then((res) => setdata(res))
//     }, [currency])
//     console.log(data);

//     return data


// }
// export default useCurrencyInfo;


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency]);
    return data;
}
export default useCurrencyInfo;