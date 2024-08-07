import React, {useState} from 'react'
import { TextField,  Button } from "@mui/material";



function ClientForms() {
  const [fullname, setFullname] = useState("")
        const [conatct, setConatct] = useState("")
        const [adresse, setAdresse] = useState("")
        const [age, setAge] = useState("")
        const [agence_id, setAgenceId] = useState("")

        const [fullnameError, setFullnameError] = useState(false)
        const [conatctError, setConatctError] = useState(false)
        const [adresseError, setAdresseError] = useState(false)
        const [ageError, setAgeError] = useState(false)
        const [agence_idError, setAgenceIdError] = useState(false)
     
        const handleSubmit = (event) => {
            event.preventDefault()
     
            setFullnameError(false)
            setConatctError(false)
            setAdresseError(false)
            setAgeError(false)
            setAgenceIdError(false)
     

            if (fullname === '') {
                setFullnameError(true)
            }
            if (conatct === '') {
              setConatctError(true)
          }
            if (adresse === '') {
                setAdresseError(true)
            }
            if (age === '') {
                setAgeError(true)
            }
            if (agence_id === '') {
                setAgenceIdError(true)
            }
            
            if (fullname && conatct && adresse && age && agence_id) {
                console.log(fullname, conatct, adresse, age, agence_id)
            }
        }
        

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Client Form</h2>
             <TextField 
                label="Nom Complet"
                onChange={e => setFullname(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={fullname}
                error={fullnameError}
                fullWidth
                sx={{mb: 3}}
             />
              <TextField 
                label="Contact"
                onChange={e => setConatct(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                sx={{mb: 3}}
                fullWidth
                value={conatct}
                error={conatctError}
             />
             <TextField 
                label="Adresse"
                onChange={e => setAdresse(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={adresse}
                error={adresseError}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Age"
                onChange={e => setAge(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={age}
                error={ageError}
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
    </div>
  )
}

export default ClientForms