import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({ updateStep }) => {
  const [email, setEmail] = useState({ value: "alex@alex.com", valid: null });
  const [password, setPassword] = useState({ value: "abc", valid: null });
  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(event) => {
        event.preventDefault();
        if (email.valid && password.valid) {
          console.log("Siguiente formulario");
          updateStep(1);
        } else {
          console.log("No hacer nada");
        }
        console.log(email, password);
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={
          email.valid === false && "Ingresa un correo electrónico válido"
        }
        value={email.value}
        onChange={(input) => {
          const email = input.target.value;
          const valido = validarEmail(email);
          setEmail({ value: email, valid: valido });
        }}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={
          password.valid === false &&
          "Ingresa un contraseña valida, al menos 8 caracteres y maximo 20"
        }
        value={password.value}
        onChange={(input) => {
          const password = input.target.value;
          const valido = validarPassword(password);
          setPassword({ value: password, valid: valido });
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosUsuario;
