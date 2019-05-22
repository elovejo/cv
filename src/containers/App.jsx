import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Social from '../components/Social';
import Educacion from '../components/Educacion';
import Experiencia from '../components/Experiencia';
import Certificaciones from '../components/Certificaciones';
import Habilidades from '../components/Habilidades';

const App = () => {
  return (
    <Main>
      <Sidebar>
        <About />                       
      </Sidebar>
      <Info>
        <Educacion />
        <Experiencia />
        <Certificaciones />
        <Habilidades />
      </Info>        
    </Main> 
    );
}

export default App;