import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Layout from './Layout';
import Index from './pages';
import Sueldos from './pages/Sueldos';
import Upload from './pages/Upload';

function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path='/' element={<Index/>} exact/>
          <Route path='/upload' element={<Upload/>} exact/>
          <Route path='/planilla' element={<Sueldos/>} exact/>
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;