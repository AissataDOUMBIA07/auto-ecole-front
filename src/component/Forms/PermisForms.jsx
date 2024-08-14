import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function PermisForms() {
  const [permisData, setPermisData] = useState({
    type: "",
    date: "",
    agence_id: "",
    client_id: "",
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
    setPermisData({ ...permisData, [name]: value });
  };

  const handlePermisSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/permis/",
        permisData,
        { withCredentials: true } // Assurez-vous d'inclure les cookies avec les requêtes
      );
      toast.success("Données soumises avec succès!");
      setPermisData({
        type: "",
        date: "",
        agence_id: "",
        client_id: "",
      });
      console.log("permis data submitted successfully:", response.data);
    } catch (error) {
      toast.error("Erreur lors de la soumission des données!");
      console.error("Error submitting permis data:", error);
    }
  };
  return (
    <form autoComplete="off" onSubmit={handlePermisSubmit}>
      <h2>Permis Form</h2>
      <TextField
        label="Type"
        onChange={handleChange}
        required
        variant="outlined"
        color="secondary"
        type="text"
        name="type"
        value={permisData.type}
        fullWidth
        sx={{ mb: 3 }}
      />
      <TextField
        label="Date"
        onChange={handleChange}
        required
        variant="outlined"
        color="secondary"
        type="date"
        name="date"
        sx={{ mb: 3 }}
        fullWidth
        value={permisData.date}
      />
      <TextField
        label="Agence"
        onChange={handleChange}
        required
        variant="outlined"
        color="secondary"
        type="text"
        name="agence_id"
        value={permisData.agence_id}
        fullWidth
        sx={{ mb: 3 }}
      />
      <TextField
        label="Client"
        onChange={handleChange}
        required
        variant="outlined"
        color="secondary"
        type="text"
        name="client_id"
        value={permisData.client_id}
        fullWidth
        sx={{ mb: 3 }}
      />
      <Button variant="outlined" color="secondary" type="submit">
        Ajouter
      </Button>
      <ToastContainer/>
    </form>
  );
}

export default PermisForms;
