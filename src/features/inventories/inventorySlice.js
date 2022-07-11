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
  isDeleteLoading: false,
  isDeleteSuccess: false,
  isDeleteError: false,
  errorMessage: '',
};

export const createInventory = createAsyncThunk(
  'inventories/create',
  async (inventory, thunkAPI) => {
    try {
      return await inventoryService.createInventory(inventory);
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.message;

      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteInventory = createAsyncThunk(
  'inventories/delete',
  async (id, thunkAPI) => {
    try {
      return await inventoryService.deleteInventory(id);
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.message;

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
      const errorMessage =
        error.response && error.response.data && error.response.data.message;

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
        state.inventory = action.payload;
      })
      .addCase(createInventory.rejected, (state, action) => {
        state.isCreateLoading = false;
        state.isCreateError = true;
        state.errorMessage = action.payload;
      });
    builder
      .addCase(deleteInventory.pending, (state) => {
        state.isDeleteLoading = true;
      })
      .addCase(deleteInventory.fulfilled, (state, action) => {
        state.isDeleteLoading = false;
        state.isDeleteSuccess = true;
        state.inventories.filter(
          (inventory) => inventory._id !== action.payload._id
        );
      })
      .addCase(deleteInventory.rejected, (state, action) => {
        state.isDeleteLoading = false;
        state.isDeleteError = true;
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
