import {Container, Form, Row, Col, Button} from "react-bootstrap";
import axios from "axios";
import {useState} from "react";
import Formulario from "../components/Formulario";

const Upload = () => {
  // Archivo DATA.TXT
  const [selectedFile, setSelectedFile] = useState(null)
  const handleUpload = (e) => {
    e.preventDefault();
    console.log(selectedFile);
    let url = 'http://localhost:8088/data/load';
    let form_data = new FormData();
    form_data.append("archivos", selectedFile);
    axios.post(url, form_data)
    .then((response) => {
      alert(response.data);
      alert("Archivo subido con éxito");
    })
    .catch((err) => {
      alert(err.response.data);
    });
  }

  return (
    <Container style={{display: 'flex', margin: '7%'}}>
      <Row style={{}}>
        <Col >
          <h1>Justificativos</h1>
          <Formulario ruta="justificativo/up"></Formulario>
        </Col>
        <Col >
          <h1>Autorizaciones</h1>
          <Formulario ruta="autorizacion/up"></Formulario>
        </Col>
        <Col style={{margin: '16%'}}>
          <h1>ARCHIVO DATA.TXT</h1>
          <Form onSubmit={handleUpload}>
            <Form.Label>Subir archivo</Form.Label>
            <Form.Control 
                type="file" 
                size="lg"
                required
                onChange={(e) => setSelectedFile(e.target.files[0])}/>
            <Button type="submit" style={{marginTop: '2%', width: '155px' }}>Subir</Button>
          </Form>
        </Col>
      </Row>
      <Row>
      
      </Row>
    </Container>
  );
}

export default Upload;