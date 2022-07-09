import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import inventoryService from './inventoryService';

const initialState = {
  inventories: [],
  inventory: {},
  isRequestLoading: false,
  isRequestSuccess: false,
  isRequestError: false,
  errorMessage: '',
};

export const createInventory = createAsyncThunk(
  'inventories/create',
  async (inventory, thunkAPI) => {
    try {
      return await inventoryService.createInventory(inventory);
    } catch (error) {
      const errorMessage = error && error.message;

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default inventorySlice.reducer;
