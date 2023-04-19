import { type IChart } from "../../types/chart.types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IProductsState {
  entities: IChart[];
  isLoading: boolean;
  error: null | string;
  fromDate: string;
  toDate: string;
}

const initialState: IProductsState = {
  entities: [],
  isLoading: true,
  error: null,
  fromDate: "2022-01-01",
  toDate: "2023-04-19",
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    chartsRequested: (state) => {
      state.isLoading = true;
    },
    chartsReceived: (state, action: PayloadAction<IChart[]>) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    chartsRequestFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    filtersChanged: (
      state,
      action: PayloadAction<{ toDate: string; fromDate: string }>
    ) => {
      state.fromDate = action.payload.fromDate;
      state.toDate = action.payload.toDate;
    },
  },
});

export const { reducer: chartsReducer, actions: chartsActions } = chartSlice;
