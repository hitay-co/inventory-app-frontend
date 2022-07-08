import InventoryCreatePanel from '../InventoryCreatePanel/InventoryCreatePanel';
import InventoryTable from '../InventoryTable/InventoryTable';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <InventoryCreatePanel />
      <InventoryTable />
    </div>
  );
};

export default Home;
