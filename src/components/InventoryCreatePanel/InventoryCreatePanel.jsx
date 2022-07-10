import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  notification,
  Row,
  Select,
  Tooltip,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createInventory } from '../../features/inventories/inventorySlice';
import './InventoryCreatePanel.css';

const { Option } = Select;

const InventoryCreatePanel = () => {
  const { isRequestLoading } = useSelector((state) => state.inventories);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const currentInventoryName = Form.useWatch('name', form);
  const currentInventoryType = Form.useWatch('type', form);
  const currentInventoryQuantity = Form.useWatch('quantity', form);
  const typeOptions = ['Computer', 'Monitor', 'Keyboard', 'Printer'];

  const isSaveBtnDisabled = () => {
    if (
      !currentInventoryName ||
      !currentInventoryType ||
      !currentInventoryQuantity
    ) {
      return true;
    }
  };

  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
    });
  };

  const onSubmit = (inventoryData) => {
    dispatch(createInventory(inventoryData));
  };

  const saveBtnContent = () => {
    if (isSaveBtnDisabled()) {
      return (
        <Tooltip title='Please enter all the fields.'>
          <Button
            htmlType='submit'
            loading={isRequestLoading}
            disabled={isSaveBtnDisabled()}
          >
            Save
          </Button>
        </Tooltip>
      );
    } else {
      return (
        <Button
          htmlType='submit'
          loading={isRequestLoading}
          disabled={isSaveBtnDisabled()}
        >
          Save
        </Button>
      );
    }
  };
  return (
    <div className='inventory-create-panel-container'>
      <Divider orientation='left'>New Inventory</Divider>
      <Form form={form} onFinish={onSubmit}>
        <Row gutter={[32, 32]} wrap={false}>
          <Col span={8}>
            <Form.Item
              name='name'
              label='Inventory Name'
              labelCol={{ span: 24 }}
            >
              <Input placeholder='Please enter a name' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name='type'
              label='Inventory Type'
              labelCol={{ span: 24 }}
            >
              <Select allowClear placeholder='Please select a type'>
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
              <InputNumber
                min={1}
                max={1000}
                placeholder='Please enter a number'
              />
            </Form.Item>
          </Col>
          <Col span={4} className='save-btn-container'>
            {saveBtnContent()}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default InventoryCreatePanel;
