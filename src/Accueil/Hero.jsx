import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/Images/agence1.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Bienvenue sur Auto-école Tigana
      </Typography>
      <Typography variant="h5" gutterBottom>
        Des formations adaptées pour réussir votre permis de conduire
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Découvrir nos services
      </Button>
    </Box>
  );
};

export default Hero;
