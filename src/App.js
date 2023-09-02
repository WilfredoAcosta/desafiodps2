import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Col,
  Row,
  Typography
} from 'antd';
import { pizzas, ingredientes } from './utils/data';

const { Title } = Typography;

const FormDisabledDemo = () => {

  const [conteoIngredientes, setConteoIngredientes] = useState(0);
  const [nombre, setNombre] = useState('');
  const [tipoPizza, setTipoPizza] = useState('');
  const [costoPizza, setCostoPizza] = useState(0);
  const [totalPagar, setTotalPagar] = useState(0);
  const [costoExtras, setCostoExtras] = useState(0);

  const CalcularTotalPagar = () => {

  }

  const AgregadoIngrediente = (event) => {
    if (event.target.checked) {
      setConteoIngredientes(conteoIngredientes + 1)
    } else {
      setConteoIngredientes(conteoIngredientes - 1)
    }
  }

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
        disabled={false}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label=" ">
          <Title>Pizzeria de "La Italiana"</Title>
        </Form.Item>

        <Form.Item label="Nombre" onChange={(e) => {
          setNombre(e.target.value)
        }} required>
          <Input />
        </Form.Item>
        <Form.Item label="Tamaño" required>
          <Select>
            {pizzas.map(e => (
              <Select.Option value={e.nombre}>{e.nombre}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Ingredientes">

          <Checkbox.Group
            style={{
              width: '100%',
            }}
          >
            <Row>
              {ingredientes.map(e => (
                <Col span={8}>
                  <Checkbox value={e} onChange={(event) => AgregadoIngrediente(event)}>{e}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>

        </Form.Item>

        <Form.Item label="Cotizar">
          <Button onClick={() => CalcularTotalPagar()}>Comprar</Button>
        </Form.Item>


        <Form.Item label="Factura">
          <Input placeholder={'Nombre: ' + nombre} disabled />
          <Input placeholder={'Tamaño de pizza: ' + tipoPizza} disabled />
          <Input placeholder={'Total de ingredientes extra: ' + conteoIngredientes} disabled />
          <Input placeholder={'Costo de la pizza: ' + costoPizza} disabled />
          <Input placeholder={'Costo de los toppings extra: ' + costoExtras} disabled />
          <Input placeholder={'Total de la pizza: ' + totalPagar} disabled />
        </Form.Item>

      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;