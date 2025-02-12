import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Grid } from "@mui/material";
import { Delete } from "@mui/icons-material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AgenceForms() {
  const [agenceData, setAgenceData] = useState({
    fullname: "",
    email: "",
    password: "",
    adresse: "",
    villes: "",
    phone: "",
    inmmatriculation: "",
  });

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
          withCredentials: true,
        });
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };
    fetchCsrfToken();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgenceData({ ...agenceData, [name]: value });
  };

  const handleAgenceSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/agence/",
        agenceData,
        { withCredentials: true } // Assurez-vous d'inclure les cookies avec les requêtes
      );
      toast.success("Données soumises avec succès!");
      setAgenceData({
        fullname: "",
        email: "",
        password: "",
        adresse: "",
        villes: "",
        phone: "",
        inmmatriculation: "",
      });
      console.log("agence data submitted successfully:", response.data);
    } catch (error) {
      toast.error("Erreur lors de la soumission des données!");
      console.error("Error submitting agence data:", error);
    }
  };

  // Ajout des images de l'agence dans le modal d'ajout d'agence
    const [setError] = useState("");
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

  return (
    <div>
      <form autoComplete="off" onSubmit={handleAgenceSubmit}>
        <h2>Agence Form</h2>
        <TextField
          label="Email"
          required
          variant="outlined"
          color="primary"
          type="email"
          name="email"
          sx={{ mb: 1 }}
          fullWidth
          value={agenceData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          required
          variant="outlined"
          color="primary"
          type="password"
          name="password"
          value={agenceData.password}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 1 }}
        />
        <TextField
          type="file"
          label="Image"
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
          label="Adresse"
          required
          variant="outlined"
          color="primary"
          type="text"
          name="adresse"
          value={agenceData.adresse}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 1 }}
        />
        <TextField
          label="Ville"
          required
          variant="outlined"
          color="primary"
          type="text"
          name="villes"
          value={agenceData.villes}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 1 }}
        />
        <TextField
          label="Telephone"
          required
          variant="outlined"
          color="primary"
          type="text"
          name="phone"
          value={agenceData.phone}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 1 }}
        />
        <TextField
          label="Immatriculation"
          required
          variant="outlined"
          color="primary"
          type="text"
          name="inmmatriculation"
          value={agenceData.inmmatriculation}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 1 }}
        />
        <Button variant="outlined" color="primary" type="submit">
          Ajouter
        </Button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default AgenceForms;
