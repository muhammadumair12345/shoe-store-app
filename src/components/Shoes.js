import { Typography } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router';
import "../App.css";

const Shoes = ({shoesType}) => {
    return (
        <div>
          <Typography className="font" variant="h4" style={{marginTop:"20px"}} align="center" gutterBottom>{shoesType} Shoes Collection</Typography> 
          <Outlet/>
        </div>
    )
}

export default Shoes
