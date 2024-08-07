import React, {useState} from 'react';
import { TextField,  Button } from "@mui/material";


function FormationForms() {
    const [libelle, setLibelle] = useState("")
        const [lieu, setLieu] = useState("")
        const [datedebut, setDateDebut] = useState("")
        const [datefin, setDateFin] = useState("")
        const [agence_id, setAgenceId] = useState("")
        const [salle_id, setSalleId] = useState("")
        const [personnel_id, setPersonnelId] = useState("")

        const [libelleError, setLibelleError] = useState(false)
        const [lieuError, setLieuError] = useState(false)
        const [datedebutError, setDateDebutError] = useState(false)
        const [datefinError, setDateFinError] = useState(false)
        const [agence_idError, setAgenceIdError] = useState(false)
        const [salle_idError, setSalleIdError] = useState(false)
        const [personnel_idError, setPersonnelIdError] = useState(false)
     
        const handleSubmit = (event) => {
            event.preventDefault()
     
            setLibelleError(false)
            setLieuError(false)
            setDateDebutError(false)
            setDateFinError(false)
            setAgenceIdError(false)
            setSalleIdError(false)
            setPersonnelIdError(false)
     

            if (libelle === '') {
                setLibelleError(true)
            }
            if (lieu === '') {
              setLieuError(true)
          }
            if (datedebut === '') {
                setDateDebutError(true)
            }
            if (datefin === '') {
                setDateFinError(true)
            }
            if (agence_id === '') {
                setAgenceIdError(true)
            }
            if (salle_id === '') {
                setSalleIdError(true)
            }
            if (personnel_id=== '') {
                setPersonnelIdError(true)
            }
            
            if (libelle && lieu && datedebut && datefin && agence_id && salle_id && personnel_id) {
                console.log(libelle, lieu, datedebut, datefin, agence_id, salle_id, personnel_id)
            }
        }
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Formation Form</h2>
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
                label="DateDebut"
                onChange={e => setDateDebut(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="date"
                value={datedebut}
                error={datedebutError}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="DateFin"
                onChange={e => setDateFin(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="date"
                value={datefin}
                error={datefinError}
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
             <TextField 
                label="Salle"
                onChange={e => setSalleId(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={salle_id}
                error={salle_idError}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Personnel"
                onChange={e => setPersonnelId(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={personnel_id}
                error={personnel_idError}
                fullWidth
                sx={{mb: 3}}
             />
             <Button variant="outlined" color="secondary" type="submit">Ajouter</Button>
         
    </form>
  )
}

export default FormationForms