import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AgenceForms() {
  const [agenceData, setAgenceData] = useState({
    fullname: "",
    email: "",
    password: "",
    adresse: "",
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
        phone: "",
        inmmatriculation: "",
      });
      console.log("agence data submitted successfully:", response.data);
    } catch (error) {
      toast.error("Erreur lors de la soumission des données!");
      console.error("Error submitting agence data:", error);
    }
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleAgenceSubmit}>
        <h2>Login Page</h2>
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

        <Button variant="outlined" color="primary" type="submit">
          Connexion
        </Button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default AgenceForms;
