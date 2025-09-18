import React, { useState } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Product = () => {
    const [product, setproduct] = useState([])
    
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
        setproduct(res.data)
    })
  return (
      <div class="product">
          <Grid container spacing={10}>
              
          {product.map((val) => {
              return(
         
          <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                          sx={{ height: 140 }}
                          image={val.image}
                            title="green iguana"
              />

             
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      {val.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
              </CardActions>
                  </Card>
              )
          })}
          </Grid>
    </div>
  )
}

export default Product
