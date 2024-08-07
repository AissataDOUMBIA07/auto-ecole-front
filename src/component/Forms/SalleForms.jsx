import React, {useState} from 'react';
import { TextField,  Button } from "@mui/material";


function SalleForms() {
  const [libelle, setLibelle] = useState("")
  const [nombreplace, setNombrePlace] = useState("")
  const [agence_id, setAgenceId] = useState("")

  const [libelleError, setLibelleError] = useState(false)
  const [nombreplaceError, setNombrePlaceError] = useState(false)
  const [agence_idError, setAgenceIdError] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()

      setLibelleError(false)
      setNombrePlaceError(false)
      setAgenceIdError(false)


      if (libelle === '') {
          setLibelleError(true)
      }
      if (nombreplace === '') {
        setNombrePlaceError(true)
    }
      if (agence_id === '') {
          setAgenceIdError(true)
      }
     
  }
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
    <h2>Salle Form</h2>
         <TextField 
            label="Libelle"
            onChange={e => setLibelle(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            value={libelle}
            error={libelleError}
            fullWidth
            sx={{mb: 3}}
         />
          <TextField 
            label="Nombreplace"
            onChange={e => setNombrePlace(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{mb: 3}}
            fullWidth
            value={nombreplace}
            error={nombreplaceError}
         />
         <TextField 
            label="Agence"
            onChange={e => setAgenceId(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            value={agence_id}
            error={agence_idError}
            fullWidth
            sx={{mb: 3}}
         />
         <Button variant="outlined" color="secondary" type="submit">Ajouter</Button>
     
    </form> 
  )
}

export default SalleForms