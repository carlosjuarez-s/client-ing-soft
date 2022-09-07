import * as React from "react";
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
  } from 'antd';
import { useState } from "react";
import axios from "axios";
const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
 
const handleChangeInput = event => {
    console.log(event.target.value)
}


const CrearOP = () => {
    const [op, setOp] = useState([]);

    const getOp = async() => {
        await axios.get()
        .then(response => {
            console.log(response.data)
            console.log(response)
            setOp(response.data)
        })
    }

    const state = {
        lineaTest:['1', '2', '3'],
        modelosTest:['a', 'b', 'c'],
        coloresTest:['rojo', 'azul', 'verde']
    }
    
    const modelos = []
    state.modelosTest.map(element => {
        modelos.push(<Select.Option value={element}>{element}</Select.Option>)
    })

    const lineas = []
    state.lineaTest.map(element => {
        lineas.push(<Select.Option value={element}>{element}</Select.Option>)
    })

    const colores = []
    state.coloresTest.map(element => {
        colores.push(<Select.Option value={element}>{element}</Select.Option>)
    })


    return (
        <>
        <Form
            labelCol={{
            span: 4,
            }}
            wrapperCol={{
            span: 14,
            }}
            layout="horizontal"
      >
        <Form.Item label="Número de Orden">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Número de Linea">
          <Select>
            {lineas}
          </Select>
        </Form.Item>
        <Form.Item label="Modelo">
          <Select>
            {modelos}
          </Select>
        </Form.Item>
        <Form.Item label="Colores">
          <Select>
            {colores}
          </Select>
        </Form.Item>
        <Form.Item label="Opciones">
          <Button type='primary'>Aceptar</Button>
          <Button type='dashed'>Pausar</Button>
          <Button>Reanudar</Button>
          <Button>Finalizar</Button>
          <Button type="primary" danger>Cancelar</Button>
        </Form.Item>
      </Form>
    </>
    )
}

export default CrearOP;