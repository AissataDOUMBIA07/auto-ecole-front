import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.dark', color: 'white', py: 3, textAlign: 'center' }}>
      <Typography variant="body1">&copy; 2025 Auto-école Tigana. Tous droits réservés.</Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" underline="hover">
          Politique de Confidentialité
        </Link>{' '}
        |{' '}
        <Link href="#" color="inherit" underline="hover">
          Conditions d'utilisation
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
