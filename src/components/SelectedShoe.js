import { Card,CardContent } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';

const SelectedShoe = ({shoesList}) => {
    const {id}=useParams();
    const shoe=shoesList[id];

    if(!shoe){
        return <h2>Not Found!</h2>
    }

    return (
        <div>
            <h1>Selected Shoe</h1>
            <Card style={{margin:"20px"}}>
                <CardContent>
                    <img src={shoe.img} alt={shoe.name} />
                    <h2>{shoe.name}</h2>
                    <p>{shoe.price}</p>
                    <p>{shoe.itemsLeft}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default SelectedShoe
