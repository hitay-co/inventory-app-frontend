import { Space, Table } from 'antd';
import { useSelector } from 'react-redux';
import './InventoryTable.css';
import noDataIcon from '../../assets/images/no-data.png';

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
  const { inventories, isRequestLoading } = useSelector(
    (state) => state.inventories
  );

  return (
    <Table
      locale={{
        emptyText: (
          <img
            src={noDataIcon}
            alt='no-data-icon'
            className='table-no-data-icon'
          />
        ),
      }}
      columns={columns}
      dataSource={inventories}
      loading={isRequestLoading}
    />
  );
};

export default InventoryTable;
