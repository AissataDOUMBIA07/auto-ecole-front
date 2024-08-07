import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PersonnelForms from './Forms/PersonnelForms';
import PersonnelListe from './Tables/PersonnelListe';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Personnels() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item><PersonnelForms /></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><PersonnelListe /></Item>
        </Grid>
      </Grid>
    </Box>  )
}

export default Personnels