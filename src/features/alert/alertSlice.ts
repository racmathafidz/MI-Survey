import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AlertType = "success" | "danger" | "warning" | "info";

export interface AlertState {
  type: AlertType;
  text: string;
  visible: boolean;
}

const initialState: AlertState = {
  type: "info",
  text: "",
  visible: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<{ type: AlertType; text: string }>) => {
      state.type = action.payload.type;
      state.text = action.payload.text;
      state.visible = true;
    },
    hideAlert: (state) => {
      state.visible = false;
      state.text = "";
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
