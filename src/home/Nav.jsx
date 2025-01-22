import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
// import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IconButton} from "@mui/material";
// import { Badge } from "@mui/material";
import { Home, LocationOn, Category, Build} from "@mui/icons-material";
// import {  Mail, Notifications  } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";








const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const images = [1, 2, 3, 4, 5, 6, 7, 8]; // Tableau d'images
  const itemsPerPage = 4; // Nombre d'éléments par page

  // Gestion de l'ouverture/fermeture du modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Pagination
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const currentImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };


  // const [input1, setInput1] = useState('');
  // const [input2, setInput2] = useState('');
  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('');

  const handleSearch = () => {
    console.log('Search with:', { select1, select2 });
    // Ajoutez ici votre logique de recherche
  };


  // Fonction pour la connexion via Email
  const handleEmailLogin = () => {
    console.log("Connexion via Email");
  };

  const handleFacebookLogin = () => {
    // Ajoutez ici l'intégration avec le Facebook SDK
    console.log("Connexion via Facebook");
  };

  const handleWhatsAppLogin = () => {
    // Implémentez la logique de connexion via WhatsApp
    console.log("Connexion via WhatsApp");
  };

  return (
    <>
      {/* Top Blue Navbar */}
      <AppBar 
        position="fixed"
        sx={{
          backgroundColor: "rgb(28, 39, 141)",
          height: 60,
          display: "flex",
          justifyContent: "center",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ minHeight: 40, display: "flex", justifyContent: "space-between" }}>
          {/* Titre ou Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "'Roboto', sans-serif", fontWeight: 900, color: "white" }} >
            innovAi.com
          </Typography>    
          {/* Boutton Ajouter u e agence et se connecter       */}
          <Stack direction="row" spacing={1}>
            <Button
            variant="outlined"      
            color="white"
            onClick={handleOpen}
            sx={{ textTransform: "none", borderRadius: "20px" }}
            >
              Ajouter une agence
            </Button>
            <Button 
              variant="outlined"
              color="white"
              onClick={handleOpen}
              sx={{ textTransform: "none", borderRadius: "20px" }}
            >
              Se connecter
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* Main Navbar */}
      <AppBar
        position="fixed"
        sx={{
          top: 60,
          backgroundColor: "white", // Blanc cassé
          color: "black", // Écritures en noir
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          zIndex: (theme) => theme.zIndex.drawer,

        }}
      > 
        <Toolbar>
          {/* Menu avec icônes */}
          <Box sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Grid contenair alignItems="center" justifyContent="center">
              <Grid  item xs={12} md={6} sm={6} sx={{ display: "flex", gap: 2,  color: "rgb(97, 95, 107)" }}>
                <Button startIcon={<Home />} sx={{ textTransform: "none",  color: "rgb(97, 95, 107)" }}>
                  Accueil
                </Button>
                <Button color="rgba(0,0,0,0.1)" startIcon={<LocationOn />} sx={{ textTransform: "none" }}>
                  Agences
                </Button>
                <Button color="rgba(0,0,0,0.1)" startIcon={<Build />} sx={{ textTransform: "none" }}>
                  Services
                </Button>
                {/* <Button color="rgba(0,0,0,0.1)" startIcon={<Mail />} sx={{ textTransform: "none" }}>
                  Contact
                </Button>             */}
                {/* Notifications */}
                {/* <IconButton color="rgb(97, 95, 107)" sx={{ mx: 1 }}>
                  <Badge badgeContent={3} color="error">
                    <Notifications />
                  </Badge>
                </IconButton> */}
              </Grid>
              <Grid  item xs={12} md={6} sm={6}>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Modal */}
      <Modal open={open} onClose={handleClose} aria-labelledby="login-modal" aria-describedby="login-form">
        <Box sx={modalStyle}>
          <Grid contenair>
            <Grid xs={12} sm={6} md={6}>
              <Typography id="login-modal" variant="h6" component="h2" gutterBottom textAlign={"center"}>
                Connexion
              </Typography>
              <TextField label="Email" type="email" fullWidth margin="normal" variant="outlined" />
              <TextField label="Mot de passe" type="password" fullWidth margin="normal" variant="outlined" />
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Se connecter
              </Button>
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <Button
                startIcon={<GoogleIcon />}
                variant="outlined"
                fullWidth
                color="error"
                // onClick={renderProps.onClick}
                // disabled={renderProps.disabled}
                sx={{ mt: 2 }}
              >
                Connexion via Gmail
              </Button>
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <Button
                startIcon={<FacebookIcon />}
                variant="outlined"
                fullWidth
                color="primary"
                onClick={handleFacebookLogin}
                sx={{ mb: 2 }}
              >
                Connexion via Facebook
              </Button>
            </Grid>
            <Grid xs={12} sm={6} md={6}>
              <Button
                startIcon={<WhatsAppIcon />}
                variant="outlined"
                fullWidth
                color="success"
                onClick={handleWhatsAppLogin}
              >
                Connexion via WhatsApp
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {/* <Box sx={{ height: 88 }} /> // pour espacer les Box */}
    
      {/* Hero section */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(to right, rgb(28, 39, 141), rgba(76, 88, 196, 0.19))", 
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundSize: 'cover',
          // flexDirection: 'column',
          // opacity: '0.6',
          // height: '70vh',
          // marginTop: '-90',
          // backgroundImage: 'url(/Images/agence1.webp)',

        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid xs={12} sm={6} md={6} sx={{margin: 'auto'}}>
            <Box sx={{ height: 88} } />
            <Typography variant="h3" gutterBottom  style={{fontFamily: "'Roboto', sans-serif", fontWeight: 900}}> 
              Digitalisation et getion de votre entreprise
            </Typography>
            <Typography variant="h5" gutterBottom style={{fontFamily: "'Roboto', sans-serif"}}>
              {/* Des formations adaptées pour réussir votre permis de conduire */}
              Boostez votre entreprise à l'échelle internationale.
               {/* et saisissez de nouvelles opportunités de croissance.  */}
            </Typography> 
            <Box  sx={{ height: 30 }}/>
            <Button 
              // variant="contained" 
              color="white" 
              size="large" 
              variant="outlined"  
              sx={{ textTransform: "none", borderRadius: "20px", background: "#", margin: "8" }}
            >
              Découvrir nos services
            </Button>
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <Typography>
              {/* ertyuio */}
            </Typography>
          </Grid>
        </Grid>  
             
      </Box>
      
      {/* Box du champs recherche */}
      <Box>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6} md={8}>
            <Paper
              component="form"
              sx={{
                // p: '10px 10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '50px',
                flexWrap: 'wrap',
                border: '3px solid rgb(255, 230, 0)', // Bordure de 2px de couleur Orange Material-UI
                borderRadius: '8px',
                // padding: '16px', 
              }}
            >
              {/* Champ 1 */}
              <FormControl sx={{ minWidth: 300, border: '2px solid rgb(255, 230, 0)'}}>
                <InputLabel id="select1-label">
                  <Button startIcon={<LocationOn />} sx={{ textTransform: "none",  color: "rgb(97, 95, 107)" }}>
                    Localités
                  </Button> 
                </InputLabel>
                <Select
                  labelId="select1-label"
                  value={select1}
                  onChange={(e) => setSelect1(e.target.value)}
                >
                  {/* <MenuItem value="">Sélectionnez une localité</MenuItem> Option vide */}
                  <MenuItem value="option1">Bamako</MenuItem>
                  <MenuItem value="option2">Ségou</MenuItem>
                  <MenuItem value="option2">Koulikoro</MenuItem>
                </Select>
              </FormControl>
              {/* Champ 2 */}
              <FormControl sx={{ minWidth: 300, border: '2px solid rgb(255, 230, 0)'}}>
                <InputLabel id="select2-label">
                  <Button startIcon={<Category />} sx={{ textTransform: "none",  color: "rgb(97, 95, 107)" }}>
                    Types de permis
                  </Button>     
                </InputLabel>
                <Select
                  labelId="select2-label"
                  value={select2}
                  onChange={(e) => setSelect2(e.target.value)}
                >
                  <MenuItem value="option1">Poids Légé</MenuItem>
                  <MenuItem value="option2">Poids Lourd</MenuItem>
                </Select>
              </FormControl>

              {/* Bouton de recherche */}
              <Button
                variant="contained"
                color="warning"
                startIcon={<SearchIcon />}
                onClick={handleSearch}
                
                sx={{ p: '16px 20px' }}
              >
                Rechercher
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: 60}}/>   {/* pour l'espace entre deux éléments */}

      {/* Cards Section */}
      <Typography variant="h4" textAlign="center" gutterBottom sx={{fontFamily: "'Roboto', sans-serif", fontWeight: 700}}>
          Nos Clients
      </Typography>
      <Box sx={{ flexGrow: 1, py: 5}}>
        
        <Grid container spacing={2} alignItems="center" justifyContent="center" >
          <IconButton color="primary" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
            <ArrowBack  />
          </IconButton>
            {currentImages.slice(0, 4).map((item) => (

            // {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={2} key={item} sx={{margin: 'auto'}}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      margin: "auto",
                      borderRadius: "20px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 8px 20px rgba(104, 31, 240, 0.91)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={`/Images/agence${item}.webp`}
                      alt={`Agence ${item}`}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ textAlign: "center", fontWeight: "bold" }}
                      >
                        Agence {item}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" textAlign="center">
                        Description de l'agence {item}.
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          <IconButton color="primary" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
            <ArrowForward />
          </IconButton>
        </Grid>
      </Box>

      {/* troisième element */}
      <Box sx={{
        background: "linear-gradient(to right, rgba(76, 88, 196, 0.10), rgb(28, 39, 141, 0.4))", 
        py: 50, 
        clipPath: "polygon(50% 15%, 100% 20%, 100% 200%, 10% 1500%, 0% 10%)",
        // margin: "2px auto",
        transitionProperty: "revert-layer",

      }}>
        <Typography variant="h6" textAlign="center" gutterBottom color="white">
          {/* Qui sommes-nous? */}
        </Typography>
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
              
          </Grid>
        </Grid> */}
      </Box>

      {/* quatrième élément */}
      <Box sx={{background: '#', py: 35}}>
        <Grid contenair>
          <Grid xs={12} sm={6} md={6}></Grid>
          <Grid xs={12} sm={6} md={6}></Grid>
        </Grid>
      </Box>


      {/* Footer */}
      <Box sx={{backgroundColor: 'rgb(184, 166, 5)', py: 1}}></Box>
      <Box sx={{ backgroundColor: 'rgb(8, 16, 88)', color: 'white', py: 15, textAlign: 'center' }}>
        <Typography variant="body1">&copy; 2025 Auto-école Tigana. Tous droits réservés.</Typography>
        <Typography variant="body2">

        </Typography>
      </Box>
    </>
  );
};

export default Navbar;