import React, { useContext } from 'react';
import '../App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Shoes from './Shoes';
import Cart from './Cart';
import SelectedShoe from './SelectedShoe';
import ShoesList from './ShoesList';
import { ShoesContext } from '../context/ShoesContext';

const Section = () => {
    const {shoesList}=useContext(ShoesContext);
    return (
        <div className="section">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/men-shoes" element={<Shoes shoesType={"Men"}/>}>
                    <Route path="/" element={<ShoesList shoesList={shoesList['men-shoes']} shoesType={"men-shoes"}/>}/>
                    <Route path=":id" element={<SelectedShoe shoesList={shoesList['men-shoes']}/>}/>
                </Route>
                <Route path="/women-shoes" element={<Shoes shoesType={"Women"}/>}>
                    <Route path="/" element={<ShoesList shoesList={shoesList['women-shoes']} shoesType={"women-shoes"}/>}/>
                    <Route path=":id" element={<SelectedShoe shoesList={shoesList['women-shoes']}/>}/>
                </Route>
                <Route path="/kids-shoes" element={<Shoes shoesType={"Kids"}/>}>
                    <Route path="/" element={<ShoesList shoesList={shoesList['kids-shoes']} shoesType={"kids-shoes"}/>}/>
                    <Route path=":id" element={<SelectedShoe shoesList={shoesList['kids-shoes']}/>}/>
                </Route>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<h2>Page Not Found!</h2>}/>
            </Routes>
        </div>
    )
}

export default Section
