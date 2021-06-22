import {Action, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { ThunkAction } from "redux-thunk";
import cruiseReducer from "./cruiseReducer";

export const store = configureStore({
    reducer: {
        cruise: cruiseReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
