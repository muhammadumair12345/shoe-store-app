import { Card,CardContent, Typography,CardActionArea,CardMedia, Button } from '@material-ui/core';
import React from 'react';
import '../App.css';

const Cart = () => {
    return (
        <div className="cart-container">
            <Typography className="font" variant="h4" style={{marginTop:"20px"}} align="center" gutterBottom>Your Cart</Typography>
            <div className="cart-section">
                <div className="cart-history">
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="body2" className="font">Name</Typography>
                            <Typography gutterBottom variant="body2" className="font">X</Typography>
                            <Typography gutterBottom  variant="body2" className="font">$100</Typography>
                            <Typography gutterBottom variant="body2" className="font">QTY:3</Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className="cart-summery">
                    <Card>
                        <CardContent>
                            <Typography className="font" variant="h5" gutterBottom>ORDER SUMMERY</Typography>
                            <Typography gutterBottom variant="body2" className="font">3ITEMS $500</Typography>
                            <Typography gutterBottom  variant="body2" className="font">DELEVERY FREE</Typography>
                            <Typography gutterBottom variant="body2" className="font">SALES TAX</Typography>
                            <Typography gutterBottom variant="body2" className="font">TOTAL $500</Typography>
                            <Button
                            style={{marginTop:"30px",width:"100%"}}
                            size="small"
                            className="font"
                            variant="contained"
                            color="secondary"
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
