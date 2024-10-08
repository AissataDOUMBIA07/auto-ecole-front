import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PermisForms from './Forms/PermisForms';
import PermisListe from './Tables/PermisListe';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Permis() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Item><PermisForms /></Item>
      </Grid>
      <Grid item xs={8}>
        <Item><PermisListe /></Item>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Permis
