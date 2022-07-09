import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
import './InventoryCreatePanel.css';

const { Option } = Select;

const InventoryCreatePanel = () => {
  const typeOptions = ['Computer', 'Monitor', 'Keyboard', 'Printer'];

  const onSubmit = (formData) => {};

  return (
    <div className='inventory-create-panel-container'>
      <Divider orientation='left'>New Inventory</Divider>
      <Form onFinish={onSubmit}>
        <Space className='container'>
          <Row gutter={[32, 32]}>
            <Col>
              <Form.Item
                name='name'
                label='Inventory Name'
                labelCol={{ span: 24 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name='type'
                label='Inventory Type'
                labelCol={{ span: 24 }}
              >
                <Select className='inventory-create-panel-select' allowClear>
                  {typeOptions.map((type, index) => (
                    <Option key={index} value={type}>
                      {type}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name='quantity'
                label='Quantity'
                labelCol={{ span: 24 }}
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col className='save-btn-container'>
              <Button htmlType='submit'>Save</Button>
            </Col>
          </Row>
        </Space>
      </Form>
    </div>
  );
};

export default InventoryCreatePanel;
