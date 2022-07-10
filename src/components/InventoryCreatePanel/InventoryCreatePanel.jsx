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
import { useDispatch } from 'react-redux';
import {
  createInventory,
  getInventories,
} from '../../features/inventories/inventorySlice';
import './InventoryCreatePanel.css';

const { Option } = Select;

const InventoryCreatePanel = () => {
  const dispatch = useDispatch();

  const typeOptions = ['Computer', 'Monitor', 'Keyboard', 'Printer'];

  const onSubmit = (inventoryData) => {
    dispatch(createInventory(inventoryData));
  };

  return (
    <div className='inventory-create-panel-container'>
      <Divider orientation='left'>New Inventory</Divider>
      <Form onFinish={onSubmit}>
        <Row gutter={[32, 32]} wrap={false}>
          <Col span={8}>
            <Form.Item
              name='name'
              label='Inventory Name'
              labelCol={{ span: 24 }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name='type'
              label='Inventory Type'
              labelCol={{ span: 24 }}
            >
              <Select allowClear>
                {typeOptions.map((type, index) => (
                  <Option key={index} value={type}>
                    {type}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name='quantity' label='Quantity' labelCol={{ span: 24 }}>
              <InputNumber min={1} max={1000} />
            </Form.Item>
          </Col>
          <Col span={4} className='save-btn-container'>
            <Button htmlType='submit'>Save</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default InventoryCreatePanel;
