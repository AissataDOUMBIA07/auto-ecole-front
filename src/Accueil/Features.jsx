import React from 'react';
import { Grid, Box, Typography, Paper } from '@mui/material';

const features = [
  { title: 'Formations Théoriques', description: 'Des cours en ligne et en agence.' },
  { title: 'Formations Pratiques', description: 'Conduite accompagnée avec des instructeurs expérimentés.' },
  { title: 'Examens Simplifiés', description: 'Assistance complète pour réussir vos examens.' },
];

const Features = () => {
  return (
    <Box sx={{ py: 6, px: 4 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Nos Avantages
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1">{feature.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
