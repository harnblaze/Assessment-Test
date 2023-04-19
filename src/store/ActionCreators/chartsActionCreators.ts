import { chartsActions } from "../reducers/chartReducer";
import { type AppDispatch, type RootState } from "../index";
import chartsAPi from "../../mockData/chartsAPi";

const { chartsRequested, chartsRequestFailed, chartsReceived, filtersChanged } =
  chartsActions;

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

export const changeFilters =
  (fromDate: string, toDate: string) => (dispatch: AppDispatch) => {
    dispatch(filtersChanged({ fromDate, toDate }));
  };
