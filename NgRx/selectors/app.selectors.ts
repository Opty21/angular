import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, appFeatureKey } from '../reducers/app.reducer';

export const selectAppState = createFeatureSelector<State>(appFeatureKey);

export const selectNavigationState = createSelector(selectAppState,(state)=> state.navigationVisible)