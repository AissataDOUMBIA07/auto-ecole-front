import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';


const agencies = [
  { name: 'Tigana Paris', image: '/Images/agence1.webp', description: 'Formation au cœur de Paris.' },
  { name: 'Tigana Lyon', image: '/Images/agence2.webp', description: 'Des instructeurs professionnels à Lyon.' },
  { name: 'Tigana Marseille', image: '/Images/agence3.webp', description: 'Conduite adaptée à Marseille.' },
];

const Agencies = () => {
  return (
    <Box sx={{ py: 6, px: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Nos Agences
      </Typography>
      <Grid container spacing={4}>
        {agencies.map((agency, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Link to={agency.link} style={{ textDecoration: 'none' }}>
              <Card>
                <CardMedia component="img" height="200" image={agency.image} alt={agency.name} />
                <CardContent>
                  <Typography variant="h6">{agency.name}</Typography>
                  <Typography variant="body2">{agency.description}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Agencies;
