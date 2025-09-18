import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TimerState {
  deadline: number | null; 
  durationSec: number;       
}

const initialState: TimerState = {
  deadline: null,
  durationSec: 45,           
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state, action: PayloadAction<number | undefined>) => {
      const duration = action.payload ?? state.durationSec;
      state.durationSec = duration;
      state.deadline = Date.now() + duration * 1000;
    },
    resetTimer: (state) => {
      state.deadline = null; 
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.durationSec = action.payload;
    },
  },
});

export const { startTimer, resetTimer, setDuration } = timerSlice.actions;
export default timerSlice.reducer;
