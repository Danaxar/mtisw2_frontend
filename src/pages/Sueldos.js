import {Container, Row, Col, Table, Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Sueldos = () => {
    const [sueldos, setSueldos] = useState([]);
    
    const getSueldos = async () => {
        try{
            
            let url = 'http://localhost:8088/reporte/all';
            let response = await axios.get(url);
            if(response.status === 200){
                setSueldos(response.data);
            }
        }catch(error){
            console.log(error.message)
        }
    };

    const calcularSueldosService = async () => {
        try{
            let url = 'http://localhost:8088/sueldo/calcular'
            let response = await axios.get(url).then()
            if(response.status === 200){
                console.log("Sueldos calculados exitosamente.");
                alert("Sueldos calculados exitosamente\nPresoine el botón 'Cargar datos'");
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getSueldos();
        console.log(sueldos)
    }, [])


    return (
        <Container style={{marginTop: '90px'}}>
            <Row >
                <Col style={{textAlign: 'center', fontSize: '7vh'}}>Planilla de sueldos</Col>
            </Row>
            <Row>
                <Col style={{margin: '2%', textAlign: 'center'}}>
                    <Button variant="success" onClick={calcularSueldosService} style={{fontSize: '1.25vw'}}>Calcular Sueldos</Button>
                    <Button href="/planilla" style={{marginLeft: '10%', fontSize: '1.25vw'}}>Cargar datos</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped className='mt-4'>
                        <thead>
                            <tr>
                                <th>Rut</th>
                                <th>Nombre</th>
                                <th>Años de servicio</th>
                                <th>Sueldo fijo mensual</th>
                                <th>Bono años de servicio</th>
                                <th>Pago horas extras</th>
                                <th>Monto Descuentos</th>
                                <th>Sueldo Bruto</th>
                                <th>Cotizacion Previsional</th>
                                <th>Cotizacion Salud</th>
                                <th>Sueldo Final</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sueldos.map((sueldo) => (
                                <tr key={sueldo.id}>
                                    <td>{sueldo.rut}</td>
                                    <td>{sueldo.nombreEmpleado}</td>
                                    <td>{sueldo.yearsOfService}</td>
                                    <td>{sueldo.sueldoFijoMensual}</td>
                                    <td>{sueldo.bonoYearsOfService}</td>
                                    <td>{sueldo.pagoHorasExtras}</td>
                                    <td>{sueldo.montoDescuentos}</td>
                                    <td>{sueldo.sueldoBruto}</td>
                                    <td>{sueldo.cotizacionPrevisional}</td>
                                    <td>{sueldo.cotizacionSalud}</td>
                                    <td>{sueldo.sueldoFinal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Sueldos;