import React from 'react';
import { IconButton,Badge, Card } from '@material-ui/core';
import {  ShoppingCart } from '@material-ui/icons';
import RightDrawer from './RightDrawer';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.jpg";
import '../App.css';
import FontIcons from './FontIcons';

const Header = () => {
    const links=["/","/men-shoes","/women-shoes","/kids-shoes"];

    return (
        <Card className="header">
            <div className="title">
                <NavLink to="/">
                    <img src={logo} alt="Shoe Store" className="logo-image" />
                </NavLink>
            </div>
            <div  className="nav">
                {
                    ["HOME","MEN","WOMEN","KIDS"].map((text,index)=>(
                    <NavLink to={links[index]} key={index}>
                        <FontIcons loc={index}/>
                        <h4>{text}</h4>
                    </NavLink>
                    ))
                }
            </div>
            <div className="cart">
                <NavLink to="/cart"> 
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart fontSize="small"/>
                        </Badge>
                   </IconButton>
                </NavLink>
                <RightDrawer/>    
            </div>
        </Card>
    )
}

export default Header
