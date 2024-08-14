import React, {useState, useEffect} from 'react';
import { TextField,  Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function ExamenForms() {
    const [examenData, setExamenData] = useState({
        type: "",
        lieu: "",
        heure: "",
        date: "",
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
        setExamenData({ ...examenData, [name]: value });
      };
    
      const handleExamenSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            "http://localhost:8000/api/examens/",
            examenData,
            { withCredentials: true } // Assurez-vous d'inclure les cookies avec les requêtes
          );
          toast.success("Données soumises avec succès!");
          setExamenData({
            type: "",
            lieu: "",
            heure: "",
            date: "",
            agence_id: "",
          });
          console.log("examen data submitted successfully:", response.data);
        } catch (error) {
          toast.error("Erreur lors de la soumission des données!");
          console.error("Error submitting examen data:", error);
        }
      };

  return (
    <form autoComplete="off" onSubmit={handleExamenSubmit}>
        <h2>Examen Form</h2>
             <TextField 
                label="Type"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="type"
                value={examenData.type}
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
                value={examenData.lieu}
             />
             <TextField 
                label="Heure"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="time"
                name="heure"
                value={examenData.heure}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Date"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="date"
                name="date"
                value={examenData.date}
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
                value={examenData.agence_id}
                fullWidth
                sx={{mb: 3}}
             />
             <Button variant="outlined" color="secondary" type="submit">Ajouter</Button>
             <ToastContainer/>
      </form>
  )
}

export default ExamenForms;