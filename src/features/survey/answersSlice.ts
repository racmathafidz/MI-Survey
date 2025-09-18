import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AnswerMap = Record<number, string>;
export interface SurveyState {
  answers: AnswerMap;
}

const initialState: SurveyState = {
  answers: {},
};

const answersSlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setAnswer: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      const { index, value } = action.payload;
      state.answers[index] = value;
    },
    resetSurvey: (state) => {
      state.answers = {};
    },
  },
});

export const { setAnswer, resetSurvey } = answersSlice.actions;
export default answersSlice.reducer;
