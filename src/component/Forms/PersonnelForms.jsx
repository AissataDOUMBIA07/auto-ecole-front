import React, {useState} from 'react';
import { TextField,  Button } from "@mui/material";


function PersonnelForms() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullname, setFullname] = useState("")
  const [adresse, setAdresse] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState("")
  const [agence_id, setAgenceId] = useState("")

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [fullnameError, setFullnameError] = useState(false)
  const [adresseError, setAdresseError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [statusError, setStatusError] = useState(false)
  const [agence_idError, setAgenceIdError] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()

      setEmailError(false)
      setPasswordError(false)
      setFullnameError(false)
      setAdresseError(false)
      setPhoneError(false)
      setStatusError(false)
      setAgenceIdError(false)


      if (email === '') {
          setEmailError(true)
      }
      if (password === '') {
        setPasswordError(true)
    }
      if (fullname === '') {
          setFullnameError(true)
      }
      if (adresse === '') {
          setAdresseError(true)
      }
      if (phone === '') {
          setPhoneError(true)
      }
      if (status === '') {
          setStatusError(true)
      }
      if (agence_id=== '') {
          setAgenceIdError(true)
      }
      
      if (email && password && fullname && adresse && phone && status && agence_id) {
          console.log(email, password, fullname, adresse, phone, status, agence_id)
      }
  }
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Personnel Form</h2>
             <TextField 
                label="Email"
                onChange={e => setEmail(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="email"
                value={email}
                error={emailError}
                fullWidth
                sx={{mb: 3}}
             />
              <TextField 
                label="Password"
                onChange={e => setPassword(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="password"
                sx={{mb: 3}}
                fullWidth
                value={password}
                error={passwordError}
             />
             <TextField 
                label="Fullname"
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
                label="Phone"
                onChange={e => setPhone(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={phone}
                error={phoneError}
                fullWidth
                sx={{mb: 3}}
             />
             <TextField 
                label="Status"
                onChange={e => setStatus(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={status}
                error={statusError}
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

export default PersonnelForms