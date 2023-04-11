import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({});

  useEffect(() => {
    console.log("UseEffect");
  });

  useEffect(() => {
    console.log("Se ha actualizado el step");
  }, [step]);

  // step = 0 --> <DatosUsuario />
  // step = 1 --> <DatosPersonales />
  // step = 2 --> <DatosEntrega />
  // step = 3 --> <Complete />

  const updateStep = (step) => {
    console.log("actualizar paso", step);
    setStep(step);
  };

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />,
  };
  console.log("FORM COMPONENT");

  const onSubmit = (e) => {
    e.preventDefault();
    let newStep = step + 1;
    setStep(newStep);
    console.log("newStep", newStep);
    console.log(step);
  };

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value;
    const valid = validator(value);
    console.log(value);
    console.log(valid);
    console.log("currentStep", currentStep);
    console.log("position", position);
    console.log("Validator", validator);
  };

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTtext: "Ingresa un correo electrónico válido",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTtext:
            "Ingresa un contraseña valida, al menos 8 caracteres y maximo 20",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
    1: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTtext: "Ingresa un correo electrónico válido",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperTtext:
            "Ingresa un contraseña valida, al menos 8 caracteres y maximo 20",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/* {steps[step]} */}
        <Step data={stepsFlow[step]} step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
