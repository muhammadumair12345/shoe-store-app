import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent,CardActionArea,CardMedia,Typography, IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ShoesList = ({shoesList,shoesType}) => {

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
                    <Typography gutterBottom variant="h6" align="center">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="body2">PRICE {price}</Typography>
                    <div className="add-to-cart">
                        <Typography variant="body2">ITEMS LEFT {itemsLeft}</Typography>
                        <IconButton color="inherit">
                                <FontAwesomeIcon icon={faCartPlus} size="xs" />
                        </IconButton>
                    </div>
                </CardContent>
            </Card>
            ))}
        </div>
    )
}

export default ShoesList
