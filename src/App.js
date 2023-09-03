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
  const [factor, setFactor] = useState(0);
  const [form] = Form.useForm();

  const CalcularTotalPagar = () => {
    setTotalPagar(costoPizza + costoExtras)
  }

  const ActualizarData = () => {
    pizzas.forEach(pizza => {
      if (tipoPizza === pizza.nombre) {
        setCostoPizza(pizza.precio)
        if (conteoIngredientes !== 0) {
          if (conteoIngredientes > 4) {
            setFactor(pizza.adicional[3])
            setCostoExtras(factor * conteoIngredientes)
          } else {
            setFactor(pizza.adicional[conteoIngredientes - 1])
            setCostoExtras((pizza.adicional[conteoIngredientes - 1] * conteoIngredientes))
          }
        } else {
          setFactor(0)
          setCostoExtras(0)
        }
      }
    });
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
      <center>
        <Title>Pizzeria de "La Italiana"</Title>
      </center>
      <Form
        form={form}
        name="control-ref"
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

        <Form.Item label="Nombre" name="Nombre" onChange={(e) => {
          setNombre(e.target.value)
          ActualizarData()
        }} rules={[
          {
            required: true,
          },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Tamaño" name="Tamaño" rules={[
          {
            required: true,
          },
        ]}>
          <Select onChange={(e) => {
            setTipoPizza(e)
            ActualizarData()
          }}>
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
                  <Checkbox value={e} onChange={(event) => {
                    AgregadoIngrediente(event)
                    ActualizarData()
                  }}>{e}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>

        </Form.Item>

        <Form.Item label="Cotizar" htmlType="submit">
          <Button onClick={() => CalcularTotalPagar()}>Comprar</Button>
        </Form.Item>
      </Form>
      <center>
        <Title>Detalle Factura:</Title>
      </center>

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
        }}>
        <Form.Item>
          <Form.Item label="Nombre">
            <Input placeholder={nombre} disabled />
          </Form.Item>

          <Form.Item label="Tamaño de pizza">
            <Input placeholder={tipoPizza} disabled />
          </Form.Item>

          <Form.Item label="Total de ingredientes extra">
            <Input placeholder={conteoIngredientes} disabled />
          </Form.Item>

          <Form.Item label="Costo de la pizza">
            <Input placeholder={'$' + costoPizza} disabled />
          </Form.Item>

          <Form.Item label="Valor por cada ingrediente adicional">
            <Input placeholder={'$' + factor} disabled />
          </Form.Item>

          <Form.Item label="Costo de los toppings extra">
            <Input placeholder={'$' + costoExtras} disabled />
          </Form.Item>

          <Form.Item label="Total de la pizza">
            <Input placeholder={'$' + totalPagar} disabled />
          </Form.Item>

        </Form.Item>
      </Form>


    </>
  );
};
export default () => <FormDisabledDemo />;