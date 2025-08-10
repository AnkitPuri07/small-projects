import React from 'react'
import { useEffect,useState } from 'react'

function useCurrencyInfo(currency) {
    const[data,setData] = useState({})
    useEffect(() => {
  fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_FppNGDFcHNnZgs7wC4W9AZAN7x4KRVWDFFmn3Q9Y&currencies=USD,EUR,INR')
  .then(res => res.json())
  .then((res)=> setData(res[currency]))
  .catch(err => console.error(err));
}
,[currency])
  return data;
}

export default useCurrencyInfo;