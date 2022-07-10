import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import inventoryService from './inventoryService';

const initialState = {
  inventories: [],
  inventory: {},
  isCreateLoading: false,
  isCreateSuccess: false,
  isCreateError: false,
  isGetAllLoading: false,
  isGetAllSuccess: false,
  isGetAllError: false,
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
        state.isCreateLoading = true;
      })
      .addCase(createInventory.fulfilled, (state, action) => {
        state.isCreateLoading = false;
        state.isCreateSuccess = true;
        state.isCreateError = action.payload;
      })
      .addCase(createInventory.rejected, (state, action) => {
        state.isCreateLoading = false;
        state.isCreateError = true;
        state.errorMessage = action.payload;
      });
    builder
      .addCase(getInventories.pending, (state) => {
        state.isGetAllLoading = true;
      })
      .addCase(getInventories.fulfilled, (state, action) => {
        state.isGetAllLoading = false;
        state.isGetAllSuccess = true;
        state.inventories = action.payload;
      })
      .addCase(getInventories.rejected, (state, action) => {
        state.isGetAllLoading = false;
        state.isGetAllError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = inventorySlice.actions;
export default inventorySlice.reducer;
