import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ProductList from "./ProductList";
import Navbar from "../navbar/Navbar";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Container>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" component="h1" color="#fbee02">
            Products
          </Typography>
        </Box>
        <ProductList />
      </Container>
    </div>
  );
}

export default Dashboard;
