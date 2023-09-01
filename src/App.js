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
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
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

        
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>

      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;