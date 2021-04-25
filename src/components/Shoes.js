import React from 'react';
import { Outlet } from 'react-router';

const Shoes = ({shoesType}) => {
    return (
        <div>
          <h1>{shoesType} Shoes</h1> 
          <Outlet/>
        </div>
    )
}

export default Shoes
