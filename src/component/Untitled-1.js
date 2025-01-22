// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Badge, MenuItem, Menu, Button } from '@mui/material';
// import { Home, Info, LocalOffer, ContactMail, Notifications, AccountCircle } from '@mui/icons-material';

// const Navbar = () => {
//   // Gestion des menus (notifications, utilisateur)
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);

//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#1c1c1c' }}>
//       <Toolbar>
//         {/* Logo */}
//         <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#f44336' }}>
//           Auto-école Tigana
//         </Typography>

//         {/* Menu principal */}
//         <MenuItem sx={{ color: 'white' }}>
//           <IconButton edge="start" color="inherit">
//             <Home />
//           </IconButton>
//           Accueil
//         </MenuItem>
//         <MenuItem sx={{ color: 'white' }}>
//           <IconButton edge="start" color="inherit">
//             <Info />
//           </IconButton>
//           Agences
//         </MenuItem>
//         <MenuItem sx={{ color: 'white' }}>
//           <IconButton edge="start" color="inherit">
//             <LocalOffer />
//           </IconButton>
//           Services
//         </MenuItem>
//         <MenuItem sx={{ color: 'white' }}>
//           <IconButton edge="start" color="inherit">
//             <ContactMail />
//           </IconButton>
//           Contact
//         </MenuItem>

//         {/* Notifications */}
//         <IconButton color="inherit" sx={{ mx: 1 }}>
//           <Badge badgeContent={3} color="error">
//             <Notifications />
//           </Badge>
//         </IconButton>

//         {/* Options utilisateur */}
//         <Button variant="outlined" color="inherit" sx={{ mx: 1, borderColor: '#f44336', color: '#f44336' }}>
//           Se connecter
//         </Button>
//         <Button variant="contained" color="error" sx={{ mx: 1 }}>
//           Créer un compte
//         </Button>

//         {/* Profil utilisateur */}
//         <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
//           <AccountCircle />
//         </IconButton>

//         {/* Menu déroulant utilisateur */}
//         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//           <MenuItem onClick={handleMenuClose}>Profil</MenuItem>
//           <MenuItem onClick={handleMenuClose}>Déconnexion</MenuItem>
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import {
  Home,
  LocationOn,
  Build,
  Mail,
  Notifications,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1c1c1c" }}>
      <Toolbar>
        {/* Titre ou Logo */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#f44336" }}
        >
          Auto-école Tigana
        </Typography>

        {/* Menu avec icônes */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            startIcon={<Home />}
            sx={{ textTransform: "none" }}
          >
            Accueil
          </Button>
          <Button
            color="inherit"
            startIcon={<LocationOn />}
            sx={{ textTransform: "none" }}
          >
            Agences
          </Button>
          <Button
            color="inherit"
            startIcon={<Build />}
            sx={{ textTransform: "none" }}
          >
            Services
          </Button>
          <Button
            color="inherit"
            startIcon={<Mail />}
            sx={{ textTransform: "none" }}
          >
            Contact
          </Button>
        </Box>

        {/* Notifications */}
        <IconButton color="inherit" sx={{ mx: 1 }}>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
        </IconButton>

        {/* Options utilisateur */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="text"
            color="inherit"
            sx={{
              textTransform: "none",
              fontSize: "0.85rem",
              color: "#ffffffaa",
            }}
          >
            Se connecter
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontSize: "0.85rem",
              color: "#ffffff",
              borderColor: "#ffffff55",
            }}
          >
            Créer un compte
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

<Box
  // sx={{
  //   backgroundImage: 'url(/Images/image1.webp)',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '90vh',
  //   color: 'white',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   textAlign: 'center',
  //   px: 2,
  // }}
  sx={{
    flexGrow: 1,
    padding: 40,
    backgroundColor: "Highlight",
    position: "relative",
    image: "url(/Images/im-femme.webp)",
  }}
>
  {/* <Typography variant="h3" gutterBottom>
          Bienvenue sur Auto-école Tigana
        </Typography>
        <Typography variant="h5" gutterBottom>
          Des formations adaptées pour réussir votre permis de conduire
        </Typography> */}
  {/* <Button variant="contained" color="secondary" size="large">
          Découvrir nos services
        </Button> */}
</Box>;
{/* troisième element */}
<Box sx={{
  background: "linear-gradient(to right, rgb(112, 8, 8), rgb(112, 8, 8),rgba(6, 38, 126, 0.77))", 
  py: 30, 
  // clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
  // borderRadius: "30%",
  // width: "1350px", 
  // height: "20px",
  // margin: "20px auto",
  
  // clipPath: "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)", // Trapèze
  clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)", // Trapèze paysage

  width: "1700px", // Largeur du trapèze
  height: "90px", // Hauteur du trapèze

  }}>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={3}>
      {/* <Box
        sx={{
          background: "linear-gradient(to right, rgb(247, 240, 240), rgba(211, 213, 221, 0.77))",
          borderRadius: "50%",
          width: "60%",
          height: "180px",
          margin: "20px auto",
          position: "relative",
        }}
      >
      </Box> */}
    </Grid>
  </Grid>
</Box>

// recherche
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
