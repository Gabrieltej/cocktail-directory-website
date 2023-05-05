import React, { useState, useContext, useEffect } from 'react'

import { useCallback } from 'react'

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

//make sure that your internet is on throughout the procsss so there won't be error when fetching stuffs from the API

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({children}) => {

 //so anything that we are going to pass down in our components(be it  loading, seract anything etc we form them inside of the function ) we are going to set them up inside of the function that we have written  and then continue with our stuffs


const[loading, setLoading] =useState(true)
const[searchTerm, setSearchTerm]=useState('a')
const[cocktails, setCocktails]=useState([])

const fetchDrinks= async()=>{
  setLoading(true)
  try{
    const response=await fetch(`${url}${searchTerm}`)
    const data=await response.json()


    const {drinks}=data

    //if drinks, do not forget that falsy values include, null, undefined, NaN, 0, and empty string('')

    if(drinks){
      const newcockTail=drinks.map((item)=>{
          const{idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass}=item
          return(
            {
              id: idDrink,
              name: strDrink, 
              image:strDrinkThumb,
              info:strAlcoholic,
              glass: strGlass         
            }
          )
      }
      )
          setCocktails(newcockTail)
          // console.log(newcockTail)
          setLoading(false)
     
    } else{
        setCocktails([])
    }

  } catch(error){
      setLoading(false)
  }
}

useEffect(()=>{
  fetchDrinks()
}, [searchTerm])
//when the searchTerm changes stuffs will rerender automatically once it senses any changes and do the needful




return <AppContext.Provider value={{

    loading, cocktails, setSearchTerm

  }}>{children}</AppContext.Provider>
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext,AppProvider}
