import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_URL = BASE_URL + '/api/inventories';

const getInventories = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createInventory = async (inventory) => {
  const response = await axios.post(API_URL, inventory);
  return response.data;
};

const updateInventory = async (id, updatedInventory) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedInventory);
  return response.data;
};

const deleteInventory = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const inventoryService = {
  getInventories,
  createInventory,
  updateInventory,
  deleteInventory,
};
