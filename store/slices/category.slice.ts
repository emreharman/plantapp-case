import { CategoryService } from "@/services/category.service";
import { Category } from "@/types/category";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  items: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk<Category[]>(
  "categories/fetch",
  async () => {
    const data = await CategoryService.getCategories();
    return data;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearCategories: (state) => {
      state.items = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load categories";
      });
  },
});

export const { clearCategories } = categorySlice.actions;
export default categorySlice.reducer;
