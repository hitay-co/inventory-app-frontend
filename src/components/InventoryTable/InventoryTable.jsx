import { DeleteOutlined, LoadingOutlined } from '@ant-design/icons';
import { Link, notification, Popconfirm, Spin, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noDataIcon from '../../assets/images/no-data.png';
import {
  deleteInventory,
  getInventories,
  reset,
} from '../../features/inventories/inventorySlice';
import './InventoryTable.css';

const spinIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const InventoryTable = () => {
  const dispatch = useDispatch();

  const { inventories, isGetAllLoading, isDeleteSuccess, isDeleteLoading } =
    useSelector((state) => state.inventories);

  const handleDelete = (id) => {
    dispatch(deleteInventory(id));
  };

  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight',
    });
  };

  useEffect(() => {
    if (isDeleteSuccess) {
      dispatch(getInventories());
      openNotificationWithIcon('success', 'Inventory successfully deleted!');
      dispatch(reset());
    }
  }, [dispatch, isDeleteSuccess]);

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
      render: (_, record) =>
        inventories?.length >= 1 ? (
          <Popconfirm
            title='Sure to delete?'
            onConfirm={() => handleDelete(record._id)}
          >
            <a href='/#'>
              <DeleteOutlined />
              <span style={{ paddingLeft: '8px' }}>Delete</span>
            </a>
          </Popconfirm>
        ) : null,
    },
  ];

  if (isDeleteLoading) return <Spin indicator={spinIcon} size='large' />;

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
