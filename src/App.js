import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrearModelo from '../src/components/pages/GestionModelos/CrearModelo';
import ListarModelo from '../src/components/pages/GestionModelos/ListarModelo';
import MenuModelo from '../src/components/pages/GestionModelos/MenuModelo';

function App() {
  return (
    <div>
      <Router>
        <MenuModelo />
        <Routes>
          <Route path="/gestionModelos/CrearModelo" element={<CrearModelo/>}></Route>
          <Route path="/gestionModelos/ListarModelo" element={<ListarModelo/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

