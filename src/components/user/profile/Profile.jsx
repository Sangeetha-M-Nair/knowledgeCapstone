import React from 'react'
import Navbar from '../navbar/Navbar';
import { Box, Typography } from '@mui/material';

const Profile = () => {
  return (
    <div>
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
          Profile
        </Typography>
      </Box>
    </div>
  );
}

export default Profile
