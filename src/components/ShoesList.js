import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent,CardActionArea,CardMedia,Typography, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../App.css';
import { ShoesContext } from '../context/ShoesContext';

const ShoesList = ({shoesList,shoesType}) => {
    const {setBadgeValue,cartItems,setCartItems,setTotalPrice}=useContext(ShoesContext);

    const addValueListner=(id)=>{
        if(shoesList[id].itemsLeft>0)
        {
            setBadgeValue(prevBadgeValue=>++prevBadgeValue);
            cartItems!==null?setCartItems([...cartItems,{
                id,
                img:shoesList[id].img,
                name:shoesList[id].name,
                price:shoesList[id].price,
                itemsLeft:shoesList[id].itemsLeft,
            }]):setCartItems([{
                id,
                img:shoesList[id].img,
                name:shoesList[id].name,
                price:shoesList[id].price,
                itemsLeft:shoesList[id].itemsLeft,
            }]);
            setTotalPrice(prevPrice=>prevPrice+=shoesList[id].price);
            shoesList[id].itemsLeft-=1;
        }
    }

    return (
        <div className="shoes-list">
            {Object.entries(shoesList).map(([id,{name,price,itemsLeft,img}])=>(
            <Card className="shoes-list-card" key={id}>
                <Link to={`/${shoesType}/${id}`} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="300"
                        alt={name}
                        image={img}
                        />
                    </CardActionArea>
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h6" align="center" className="font">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="body2" className="font">PRICE ${price}</Typography>
                    <div className="add-to-cart">
                        <Typography variant="body2" className="font">ITEMS LEFT {itemsLeft}</Typography>
                        <IconButton color="inherit" onClick={(e)=>addValueListner(id)}>
                                <FontAwesomeIcon icon={faCartPlus} size="xs" />
                        </IconButton>
                    </div>
                </CardContent>
            </Card>
            ))}
        </div>
    )
}

export default React.memo(ShoesList)
