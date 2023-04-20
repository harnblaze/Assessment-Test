import { chartsActions } from "../reducers/chartReducer";
import { type AppDispatch, type RootState } from "../index";
import chartsAPi from "../../mockData/chartsAPi";
import { type ModalData } from "../../types/chart.types";

const {
  chartsRequested,
  chartsRequestFailed,
  chartsReceived,
  filtersChanged,
  newChartAdded,
  chartUpdateSuccess,
  chartRemoveSuccess,
} = chartsActions;

export const fetchingChartsList = () => async (dispatch: AppDispatch) => {
  dispatch(chartsRequested());
  try {
    const data = await chartsAPi.fetchAll();
    dispatch(chartsReceived(data));
  } catch (e: any) {
    dispatch(chartsRequestFailed(e.message));
  }
};

export const getCharts = () => (state: RootState) => state.charts.entities;
export const getChartsLoadingStatus = () => (state: RootState) =>
  state.charts.isLoading;
export const getChartsErrors = () => (state: RootState) => state.charts.error;
export const getFilters = () => (state: RootState) => ({
  fromDate: state.charts.fromDate,
  toDate: state.charts.toDate,
});
export const getChartById = (id: string) => (state: RootState) => {
  return state.charts.entities.find((chart) => chart.id === id);
};

export const changeFilters =
  (fromDate: string, toDate: string) => (dispatch: AppDispatch) => {
    dispatch(filtersChanged({ fromDate, toDate }));
  };

export const addChart =
  (payload: ModalData) => async (dispatch: AppDispatch) => {
    dispatch(chartsRequested());
    try {
      const data = await chartsAPi.create(payload);
      dispatch(newChartAdded(data));
    } catch (e: any) {
      dispatch(chartsRequestFailed(e.message));
    }
  };

export const updateChart =
  (payload: ModalData) => async (dispatch: AppDispatch) => {
    dispatch(chartsRequested());
    try {
      const data = await chartsAPi.update(payload);
      dispatch(chartUpdateSuccess(data));
    } catch (e: any) {
      dispatch(chartsRequestFailed(e.message));
    }
  };

export const removeChart = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(chartsRequested());
  try {
    const data = await chartsAPi.deleteChart(id);
    dispatch(chartRemoveSuccess(data));
  } catch (e: any) {
    dispatch(chartsRequestFailed(e.message));
  }
};
