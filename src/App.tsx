import './App.css';
import Container from './components/Container';
import Titulo from './components/Titulos';
import Cabecalho from './components/cabecalho';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
      </Container>
    </>
  );
}

export default App;
