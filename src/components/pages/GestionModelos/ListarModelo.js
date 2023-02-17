import React, { useState, useEffect } from "react";
import axios from "axios";
import './ListarModelo.css';

const modelosHardcodeados = [
    { id: 1, nombre: "Modelo 1", codigo: "001" },
    { id: 2, nombre: "Modelo 2", codigo: "002" },
    { id: 3, nombre: "Modelo 3", codigo: "003" },
    { id: 4, nombre: "Modelo 4", codigo: "004" },
  ];
  

const ListarModelo = () => {
  //Esto se debe reemplazar [] l use state para inicializar en vacio
  const [modelos, setModelos] = useState(modelosHardcodeados);

  useEffect(() => {
    const obtenerModelos = async () => {
      const response = await axios.get("https://ejemplo.com/modelos");
      setModelos(response.data);
    };
    obtenerModelos();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre del modelo</th>
          <th>Código del modelo</th>
        </tr>
      </thead>
      <tbody>
        {modelos.map((modelo) => (
          <tr key={modelo.id}>
            <td>{modelo.nombre}</td>
            <td>{modelo.codigo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListarModelo;
