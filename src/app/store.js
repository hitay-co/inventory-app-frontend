import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../features/inventories/inventorySlice';

export const store = configureStore({
  reducer: { inventories: inventoryReducer },
});
