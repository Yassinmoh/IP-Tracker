import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";

const appFeaturedState = createFeatureSelector<AppState>('App');
export const getIpData = createSelector(appFeaturedState,state => state.ipDataInfo);
