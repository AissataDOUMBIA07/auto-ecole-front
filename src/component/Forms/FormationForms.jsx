import React, {useState, useEffect} from 'react';
import { TextField,  Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function FormationForms() {
    const [formationData, setFormationData] = useState({
        libelle: "",
        lieu: "",
        datedebut: "",
        datefin: "",
        agence_id: "",
        salle_id: "",
        personnel_id: "",
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
        setFormationData({ ...formationData, [name]: value });
      };
    
      const handleFormationSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            "http://localhost:8000/api/formations/",
            formationData,
            { withCredentials: true } // Assurez-vous d'inclure les cookies avec les requêtes
          );
          toast.success("Données soumises avec succès!");
          setFormationData({
            libelle: "",
            lieu: "",
            datedebut: "",
            datefin: "",
            agence_id: "",
            salle_id: "",
            personnel_id: "",
          });
          console.log("formation data submitted successfully:", response.data);
        } catch (error) {
          toast.error("Erreur lors de la soumission des données!");
          console.error("Error submitting formation data:", error);
        }
      };

  return (
    <form autoComplete="off" onSubmit={handleFormationSubmit}>
        <h2>Formation Form</h2>
             <TextField 
                label="Libelle"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="libelle"
                value={formationData.libelle}
                fullWidth
                sx={{mb: 3}}
             />
              <TextField 
                label="Lieu"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="lieu"
                sx={{mb: 3}}
                fullWidth
                value={formationData.lieu}
             />
             <TextField 
                label="DateDebut"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="date"
                name="datedebut"
                value={formationData.datedebut}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="DateFin"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="date"
                name="datefin"
                value={formationData.datefin}
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
                value={formationData.agence_id}
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
                name="salle_id"
                value={formationData.salle_id}
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
                value={formationData.personnel_id}
                fullWidth
                sx={{mb: 3}}
             />
             <Button variant="outlined" color="secondary" type="submit">Ajouter</Button>
             <ToastContainer/>
    </form>
  )
}

export default FormationForms