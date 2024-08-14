import React, {useState, useEffect} from 'react';
import { TextField,  Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function VoitureForms() {
    const [voitureData, setVoitureData] = useState({
        libelle: "",
        nombreplace: "",
        matricule: "",
        marque: "",
        couleur: "",
        personnel_id: "",
        agence_id: "",
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
        setVoitureData({ ...voitureData, [name]: value });
      };
    
      const handleVoitureSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            "http://localhost:8000/api/voitures/",
            voitureData,
            { withCredentials: true } // Assurez-vous d'inclure les cookies avec les requêtes
          );
          toast.success("Données soumises avec succès!");
          setVoitureData({
            libelle: "",
            nombreplace: "",
            matricule: "",
            marque: "",
            couleur: "",
            personnel_id: "",
            agence_id: "",
          });
          console.log("voiture data submitted successfully:", response.data);
        } catch (error) {
          toast.error("Erreur lors de la soumission des données!");
          console.error("Error submitting voiture data:", error);
        }
      };
  return (
    <form autoComplete="off" onSubmit={handleVoitureSubmit}>
        <h2>Voiture Form</h2>
             <TextField 
                label="Libelle"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="libelle"
                value={voitureData.libelle}
                fullWidth
                sx={{mb: 3}}
             />
              <TextField 
                label="Nombreplace"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="nombreplace"
                sx={{mb: 3}}
                fullWidth
                value={voitureData.nombreplace}
             />
             <TextField 
                label="Matricule"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="matricule"
                value={voitureData.matricule}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Marque"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="marque"
                value={voitureData.marque}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Agence"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="agence_id"
                value={voitureData.agence_id}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Salle"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="couleur"
                value={voitureData.couleur}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Personnel"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="personnel_id"
                value={voitureData.personnel_id}
                fullWidth
                sx={{mb: 3}}
             />
             <Button variant="outlined" color="secondary" type="submit">Ajouter</Button>
             <ToastContainer/>
    </form>
  )
}

export default VoitureForms