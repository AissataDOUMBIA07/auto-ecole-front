import React from 'react';
import { Box, Typography } from "@mui/material";



function Actualites() {
  return (
    <div>
      <Box
        sx={{
          background:
            "linear-gradient(to right, rgba(76, 88, 196, 0.10), rgb(28, 39, 141, 0.4))",
          py: 50,
          clipPath: "polygon(50% 15%, 100% 20%, 100% 200%, 10% 1500%, 0% 10%)",
          // margin: "2px auto",
          transitionProperty: "revert-layer",
        }}
      >
        <Typography variant="h6" textAlign="center" gutterBottom color="white">
          {/* Qui sommes-nous? */}
        </Typography>
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
              
          </Grid>
        </Grid> */}
      </Box>
    </div>
  )
}

export default Actualites