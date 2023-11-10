import React from "react";
import Navbar from "../user/navbar/Navbar";
import { Box, Typography } from "@mui/material";

export default function Account() {
  return (
    <div>
      {" "}
      <Navbar />
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
          Account
        </Typography>
      </Box>
    </div>
  );
}
