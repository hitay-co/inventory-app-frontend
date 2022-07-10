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

export const getInventories = createAsyncThunk(
  'inventories/getAll',
  async (_, thunkAPI) => {
    try {
      return await inventoryService.getInventories();
    } catch (error) {
      const errorMessage = error && error.message;

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    reset: (state) => {
      return { ...initialState, inventories: state.inventories };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createInventory.pending, (state) => {
        state.isRequestLoading = true;
      })
      .addCase(createInventory.fulfilled, (state, action) => {
        state.isRequestLoading = false;
        state.isRequestSuccess = true;
        state.inventory = action.payload;
      })
      .addCase(createInventory.rejected, (state, action) => {
        state.isRequestLoading = false;
        state.isRequestError = true;
        state.errorMessage = action.payload;
      });
    builder
      .addCase(getInventories.pending, (state) => {
        state.isRequestLoading = true;
      })
      .addCase(getInventories.fulfilled, (state, action) => {
        state.isRequestLoading = false;
        state.isRequestSuccess = true;
        state.inventories = action.payload;
      })
      .addCase(getInventories.rejected, (state, action) => {
        state.isRequestLoading = false;
        state.isRequestError = true;
        state.errorMessage = action.payload;
      });
  },
});

export default inventorySlice.reducer;
