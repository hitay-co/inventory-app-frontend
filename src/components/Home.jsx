import {
  Button,
  Col,
  Form,
  Divider,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
import './Home.css';

const { Option } = Select;

const Home = () => {
  const typeOptions = ['Computer', 'Monitor', 'Keyboard', 'Printer'];

  const onFinish = (formData) => {};
  return (
    <div className='home-container'>
      <Divider orientation='left'>New Inventory</Divider>
      <Form onFinish={onFinish}>
        <Space className='container'>
          <Row gutter={[16, 16]}>
            <Col>
              <Row gutter={[24, 24]} align='bottom' wrap={false}>
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
                    <Select className='home-container-select' allowClear>
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
              </Row>
            </Col>

            <Col>
              <Button htmlType='submit'>Save</Button>
            </Col>
          </Row>
        </Space>
      </Form>
    </div>
  );
};

export default Home;
