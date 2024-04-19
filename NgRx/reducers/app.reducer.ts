import { createReducer, on } from '@ngrx/store';
import { AppActions } from '../actions/app.actions';

export const appFeatureKey = 'app';

export interface State {
navigationVisible:boolean;
}

export const initialState: State = {
navigationVisible:true
};

export const reducer = createReducer(
  initialState,
  on(AppActions.showNavigation,state => ({...state,navigationVisible:true})),
  on(AppActions.hideNavigation,state => ({...state,navigationVisible:false})),

);

