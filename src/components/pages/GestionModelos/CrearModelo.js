import React, { useState } from "react";
import axios from "axios";

function CrearModelo() {
  const [modelo, setModelo] = useState("");
  const [codigo, setCodigo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("", {
        modelo: modelo,
        codigo: codigo,
      });
      console.log(response.data);
      // hacer algo con la respuesta de la API
    } catch (error) {
      console.error(error);
      // manejar el error de la petición
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="modelo">Nombre del modelo:</label>
        <input
          type="text"
          id="modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="codigo">Código:</label>
        <input
          type="text"
          id="codigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
}

export default CrearModelo;