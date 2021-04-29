import { Card,CardContent, Typography,CardActionArea,CardMedia, Button } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useParams } from 'react-router';
import "../App.css";

const SelectedShoe = ({shoesList}) => {
    const {id}=useParams();
    const shoe=shoesList[id];

    if(!shoe){
        return <h2>Not Found!</h2>
    }

    return (
        <div className="selected-shoe">
            <Typography className="font" align="center" style={{marginTop:"20px"}} gutterBottom variant="h5">Selected Shoe</Typography>
            <Card className="selected-shoe-card">
                <CardActionArea className="card-action">
                    <CardMedia
                    component="img"
                    height="500"
                    alt={shoe.name}
                    image={shoe.img}
                    />
                </CardActionArea>
                <CardContent className="card-content">
                    <Typography gutterBottom variant="h6" className="font">
                        {shoe.name}
                    </Typography>
                    <Typography gutterBottom  variant="body2" className="font">PRICE {shoe.price}</Typography>
                    <Typography gutterBottom variant="body2" className="font">ITEMS LEFT {shoe.itemsLeft}</Typography>
                    <Button
                    style={{marginTop:"30px",width:"100%"}}
                    size="small"
                    className="font"
                    variant="contained"
                    color="inherit"
                    startIcon={<ShoppingCartOutlined />}
                    >
                        ADD To CART
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default SelectedShoe
