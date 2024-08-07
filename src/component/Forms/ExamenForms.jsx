import React, {useState} from 'react';
import { TextField,  Button } from "@mui/material";


function ExamenForms() {
  const [type, setType] = useState("")
        const [lieu, setLieu] = useState("")
        const [heure, setHeure] = useState("")
        const [date, setDate] = useState("")
        const [agence_id, setAgenceId] = useState("")

        const [typeError, setTypeError] = useState(false)
        const [lieuError, setLieuError] = useState(false)
        const [heureError, setHeureError] = useState(false)
        const [dateError, setDateError] = useState(false)
        const [agence_idError, setAgenceIdError] = useState(false)
     
        const handleSubmit = (event) => {
            event.preventDefault()
     
            setTypeError(false)
            setLieuError(false)
            setHeureError(false)
            setDateError(false)
            setAgenceIdError(false)
     

            if (type === '') {
                setTypeError(true)
            }
            if (lieu === '') {
              setLieuError(true)
          }
            if (heure === '') {
                setHeureError(true)
            }
            if (date === '') {
                setDateError(true)
            }
            if (agence_id === '') {
                setAgenceIdError(true)
            }
            
            if (type && lieu && heure && date && agence_id) {
                console.log(type, lieu, heure, date, agence_id)
            }
        }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Examen Form</h2>
             <TextField 
                label="Type"
                onChange={e => setType(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={type}
                error={typeError}
                fullWidth
                sx={{mb: 3}}
             />
              <TextField 
                label="Lieu"
                onChange={e => setLieu(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                sx={{mb: 3}}
                fullWidth
                value={lieu}
                error={lieuError}
             />
             <TextField 
                label="Heure"
                onChange={e => setHeure(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="heure"
                value={heure}
                error={heureError}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Date"
                onChange={e => setDate(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="date"
                value={date}
                error={dateError}
                fullWidth
                sx={{mb: 3}}
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

export default ExamenForms;