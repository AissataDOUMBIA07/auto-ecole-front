import React, {useState} from 'react';
import { TextField,  Button } from "@mui/material";


function VoitureForms() {
  const [libelle, setLibelle] = useState("")
        const [nombreplace, setNombrePlace] = useState("")
        const [matricule, setMatricule] = useState("")
        const [marque, setMarque] = useState("")
        const [agence_id, setAgenceId] = useState("")
        const [couleur, setCouleur] = useState("")
        const [personnel_id, setPersonnelId] = useState("")

        const [libelleError, setLibelleError] = useState(false)
        const [nombreplaceError, setNombrePlaceError] = useState(false)
        const [matriculeError, setMatriculeError] = useState(false)
        const [marqueError, setMarqueError] = useState(false)
        const [agence_idError, setAgenceIdError] = useState(false)
        const [couleurError, setCouleurError] = useState(false)
        const [personnel_idError, setPersonnelIdError] = useState(false)
     
        const handleSubmit = (event) => {
            event.preventDefault()
     
            setLibelleError(false)
            setNombrePlaceError(false)
            setMatriculeError(false)
            setMarqueError(false)
            setAgenceIdError(false)
            setCouleurError(false)
            setPersonnelIdError(false)
     

            if (libelle === '') {
                setLibelleError(true)
            }
            if (nombreplace === '') {
              setNombrePlaceError(true)
          }
            if (matricule === '') {
                setMatriculeError(true)
            }
            if (marque === '') {
                setMarqueError(true)
            }
            if (agence_id === '') {
                setAgenceIdError(true)
            }
            if (couleur === '') {
                setCouleurError(true)
            }
            if (personnel_id=== '') {
                setPersonnelIdError(true)
            }
            
            if (libelle && nombreplace && matricule && marque && agence_id && couleur && personnel_id) {
                console.log(libelle, nombreplace, matricule, marque, agence_id, couleur, personnel_id)
            }
        }
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Voiture Form</h2>
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
                label="Matricule"
                onChange={e => setMatricule(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={matricule}
                error={matriculeError}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Marque"
                onChange={e => setMarque(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={marque}
                error={marqueError}
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
                onChange={e => setCouleur(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={couleur}
                error={couleurError}
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

export default VoitureForms