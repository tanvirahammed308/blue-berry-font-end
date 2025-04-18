import React, { createContext, useEffect, useState } from 'react'

export const DataLoaderContext=createContext(null)
const DataLoaderProvider = ({children}) => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("/productsData.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
   const  store={
    data

    }
  return (
    <DataLoaderContext.Provider value={store}>{children}</DataLoaderContext.Provider>
  )
}

export default DataLoaderProvider