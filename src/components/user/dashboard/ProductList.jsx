import {
  AppBar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import products from "./products";
import "./ProductList.css";

function ProductList() {
  return (<>
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card variant="elevation">
            <CardMedia
              component="img"
              style={{
                width: "100%",
                height: "200px",
                padding: "5%",
                objectFit: "contain",
              }}
              image={product.imageUrl}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6">${product.price.toFixed(2)}</Typography>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid></>
  );
}

export default ProductList;
