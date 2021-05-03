import React,{createContext, useState} from 'react';
import shoesList from "../shoesList.json";

export const ShoesContext=createContext(shoesList);

export const ShoesProvider = ({children}) => {
    const [badgeValue,setBadgeValue]=useState(0);
    const [cartItems,setCartItems]=useState(null);
    const [totalPrice,setTotalPrice]=useState(0);

    return (
        <ShoesContext.Provider value={{shoesList,badgeValue,totalPrice,setTotalPrice,setBadgeValue,setCartItems,cartItems}}>
            {children}
        </ShoesContext.Provider>
    )
}
