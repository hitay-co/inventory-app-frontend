import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInventories } from '../../features/inventories/inventorySlice';
import InventoryCreatePanel from '../InventoryCreatePanel/InventoryCreatePanel';
import InventoryTable from '../InventoryTable/InventoryTable';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInventories());
  }, []);

  return (
    <div className='home-container'>
      <InventoryCreatePanel />
      <InventoryTable />
    </div>
  );
};

export default Home;
