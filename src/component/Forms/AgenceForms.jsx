import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

function AgenceForms() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [fullnameError, setFullnameError] = useState(false);
  const [adresseError, setAdresseError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [inmmatriculationError, setInmmatriculationError] = useState(false);

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
      console.log("agence data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting agence data:", error);
    }
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleAgenceSubmit}>
        <h2>Agence Form</h2>
        <TextField
          label="Email"
          required
          variant="outlined"
          color="secondary"
          type="email"
          name="email"
          sx={{ mb: 3 }}
          fullWidth
          value={agenceData.email}
          onChange={handleChange}
          error={emailError}
        />
        <TextField
          label="Password"
          required
          variant="outlined"
          color="secondary"
          type="password"
          name="password"
          value={agenceData.password}
          onChange={handleChange}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label="Nom Complet"
          required
          variant="outlined"
          color="secondary"
          type="text"
          name="fullname"
          value={agenceData.fullname}
          onChange={handleChange}
          error={fullnameError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label="Adresse"
          required
          variant="outlined"
          color="secondary"
          type="text"
          name="adresse"
          value={agenceData.adresse}
          onChange={handleChange}
          error={adresseError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label="Telephone"
          required
          variant="outlined"
          color="secondary"
          type="text"
          name="phone"
          value={agenceData.phone}
          onChange={handleChange}
          error={phoneError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label="Immatriculation"
          required
          variant="outlined"
          color="secondary"
          type="text"
          name="inmmatriculation"
          value={agenceData.inmmatriculation}
          onChange={handleChange}
          error={inmmatriculationError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Ajouter
        </Button>
      </form>
    </div>
  );
}

export default AgenceForms;
