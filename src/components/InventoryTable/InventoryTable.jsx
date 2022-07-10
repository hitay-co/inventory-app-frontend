import { Space, Table } from 'antd';
import { useSelector } from 'react-redux';
import './InventoryTable.css';

const columns = [
  {
    title: 'Inventory Name',
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
  const { inventories } = useSelector((state) => state.inventories);

  return <Table columns={columns} dataSource={inventories} />;
};

export default InventoryTable;
