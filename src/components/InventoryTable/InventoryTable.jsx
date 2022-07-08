import { Space, Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },

  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <p>Edit {record.name}</p>
        <p>Delete</p>
      </Space>
    ),
  },
];

const InventoryTable = () => {
  return <Table columns={columns} dataSource={[]} />;
};

export default InventoryTable;
