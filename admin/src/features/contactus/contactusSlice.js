import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import contactService from "./contactusService";

export const getAllContact = createAsyncThunk(
  "contact/get",
  async (thunkAPI) => {
    try {
      return await contactService.getContacts();
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createContact = createAsyncThunk(
  "contact/create-contact",
  async (contactData, thunkAPI) => {
    try {
      return await contactService.createContacts(contactData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteAContact = createAsyncThunk(
  "contact/delete-contact",
  async (id, thunkAPI) => {
    try {
      return await contactService.deleteContact(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAContact = createAsyncThunk(
  "contact/get-contact",
  async (id, thunkAPI) => {
    try {
      return await contactService.getContact(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateAContact = createAsyncThunk(
  "color/update-contact",
  async (contact, thunkAPI) => {
    try {
      return await contactService.updateContact(contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("Reset_all");

const initialState = {
  Contacts: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const contactSlice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.Contacts = action.payload;
      })
      .addCase(getAllContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdContact = action.payload;
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedContact = action.payload;
      })
      .addCase(deleteAContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contactName = action.payload[0].name;
        state.contactDiscount = action.payload[0].discount;
        state.contactExpiry = action.payload[0].expiry;
      })
      .addCase(getAContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateAContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contactName = action.payload[0].name;
        state.contactDiscount = action.payload[0].discount;
        state.contactExpiry = action.payload[0].expiry;
      })
      .addCase(updateAContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default contactSlice.reducer;
