import React,{createContext, useState} from 'react';
import shoesList from "../shoesList.json";

export const ShoesContext=createContext(shoesList);

export const ShoesProvider = ({children}) => {
    const [badgeValue,setBadgeValue]=useState(0);

    return (
        <ShoesContext.Provider value={{shoesList,badgeValue,setBadgeValue}}>
            {children}
        </ShoesContext.Provider>
    )
}
