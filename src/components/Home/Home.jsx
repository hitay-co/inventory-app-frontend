import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getInventories,
  reset,
} from '../../features/inventories/inventorySlice';
import InventoryCreatePanel from '../InventoryCreatePanel/InventoryCreatePanel';
import InventoryTable from '../InventoryTable/InventoryTable';
import './Home.css';

const Home = () => {
  const { isRequestSuccess } = useSelector((state) => state.inventories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInventories());
  }, []);

  useEffect(() => {
    if (isRequestSuccess) {
      dispatch(reset());
    }
  }, [dispatch, isRequestSuccess]);

  return (
    <div className='home-container'>
      <InventoryCreatePanel />
      <InventoryTable />
    </div>
  );
};

export default Home;
