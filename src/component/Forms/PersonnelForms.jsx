import React, {useState, useEffect} from 'react';
import { TextField,  Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function PersonnelForms() {
    const [personnelData, setPersonnelData] = useState({
        fullname: "",
        adresse: "",
        phone: "",
        status: "",
        email: "",
        password: "",
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
        setPersonnelData({ ...personnelData, [name]: value });
      };
    
      const handlePersonnelSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            "http://localhost:8000/api/personnels/",
            personnelData,
            { withCredentials: true } // Assurez-vous d'inclure les cookies avec les requêtes
          );
          toast.success("Données soumises avec succès!");
          setPersonnelData({
            fullname: "",
            adresse: "",
            phone: "",
            status: "",
            email: "",
            password: "",
            agence_id: "",
          });
          console.log("personnels data submitted successfully:", response.data);
        } catch (error) {
          toast.error("Erreur lors de la soumission des données!");
          console.error("Error submitting personnel data:", error);
        }
      };
  return (
    <form autoComplete="off" onSubmit={handlePersonnelSubmit}>
        <h2>Personnel Form</h2>
             <TextField 
                label="Email"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="email"
                name="email"
                value={personnelData.email}
                fullWidth
                sx={{mb: 3}}
             />
              <TextField 
                label="Password"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="password"
                name="password"
                sx={{mb: 3}}
                fullWidth
                value={personnelData.password}
             />
             <TextField 
                label="Fullname"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="fullname"
                value={personnelData.fullname}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Adresse"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="adresse"
                value={personnelData.adresse}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Phone"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="phone"
                value={personnelData.phone}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Status"
                onChange={handleChange}
                required
                variant="outlined"
                color="secondary"
                type="text"
                name="status"
                value={personnelData.status}
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
                value={personnelData.agence_id}
                fullWidth
                sx={{mb: 3}}
             />
             <Button variant="outlined" color="secondary" type="submit">Ajouter</Button>
             <ToastContainer/>
    </form>
  )
}

export default PersonnelForms