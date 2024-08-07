import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ExamenForms from './Forms/ExamenForms';
import ExamenListe from './Tables/ExamenListe';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Examen() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Item><ExamenForms /></Item>
      </Grid>
      <Grid item xs={8}>
        <Item><ExamenListe /></Item>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Examen