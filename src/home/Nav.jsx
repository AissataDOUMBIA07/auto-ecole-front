import React, { useState, useEffect  } from "react";
import axios from "axios"; // Pour effectuer des requêtes HTTP
import {Link} from "react-router-dom";
import { AppBar, Box, Grid, Button, Autocomplete, Stack, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { ArrowBack, ArrowForward, Home, LocationOn, Store, Public, Search as SearchIcon, 
    Google as GoogleIcon, Delete} from "@mui/icons-material";
import {Toolbar, Typography, Modal, TextField, Card, CardContent, CardMedia } from "@mui/material";
import Paper from "@mui/material/Paper";
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

// import SelectInput from "@mui/material/Select/SelectInput";
// FormControl, InputLabel, Select, MenuItem,


const Navbar = () => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const images = [1, 2, 3, 4, 5, 6, 7, 8]; // Tableau d'images
  const itemsPerPage = 4; // Nombre d'éléments par page
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

  // Gestion de l'ouverture/fermeture du modal
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openAgencyModal, setOpenAgencyModal] = useState(false);
  // Modals
  const [fullname, setFullname] = useState("");
  const [adresse, setAdresse] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ville, setVille] = useState("");
  const [error, setError] = useState("");
  
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  // const handleLogin = async () => {
  //   try {
  //     setError(""); // Réinitialise les erreurs
  //     // Effectuer une requête POST à l'API pour la connexion
  //     const response = await axios.post(
  //       "http://localhost:8000/api/agence ",
  //       {
  //         email,
  //         password,
  //       }
  //     );

  //     // Si la connexion réussit
  //     if (response.data.success) {
  //       console.log("Connexion réussie : ", response.data);
  //       // handleClose(); // Fermer le modal après connexion
  //     } else {
  //       setError("Connexion échouée. Vérifiez vos identifiants.");
  //     }
  //   } catch (err) {
  //     console.error("Erreur lors de la connexion :", err);
  //     setError("Une erreur est survenue. Veuillez réessayer.");
  //   }
  // };

  const handleGoogleLogin = () => {
    console.log("Connexion via Google");
    // Ajouter la logique de connexion via Google ici
  };

  // Ajout des images de l'agence dans le modal d'ajout d'agence
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        setImage(URL.createObjectURL(file)); // Génère un aperçu de l'image
    }
  };
  // Suppression de l'image selectionner
  const handleRemoveImage = () => {
    setImage(null);
    // setImageFile(null);
    setError("");
  };

  // Partie recherche
  // Recherche les données de l'agence dans la base de donnée
  useEffect(() => {
    const fetchAgences = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/agence"); 
        setAgences(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des agences :", error);
      }
    };

    fetchAgences();
  }, []);

  // Récupérer les valeurs uniques pour Adresse et Ville  
  const [agences, setAgences] = useState([]);
  const uniqueAdresses = [...new Set(agences.map((agence) => agence.adresse))];
  // const uniqueVilles = [...new Set(agences.map((agence) => agence.fullname))];
  const [select1, setSelect1] = useState("");
  const [filteredAgences, setFilteredAgences] = useState([]);
  // const [error, setError] = useState(false);
  const handleSearch = () => {
    if (!select1) {
      setError(true); // Active l'erreur si le champ est vide
      setFilteredAgences([]); // Aucune recherche ne s'effectue
      return;
    }

    setError(false); // Réinitialise l'erreur si le champ est rempli
    // Filtrage des agences selon la sélection
    const results = agences.filter(
      (agence) => !select1 || agence.adresse === select1
    );
    // Simule une recherche (remplacez par une vraie API si nécessaire)
    setFilteredAgences(results);
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
        <Toolbar
          sx={{
            minHeight: 40,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Titre ou Logo */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 900,
              color: "white",
              textDecoration: "none",
            }}
            component={Link}
            to="/"
          >
            {/* innovAi.com */}
            {/* <img src="./images/logo.webp" alt="" sizes="5px" srcset="" width= "60px" /> */}
            
          </Typography>
          {/* Boutton Ajouter une agence et se connecter       */}
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              color="white"
              onClick={() => setOpenAgencyModal(true)}
              sx={{ textTransform: "none", borderRadius: "20px" }}
            >
              Ajouter mon agence
            </Button>
            <Button
              variant="outlined"
              color="white"
              onClick={() => setOpenLoginModal(true)}
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
          <Box sx={{ justifyContent: "center", alignItems: "center" }}>
            <Grid contenair alignItems="center" justifyContent="center">
              <Grid
                item
                xs={12}
                md={6}
                sm={6}
                sx={{ display: "flex", gap: 2, color: "rgb(97, 95, 107)" }}
              >
                <Button
                  startIcon={<Home />}
                  sx={{ textTransform: "none", color: "rgb(97, 95, 107)" }}
                  component={Link}
                  to="/"
                  >
                  Accueil
                </Button>
                <Button
                  color="rgba(0,0,0,0.1)"
                  startIcon={<Store />}
                  sx={{ textTransform: "none" }}
                  component={Link}
                  to="/agences">
                  Agences
                </Button>
                <Button
                  color="rgba(0,0,0,0.1)"
                  startIcon={<Public />}
                  sx={{ textTransform: "none" }}
                  component={Link}
                  to="/actualites">
                  Actualités
                </Button>
              </Grid>
              <Grid item xs={12} md={6} sm={6}></Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero section */}
      <Box
        sx={{
          py: 10,
          background:
            "linear-gradient(to right, rgb(28, 39, 141), rgba(76, 88, 196, 0.19))",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          // backgroundSize: 'cover',
          // flexDirection: 'column',
          // opacity: '0.6',
          // height: '70vh',
          // marginTop: '-90',
          // backgroundImage: 'url(/Images/agence1.webp)',
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid xs={12} sm={6} md={6} sx={{ margin: "auto" }}>
            <Box sx={{ height: 88 }} />
            <Typography
              variant="h3"
              gutterBottom
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 900 }}
            >
              Digitalisation et gestion de votre entreprise
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              {/* Des formations adaptées pour réussir votre permis de conduire */}
              Boostez votre entreprise à l'échelle internationale.
              {/* et saisissez de nouvelles opportunités de croissance.  */}
            </Typography>
            <Box sx={{ height: 30 }} />
            <Button
              // variant="contained"
              color="white"
              size="large"
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                background: "#",
                margin: "8",
              }}
              component={Link}
              to="/services"
            >
              Découvrir nos services
            </Button>
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <Typography>{/* ertyuio */}</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Box du champs recherche */}
      <Box sx={{ justifyContent: "center", alignItems: "center"}}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6} md={8}>
            <Paper container
              component="form"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "50px",
                flexWrap: "wrap",
                border: "3px solid rgb(255, 230, 0)", 
                borderRadius: "8px",
              }}
            >
              {/* Champ Adresse avec validation */}
              <Autocomplete
                options={uniqueAdresses}
                value={select1}
                onChange={(event, newValue) => {
                  setSelect1(newValue);
                  setError(false); // Enlève l'erreur si l'utilisateur sélectionne une valeur
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Sélectionnez une ville"
                    error={error} // Applique le style d'erreur si nécessaire
                    helperText={error ? "Veuillez sélectionner une ville" : ""}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: <LocationOn sx={{ color: error ? "red" : "warning", marginRight: 1 }} />,
                      endAdornment: (
                        <>
                          {params.InputProps.endAdornment?.props.children[0]}
                        </>
                      ),
                    }}
                    sx={{ width: 650 }}
                  />
                )}
              />
              {/* Bouton de recherche */}
              <Button
                variant="contained"
                color="warning"
                startIcon={<SearchIcon />}
                onClick={handleSearch}
                sx={{ p: "16px 20px" }}
                component={Link}
                to="/agence"
              >
                Rechercher
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Résultats de la recherche */}
        <Box mt={4}>
          <Typography variant="h6">Résultats de la recherche :</Typography>
          {filteredAgences.length > 0 ? (
            <List>
              {filteredAgences.map((agence) => (
                <ListItem key={agence.id}>
                  <ListItemText
                    primary={agence.fullname}
                    secondary={`Adresse : ${agence.adresse}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography>Aucun résultat trouvé</Typography>
          )}
        </Box>
      </Box>
      <Box sx={{ height: 60 }} /> {/* pour l'espace entre deux éléments */}

      {/* Cards Section */}
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
      >
        Nos Clients
      </Typography>
      <Box sx={{ flexGrow: 1, py: 5 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <IconButton
            color="primary"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <ArrowBack />
          </IconButton>
          {currentImages.slice(0, 4).map((item) => (
            // {[1, 2, 3, 4].map((item) => (
            <Grid item xs={12} sm={6} md={2} key={item} sx={{ margin: "auto" }}>
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
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="center"
                    >
                      Description de l'agence {item}.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
          <IconButton
            color="primary"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <ArrowForward />
          </IconButton>
        </Grid>
      </Box>

      {/* troisième element */}
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

      {/* quatrième élément */}
      <Box sx={{ background: "#", py: 35 }}>
        <Grid contenair>
          <Grid xs={12} sm={6} md={6}></Grid>
          <Grid xs={12} sm={6} md={6}></Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: "rgb(184, 166, 5)", py: 1 }}></Box>
      <Box
        sx={{
          alignItems: "center", 
          justifyContent: "center",
          backgroundColor: "rgb(8, 16, 88)",
          color: "white",
          py: 8,
          // textAlign: "center",
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={3} md={3}>
            <Typography variant="body1">
              <h3>Contactez-nous</h3>
              <div>
                <Button
                  // variant="contained"
                  startIcon={<PhoneIcon />}
                  sx={{ textTransform: "none", color: "rgb(218, 213, 243)" }}
                >
                  Appeler
                </Button>  <br />
                <Button
                  // variant="contained"
                  startIcon={<FacebookIcon />}
                  sx={{ textTransform: "none", color: "white" }}
                >
                  Facebook
                </Button> <br />
                <Button
                  // variant="contained"
                  startIcon={<WhatsAppIcon />}
                  sx={{ textTransform: "none", color: "white" }}
                >
                  WhatsApp
                </Button> <br />
                <Button
                  // variant="contained"
                  startIcon={<EmailIcon />}
                  sx={{ textTransform: "none", color: "white" }}
                >
                  Email
                </Button>
              </div>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Typography variant="body1">
              <h3>A propos de nous</h3>
                <Link style={{ textDecoration: 'none', display: 'block', marginBottom: '15px', color: 'white' }}>Qui sommes-nous?</Link>
                <Link style={{ textDecoration: 'none', display: 'block', marginBottom: '15px', color: 'white' }}>Nos partenaires</Link>
                {/* <Link style={{ textDecoration: 'none', display: 'block', marginBottom: '15px', color: 'white' }}>Notre équipe</Link> */}
                <Link style={{ textDecoration: 'none', display: 'block', marginBottom: '15px', color: 'white' }}>Condition d'utisation</Link>
                <Link style={{ textDecoration: 'none', display: 'block', marginBottom: '15px', color: 'white' }}>Politique de confidentialité</Link>
              {/* &copy; 2025 Auto-école Tigana. Tous droits réservés. */}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Typography variant="body2">
            <h3>A propos de nous</h3>
                <Link style={{ textDecoration: 'none', display: 'block', marginBottom: '15px', color: 'white' }}>Accueil</Link>
                <Link style={{ textDecoration: 'none', display: 'block', marginBottom: '15px', color: 'white' }}>Agences</Link>
                {/* <Link style={{ textDecoration: 'none', display: 'block', marginBottom: '15px', color: 'white' }}>Notre équipe</Link> */}
                <Link style={{ textDecoration: 'none', display: 'block', marginBottom: '15px', color: 'white' }}>Actualités</Link>
                <Link style={{ textDecoration: 'none', display: 'block', marginBottom: '15px', color: 'white' }}>Services</Link>
              {/* &copy; 2025 Auto-école Tigana. Tous droits réservés. */}
            </Typography>
          </Grid>
        </Grid>
       
      </Box>

      {/* Modal Se connecter */}
      <Modal
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
        aria-labelledby="login-modal1"
        aria-describedby="login-form1"
      >
        <Box sx={modalStyle}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                id="login-modal1"
                variant="h6"
                component="h2"
                gutterBottom
                textAlign="center"
              >
                Connexion
              </Typography>
              {error && (
                <Typography
                  variant="body2"
                  color="error"
                  textAlign="center"
                  gutterBottom
                >
                  {error}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                required
                type="email"
                name="email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // sx={{ height: 20, mt: 4 }}

              />
              <TextField
                label="Mot de passe"
                required
                type="password"
                name="password"
                fullWidth
                margin="normal"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // sx={{ height: 20, mt: 4 }}

              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 4 }}
                // onClick={handleLogin}
                type="submit"
              >
                Se connecter
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                startIcon={<GoogleIcon />}
                variant="outlined"
                fullWidth
                color="error"
                onClick={handleGoogleLogin}
                sx={{ mt: 2 }}
              >
                Connexion via Gmail
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      {/* Modal Ajouer une Agence*/}
      <Modal
        open={openAgencyModal}
        onClose={() => setOpenAgencyModal(false)}
        aria-labelledby="login-modal2"
        aria-describedby="login-form2"
      >
        <Box sx={modalStyle}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                id="login-modal2"
                variant="h6"
                component="h2"
                gutterBottom
                textAlign="center"
              >
                Ajout de mon agence
              </Typography>
              {/* {error && (
                <Typography
                  variant="body2"
                  color="error"
                  textAlign="center"
                  gutterBottom
                >
                  {error}
                </Typography>
              )} */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="file"
                label="Logo"
                required
                name="image"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                inputProps={{ accept: "image/*" }}
                onChange={handleImageChange}
                sx={{ mt: 4 }}
              />
              {image && (
                <Box style={{ marginTop: 10 }}>
                  <Grid container>
                    <img src={image} alt="Aperçu" width="50" />
                    {/* <br /> */}
                    <Button 
                        startIcon={<Delete />}
                        variant="contained" 
                        color="white" 
                        onClick={handleRemoveImage} 
                        sx={{ paddingLeft: 5, mt: 1 }}
                        // spacing={10}
                    >
                        Supprimer l'image
                    </Button>
                  </Grid>
                  
                </Box>
              )}
              <TextField
                label="Nom de l'agence"
                required
                type="fullname"
                name="fullname"
                fullWidth
                margin="normal"
                variant="outlined"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                sx={{ height: 20, mt: 4 }}
              />
              <TextField
                label="Ville"
                required
                type="ville"
                name="ville"
                fullWidth
                margin="normal"
                variant="outlined"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                sx={{ height: 20, mt: 4 }}
              />
              <TextField
                label="Adresse"
                required
                type="adresse"
                name="adresse"
                fullWidth
                margin="normal"
                variant="outlined"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                sx={{ height: 20, mt: 4 }}
              />
               <TextField
                label="Téléphone"
                required
                type="phone"
                name="phone"
                fullWidth
                margin="normal"
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                sx={{ height: 20, mt: 4 }}
              />
               <TextField
                label="Email"
                required
                type="email"
                name="email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ height: 20, mt: 4 }}
              />
              <TextField
                label="Mot de passe"
                required
                type="password"
                name="password"
                fullWidth
                margin="normal"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ height: 20, mt: 4 }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 4 }}
                // onClick={handleLogin}
                type="submit"
              >
                Créer
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
