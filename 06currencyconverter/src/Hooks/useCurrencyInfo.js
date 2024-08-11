import { useEffect, useState } from "react";


// here we are creating a CUSTOM HOOK for our this project 
function useCurrencyInfo(currency){
    const[data,setData ] = useState({})  //Defines a state variable data initialized as an empty object {}. This state will hold the fetched currency information.

      useEffect(()=>{
         //use effect is ,useEffect hook is used to perform side effects in functional components. It takes a function as its first argument, which will be executed after the component renders.

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`) //fetch function makes a GET request to the specified API endpoint 

        .then((res)=>res.json()) //converts the HTTP response to JSON format.

        .then((res)=>setData(res[currency])) //updates the data state with the fetched currency information (res[currency]). 

        console.log(data);  // It also logs the fetched data to the console for debugging purposes.

      },[currency]) //[currency] is the dependency array. The effect function will re-run whenever currency changes. 

      console.log(data)  //console.log(data);: Logs the current state of data outside of the useEffect hook. This will log the updated state of data whenever it changes due to the effect running.

      return data  //return data;: Returns the data state. This allows components using useCurrencyInfo to access and use the fetched currency information.
}

export default useCurrencyInfo;

// How It Works:
// Initialization: When the useCurrencyInfo hook is called with a currency parameter, it initializes a state variable data using useState. Initially, data is an empty object {}.

// Effect Execution: The useEffect hook runs immediately after the component renders (or whenever currency changes). It performs an asynchronous operation (fetching data from the API).

// Fetching Data: Inside useEffect, fetch is used to make a GET request to the API endpoint with the currency parameter interpolated in the URL.

// Updating State: Once the data is fetched successfully (res.json()), setData is called to update the data state with the specific currency information (res[currency]). Logging (console.log) is used to debug and verify the fetched data.

// Error Handling: Errors during the fetch operation are caught in the .catch block. It logs the error and sets data state to an empty object {} to handle the error gracefully.

// Logging Data: console.log(data); outside of useEffect logs the current state of data whenever it changes. This is useful for debugging and verifying the state updates