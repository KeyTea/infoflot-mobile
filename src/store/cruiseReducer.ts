import {createAsyncThunk, createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, cruise } from "../config/constants";
import { Cruise, Link } from "../config/Types";
import { RootState } from "./store";

export type CruiseState = {
    cruise: Cruise;
    isLoading: boolean,
    error: Error | null;
}

const initialState: CruiseState = {
    cruise: <Cruise>{},
    isLoading: true,
    error: null
}

export const getCruise = createAsyncThunk<any, Link>(
    cruise,
    async (link: Link) => {
        try {
            const response = await axios.get(link.url + link.id, {
                params: {
                    key: API_KEY,
                }
            });
            console.log('link: ' + link.url + ',' + link.id)
            return response.data;
        } catch (error) {
            setCruiseError(error);
        }
    }
);

export const cruiseSlice: Slice = createSlice({
    name: cruise,
    initialState,
    reducers: {
        setCruiseError: (state, action: PayloadAction<Error>) => {
            state.error = action.payload.message;
        },
        handleCruiseError: (state) => {
            state.error = null;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            return {...state, isLoading: action.payload};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCruise.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCruise.fulfilled, (state, action: PayloadAction<Cruise>) => {
                if (action.payload) {
                    state.cruise = action.payload;
                }
                state.isLoading = false;
            });
    },

});

export const {setCruiseError, setIsLoading, handleCruiseError} = cruiseSlice.actions;
export const selectCruise = (state: RootState) => state.cruise;
export default cruiseSlice.reducer;
