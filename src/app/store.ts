import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; 
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import surveyReducer from "../features/survey/answersSlice";
import timerReducer from "../features/survey/timerSlice";
import alertReducer from "../features/alert/alertSlice";

const rootReducer = combineReducers({
  survey: surveyReducer,
  timer: timerReducer,
  alert: alertReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["survey", "timer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
