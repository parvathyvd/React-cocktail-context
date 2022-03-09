import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [searchTerm , setSearchTerm] = useState('vodka');
  const [loading, setLoading] = useState(true);

  const fetchItems = useCallback(async() => {
    setLoading(true);
    try{
      const response = await fetch(`${url}${searchTerm}`);
      const result  = await response.json();
      console.log(result);
      setItems(result.drinks)
      setLoading(false);
      if(result === null){
        setItems([]);
      }
    }
    catch(error){
      console.log(error)
    }
  },[searchTerm])
  useEffect(()=>{
    fetchItems()
  },[searchTerm, fetchItems])

 
  const searchTermSubmit = (val) => {
    setSearchTerm(val)
    console.log('seatch term', searchTerm);
  }

  return <AppContext.Provider value={{items, loading, searchTermSubmit}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
