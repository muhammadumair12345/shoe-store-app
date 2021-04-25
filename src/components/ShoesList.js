import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const ShoesList = ({shoesList,shoesType}) => {

    return (
        <div>
            <h1>Shoes List</h1>
            {Object.entries(shoesList).map(([id,{name,price,itemsLeft,img}])=>(
            <Link to={`/${shoesType}/${id}`} key={id}>
                <Card style={{margin:20}}>
                    <CardContent>
                            <img src={img} alt={name} />
                            <h2>{name}</h2>
                            <p>{price}</p>
                            <p>{itemsLeft}</p>
                    </CardContent>
                </Card>
            </Link>
            ))}
        </div>
    )
}

export default ShoesList
