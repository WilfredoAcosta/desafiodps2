import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Col,
  Row,
  Typography
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Title } = Typography;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
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
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
       <Form.Item label=" ">
       <Title>Pizzeria de Pelu</Title>
        </Form.Item>

        <Form.Item label="Nombre">
          <Input />
        </Form.Item>
        <Form.Item label="Tamaño">
          <Select>
            <Select.Option value="demo">Pizza personal</Select.Option>
            <Select.Option value="demo">Pizza mediana</Select.Option>
            <Select.Option value="demo">Pizza grande</Select.Option>
          </Select>
        </Form.Item>

          <Form.Item label="Ingredientes">
          
                    <Checkbox.Group
                            style={{
                              width: '100%',
                            }}
                    >
              <Row>
                <Col span={8}>
                  <Checkbox value="Cebolla">Cebolla</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Tocino">Tocino</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Jamon">+ Jamon</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Pina">Piña</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Carne">Carne</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Aceitunas">Aceitunas</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>

        </Form.Item>

        <Form.Item label="Cotizar">
          <Button>Submit</Button>
        </Form.Item>

      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;