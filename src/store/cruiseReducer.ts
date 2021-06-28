import {createAsyncThunk, createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import axios from "axios";
import {API_KEY, cruise, cruiseDescRus, cruiseError} from "../config/constants";
import {Cruise, DescTable, Link} from "../config/types";
import { RootState } from "./store";

export type CruiseState = {
    id: string;
    cruise: Cruise;
    isLoading: boolean,
    error: Error | null;
    table: DescTable[];
}

const initialState: CruiseState = {
    id:'',
    cruise: <Cruise>{},
    isLoading: true,
    error: null,
    table: []
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
            // console.log('link: ' + link.url + link.id + API_KEY);
            return response.data;
        } catch (error) {
            setCruiseError(error);
            // setIsLoading(false);
        }
    }
);

export const cruiseSlice: Slice = createSlice({
    name: cruise,
    initialState,
    reducers: {
        setId: (state,action: PayloadAction<string>)=> {
            state.id = action.payload;
        },
        setCruise: (state, action: PayloadAction<Cruise>) =>{
            if (action.payload) {
                state.cruise = action.payload;
            }
        },
        setCruiseError: (state, action: PayloadAction<Error>) => {
            state.error = action.payload;
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
            .addCase(getCruise.rejected, (state) => {
                state.isLoading = false;
                state.error = cruiseError;
            })
            .addCase(getCruise.fulfilled, (state, action: PayloadAction<Cruise>) => {
                if (action.payload) {
                    state.cruise = action.payload;
                } else {
                    state.error = cruiseError;
                }
                state.isLoading = false;
            });
    },

});

export const {setCruiseError, setIsLoading, handleCruiseError, setCruise, setTable, setId} = cruiseSlice.actions;
export const selectCruise = (state: RootState) => state.cruise;
export default cruiseSlice.reducer;
