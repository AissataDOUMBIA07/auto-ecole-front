import React, {useState, useEffect} from 'react';
import { TextField,  Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function SalleForms() {
  const [salleData, setSalleData] = useState({
    libelle: "",
    nombreplace: "",
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
    setSalleData({ ...salleData, [name]: value });
  };

  const handleSalleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/salles/",
        salleData,
        { withCredentials: true } // Assurez-vous d'inclure les cookies avec les requêtes
      );
      toast.success("Données soumises avec succès!");
      setSalleData({
        libelle: "",
        nombreplace: "",
        agence_id: "",
      });
      console.log("salle data submitted successfully:", response.data);
    } catch (error) {
      toast.error("Erreur lors de la soumission des données!");
      console.error("Error submitting salle data:", error);
    }
  };
  return (
    <form autoComplete="off" onSubmit={handleSalleSubmit}>
    <h2>Salle Form</h2>
         <TextField 
            label="Libelle"
            onChange={handleChange}
            required
            variant="outlined"
            color="secondary"
            type="text"
            name="libelle"
            value={salleData.libelle}
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
            value={salleData.nombreplace}
         />
         <TextField 
            label="Agence"
            onChange={handleChange}
            required
            variant="outlined"
            color="secondary"
            type="text"
            name="agence_id"
            value={salleData.agence_id}
            fullWidth
            sx={{mb: 3}}
         />
         <Button variant="outlined" color="secondary" type="submit">Ajouter</Button>
         <ToastContainer/> 
    </form> 
  )
}

export default SalleForms