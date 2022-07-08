import {
  Button,
  Col,
  Divider,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Typography,
} from 'antd';
import './Home.css';

const { Text } = Typography;
const { Option } = Select;

const Home = () => {
  const typeOptions = ['Computer', 'Monitor', 'Keyboard', 'Printer'];

  return (
    <div className='home-container'>
      <Divider orientation='left'>New Inventory</Divider>
      <Space className='container'>
        <Row gutter={[16, 16]} align='bottom' wrap={false}>
          <Col>
            <Row gutter={[24, 24]}>
              <Col>
                <Space direction='vertical'>
                  <Text>Inventory Name</Text>
                  <Input />
                </Space>
              </Col>
              <Col>
                <Space direction='vertical'>
                  <Text>Inventory Type</Text>
                  <Select className='home-container-select' allowClear>
                    {typeOptions.map((type, index) => (
                      <Option key={index} value={type}>
                        {type}
                      </Option>
                    ))}
                  </Select>
                </Space>
              </Col>
              <Col>
                <Space direction='vertical'>
                  <Text>Quantity</Text>
                  <InputNumber />
                </Space>
              </Col>
            </Row>
          </Col>

          <Col>
            <Button>Save</Button>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Home;
