//import {Col, Container, Row} from "react-bootstrap";
// Vista


// Vista que corresponde al home
const Index = () => {
    return (
        <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("homepage.jpg")',
        margin: '55px',
        height: '100vh',
        width: '100vw',
        display: 'flex'}}>
            <div style={{
                color: 'white',
                fontSize: '10vh'
            }}>
                <div>
                    Muebles Santiago
                </div>
            </div>
        </div>
    );
};

export default Index;