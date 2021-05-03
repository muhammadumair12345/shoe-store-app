import React,{createContext, useState} from 'react';
import shoesList from "../shoesList.json";

export const ShoesContext=createContext(shoesList);

export const ShoesProvider = ({children}) => {
    const [badgeValue,setBadgeValue]=useState(0);
    const [cartItems,setCartItems]=useState(null);

    return (
        <ShoesContext.Provider value={{shoesList,badgeValue,setBadgeValue,setCartItems,cartItems}}>
            {children}
        </ShoesContext.Provider>
    )
}
