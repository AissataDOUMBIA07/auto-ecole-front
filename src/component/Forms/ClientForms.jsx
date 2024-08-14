import React, {useState, useEffect } from 'react'
import { TextField,  Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function ClientForms() {
  const [clientData, setClientData] = useState({
    fullname: "",
    conatct: "",
    adresse: "",
    age: "",
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
    setClientData({ ...clientData, [name]: value });
  };

  const handleClientSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/clients/",
        clientData,
        { withCredentials: true } // Assurez-vous d'inclure les cookies avec les requêtes
      );
      toast.success("Données soumises avec succès!");
      setClientData({
        fullname: "",
        conatct: "",
        adresse: "",
        age: "",
        agence_id: "",
      });
      console.log("client data submitted successfully:", response.data);
    } catch (error) {
      toast.error("Erreur lors de la soumission des données!");
      console.error("Error submitting client data:", error);
    }
  };
        

  return (
    <div>
      <form autoComplete="off" onSubmit={handleClientSubmit}>
        <h2>Client Form</h2>
             <TextField 
                label="Nom Complet"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="fullname"
                value={clientData.fullname}
                fullWidth
                sx={{mb: 3}}
             />
              <TextField 
                label="Contact"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="conatct"
                sx={{mb: 3}}
                fullWidth
                value={clientData.conatct}
             />
             <TextField 
                label="Adresse"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="adresse"
                value={clientData.adresse}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Age"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="age"
                value={clientData.age}
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
                value={clientData.agence_id}
                fullWidth
                sx={{mb: 3}}
             />
             <Button variant="outlined" color="secondary" type="submit">Ajouter</Button>
             <ToastContainer />
      </form>
    </div>
  )
}

export default ClientForms