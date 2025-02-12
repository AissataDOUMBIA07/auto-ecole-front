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
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Top Blue Navbar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: 40,
          display: "flex",
          justifyContent: "center",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            minHeight: 40,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              textTransform: "none",
              ml: 2,
              fontSize: "0.8rem",
              padding: "2px 8px",
            }}
          >
            Ajouter mon entreprise
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Navbar */}
      <AppBar
        position="fixed"
        sx={{
          top: 40,
          backgroundColor: "#ffffffcc",
          color: "black",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          zIndex: (theme) => theme.zIndex.drawer,
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Auto-École Tigana
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleOpen}
            sx={{ textTransform: "none", borderRadius: "20px" }}
          >
            Se connecter
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content Spacer */}
      <Box sx={{ height: 88 }} />

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/Images/agence1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
          animation: 'fadeIn 1.5s',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
          Bienvenue chez Auto-École Tigana
        </Typography>
        <Typography variant="h5" gutterBottom>
          Une formation sur mesure pour réussir votre permis
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 3, borderRadius: "20px", padding: "10px 30px" }}
        >
          Découvrir nos services
        </Button>
      </Box>

      {/* Cards Section */}
      <Box sx={{ flexGrow: 1, padding: 8, py: 15, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Nos Clients
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    maxWidth: 300,
                    margin: "auto",
                    borderRadius: "20px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
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
        </Grid>
      </Box>

      {/* About Section */}
      <Box
        sx={{
          py: 15,
          px: 4,
          textAlign: "center",
          backgroundColor: "#111",
          color: "white",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Qui sommes-nous ?
        </Typography>
        <Typography variant="body1" maxWidth={800} mx="auto">
          Nous sommes une auto-école dédiée à fournir une formation de qualité pour
          garantir votre réussite au permis de conduire. Rejoignez-nous pour une
          expérience d'apprentissage inégalée !
        </Typography>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: "primary.dark", color: "white", py: 3, textAlign: "center" }}>
        <Typography variant="body1">&copy; 2025 Auto-école Tigana. Tous droits réservés.</Typography>
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={handleClose} aria-labelledby="login-modal" aria-describedby="login-form">
        <Box sx={modalStyle}>
          <Typography
            id="login-modal"
            variant="h6"
            component="h2"
            gutterBottom
            textAlign="center"
          >
            Connexion
          </Typography>
          <TextField label="Email" type="email" fullWidth margin="normal" variant="outlined" />
          <TextField label="Mot de passe" type="password" fullWidth margin="normal" variant="outlined" />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, borderRadius: "20px" }}
          >
            Se connecter
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;




            {/* Champ 1 - Localités
            <FormControl sx={{ minWidth: 300, border: "2px solid rgb(255, 230, 0)" }}>
              <InputLabel id="select1-label">
                <Button
                  startIcon={<ApartmentIcon />}
                  sx={{ textTransform: "none", color: "rgb(97, 95, 107)" }}
                >
                  Adresse
                </Button>
              </InputLabel>
              <Select
                labelId="select1-label"
                value={select1}
                onChange={(e) => setSelect1(e.target.value)}
              >
                {agences
                  .map((agence) => agence.adresse)
                  .filter((value, index, self) => self.indexOf(value) === index) // Élimine les doublons
                  .map((adresse) => (
                    <MenuItem key={adresse} value={adresse}>
                      {adresse}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            Champ 2 - Nom des agences
            <FormControl sx={{ minWidth: 300, border: "2px solid rgb(255, 230, 0)" }}>
              <InputLabel id="select2-label">
                <Button
                  startIcon={<LocationOn />}
                  sx={{ textTransform: "none", color: "rgb(97, 95, 107)" }}
                >
                  Ville
                </Button>
              </InputLabel>
              <SelectInput
                name="states[]" 
                // multiple="multiple"
                labelId="select2-label"
                value={select2}
                onChange={(e) => setSelect2(e.target.value)}
              >
                {agences
                  .map((agence) => agence.fullname)
                  .filter((value, index, self) => self.indexOf(value) === index) // Élimine les doublons
                  .map((fullname) => (
                    <MenuItem key={fullname} value={fullname}>
                      {fullname}
                    </MenuItem>
                  ))}
              </SelectInput>
            </FormControl> */}
