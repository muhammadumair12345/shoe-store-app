import React from 'react';
import menImage from '../images/men-image.jpg';
import womenImage from '../images/women-image.jpg';
import kidsImage from '../images/kids-image.jpg';
import { Card,CardMedia,CardActionArea,Typography,CardContent } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const text=["Men","Women","Kids"];
    const links=['/men-shoes','/women-shoes','/kids-shoes'];
    const img=[menImage,womenImage,kidsImage];

    return (
        <div className="home">
            {text.map((text,index)=>(
            <Card key={index} className="card">
                <NavLink to={links[index]}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="150"
                        alt={text}
                        image={img[index]}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2" className="font" style={{textAlign:"center"}}>
                                {text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                 </NavLink>
             </Card>
            ))}
        </div>
    )
}

export default Home
