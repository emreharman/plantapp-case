import { QuestionService } from "@/services/question.service";
import { Question } from "@/types/question";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
  items: Question[];
  loading: boolean;
  error: string | null;
}

const initialState: QuestionState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchQuestions = createAsyncThunk<Question[]>(
  "questions/fetch",
  async () => {
    return await QuestionService.getQuestions();
  }
);

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchQuestions.fulfilled,
        (state, action: PayloadAction<Question[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });
  },
});

export default questionSlice.reducer;
