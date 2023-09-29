import React, { createContext, useEffect, useReducer, useState } from 'react'


export const globalContext=createContext('')

const intialState=[{
     
}]

const VibzContext = ({children}) => {

    const [triger,setTriger]=useState(false)

    // const [state,dispatch]=useReducer(reducer,intialState)

   
  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth > 1000) {
        setTriger(true);
      } else {
        setTriger(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  return (
    <>
        <globalContext.Provider value={{triger}}>
             {children}
        </globalContext.Provider>
    </>
  )
}

export default VibzContext