import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin, Table } from 'antd';
import { useSelector } from 'react-redux';
import noDataIcon from '../../assets/images/no-data.png';
import './InventoryTable.css';

const spinIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

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
  const { inventories, isGetAllLoading } = useSelector(
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
      loading={{
        indicator: <Spin indicator={spinIcon} />,
        spinning: isGetAllLoading,
      }}
    />
  );
};

export default InventoryTable;
