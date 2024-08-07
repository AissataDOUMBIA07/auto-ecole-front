import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function PermisForms() {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [agence_id, setAgenceId] = useState("");
  const [client_id, setClientId] = useState("");

  const [typeError, setTypeError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [agence_idError, setAgenceIdError] = useState(false);
  const [client_idError, setClientIdError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTypeError(false);
    setDateError(false);
    setAgenceIdError(false);
    setClientIdError(false);

    if (type === "") {
      setTypeError(true);
    }
    if (date === "") {
      setDateError(true);
    }
    if (agence_id === "") {
      setAgenceIdError(true);
    }
    if (client_id === "") {
      setClientIdError(true);
    }
    if (type && date && agence_id && client_id) {
      console.log(type, date, agence_id, client_id);
    }
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h2>Permis Form</h2>
      <TextField
        label="Type"
        onChange={(e) => setType(e.target.value)}
        required
        variant="outlined"
        color="secondary"
        type="text"
        value={type}
        error={typeError}
        fullWidth
        sx={{ mb: 3 }}
      />
      <TextField
        label="Date"
        onChange={(e) => setDate(e.target.value)}
        required
        variant="outlined"
        color="secondary"
        type="date"
        sx={{ mb: 3 }}
        fullWidth
        value={date}
        error={dateError}
      />
      <TextField
        label="Agence"
        onChange={(e) => setAgenceId(e.target.value)}
        required
        variant="outlined"
        color="secondary"
        type="text"
        value={agence_id}
        error={agence_idError}
        fullWidth
        sx={{ mb: 3 }}
      />
      <TextField
        label="Client"
        onChange={(e) => setClientId(e.target.value)}
        required
        variant="outlined"
        color="secondary"
        type="text"
        value={client_id}
        error={client_idError}
        fullWidth
        sx={{ mb: 3 }}
      />
      <Button variant="outlined" color="secondary" type="submit">
        Ajouter
      </Button>
    </form>
  );
}

export default PermisForms;
