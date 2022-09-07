import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CrearOP from './components/pages/CrearOP/CrearOP';
import Login from './components/pages/login/Login';
import SiderApp from './components/pages/Sider/SiderApp';
import 'antd/dist/antd.css'; 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<SiderApp/>}></Route>
          <Route path="/crearop" element={<CrearOP/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
