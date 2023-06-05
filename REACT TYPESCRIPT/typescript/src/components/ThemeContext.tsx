import React,{createContext}  from 'react'
import { thme } from './thme'

type ThemeContextProviderProps={
    children:React.ReactNode;
};


export const ThemeContext =createContext(thme)
export const ThemeContextProvider=({
    children,
}:ThemeContextProviderProps)=>{
   return (<ThemeContext.Provider value={thme}>{children}</ThemeContext.Provider>)
}