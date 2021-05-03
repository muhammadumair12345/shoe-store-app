import { Card,CardContent, Typography,CardActionArea,CardMedia, Button,IconButton } from '@material-ui/core';
import { DeleteForeverRounded } from '@material-ui/icons';
import React, { useContext } from 'react';
import '../App.css';
import { ShoesContext } from '../context/ShoesContext';

const Cart = () => {
    const {cartItems,setCartItems,setBadgeValue,badgeValue,totalPrice,setTotalPrice}=useContext(ShoesContext);

    const deleteCart=(id)=>{
         const newItems= cartItems.filter((items)=>items.id!==id);
         setCartItems(newItems);
         setBadgeValue(prevValue=>--prevValue)
    }

    return (
        <div className="cart-container">
            <Typography className="font" variant="h4" style={{marginTop:"20px"}} align="center" gutterBottom>Your Cart</Typography>
            <div className="cart-section">
                <div className="cart-history">
                    {cartItems!==null?cartItems.map((item,index)=>(
                    <Card className="cart-history-flex" key={index}>
                        <CardActionArea className="card-action">
                        <CardMedia
                            component="img"
                            height="150"
                            alt={item.name}
                            image={item.img}
                        />
                        </CardActionArea>
                        <CardContent className="flexing">
                            <div className="flex1">
                                <Typography variant="body2" className="font">{item.name}</Typography>
                                <IconButton color="secondary" onClick={(e)=>deleteCart(item.id)}>
                                    <DeleteForeverRounded fontSize="small"/>
                                </IconButton>                            
                            </div>
                            <div className="flex1">
                                <Typography  variant="body2" className="font">${item.price}</Typography>
                                <Typography variant="body2" className="font">QTY:{item.itemsLeft}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                    )):<Typography className="font" variant="h6" color="secondary" gutterBottom>Cart is empty</Typography>
                }
                </div>
                <div className="cart-summery">
                    <Card>
                        <CardContent>
                            <Typography className="font" variant="h5" gutterBottom>ORDER SUMMERY</Typography>
                            <div className="flex1">
                                <Typography gutterBottom variant="body2" className="font" >{badgeValue}ITEMS</Typography>
                                <Typography gutterBottom variant="body2" className="font" >${totalPrice}</Typography>
                            </div>
                            <div className="flex1">
                                <Typography gutterBottom  variant="body2" className="font">DELEVERY</Typography>
                                <Typography gutterBottom  variant="body2" className="font">FREE</Typography>
                            </div>
                            <div className="flex1">
                                <Typography gutterBottom variant="body2" className="font">SALES TAX</Typography>
                                <Typography gutterBottom  variant="body2" className="font"></Typography>
                            </div>
                            <div className="flex1">
                                <Typography gutterBottom variant="body2" className="font">TOTAL</Typography>
                                <Typography gutterBottom  variant="body2" className="font">${totalPrice}</Typography>
                            </div>
                            <Button
                            style={{marginTop:"30px",width:"100%"}}
                            size="small"
                            className="font"
                            variant="contained"
                            color="secondary"
                            onClick={(e)=>{setCartItems(null);setBadgeValue(0)}}
                            >
                                CHECKOUT
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Cart
