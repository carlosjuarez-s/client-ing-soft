import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import CrearModelo from './components/pages/GestionModelos/CrearModelo';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/gestionModelos" element={<CrearModelo/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
