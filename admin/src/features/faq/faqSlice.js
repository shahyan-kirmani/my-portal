import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import faqService from "./faqService";

export const getAllFaq = createAsyncThunk(
  "faq/get-Faqs",
  async (thunkAPI) => {
    try {
      return await faqService.getFaqs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createFaq = createAsyncThunk(
  "faq/create-faq",
  async (faqData, thunkAPI) => {
    try {
      return await faqService.createFaqs(faqData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteAFaq = createAsyncThunk(
  "faq/delete-faq",
  async (id, thunkAPI) => {
    try {
      return await faqService.deleteFaq(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAFaq = createAsyncThunk(
  "faq/get-faq",
  async (id, thunkAPI) => {
    try {
      return await faqService.getFaq(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateFaq = createAsyncThunk(
  "color/update-faq",
  async (faq, thunkAPI) => {
    try {
      return await faqService.updateFaq(faq);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("Reset_all");

const initialState = {
  Faqs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const faqSlice = createSlice({
  name: "Faqs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFaq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFaq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.Faqs = action.payload;
      })
      .addCase(getAllFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createFaq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFaq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdFaq = action.payload;
      })
      .addCase(createFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteAFaq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAFaq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedFaq = action.payload;
      })
      .addCase(deleteAFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAFaq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAFaq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.faqName = action.payload[0].name;
        state.faqDiscount = action.payload[0].discount;
        state.faqExpiry = action.payload[0].expiry;
      })
      .addCase(getAFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateFaq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFaq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.faqName = action.payload[0].name;
        state.faqDiscount = action.payload[0].discount;
        state.faqExpiry = action.payload[0].expiry;
      })
      .addCase(updateFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default faqSlice.reducer;
