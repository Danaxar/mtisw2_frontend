import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import axios from "axios";
import { Button } from 'react-bootstrap';

const Formulario = ({ruta}) => {
  const [nombre, setNombre] = useState("");  // Variable de estado, util para formularios pequeños
  const [fecha, setFecha] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(ruta);
    let url = 'http://localhost:8088/' + ruta;
    // Hacer from data
    let form_data = new FormData();
    console.log(fecha);
    console.log(nombre);
    form_data.append("fecha", fecha);
    form_data.append("rut", nombre);
    axios.post(url, form_data)
    .then((response) => {
      console.log("El formulario ha sido enviado!!!");
      console.log(response);
    })
    .catch((err) => {
      alert("Error: " + err.response.data);
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Rut</Form.Label>
      <Form.Control 
          type="text" 
          required
          onChange={(e) => setNombre(e.target.value)}/>
      <Form.Label>Fecha</Form.Label>
      <Form.Control
        type="date"
        required
        onChange={(e) => setFecha(e.target.value)}
      />
      <Button type="submit" style={{marginTop: '2%', width: '155px' }}>Enviar</Button>
    </Form>
  );
}

export default Formulario;