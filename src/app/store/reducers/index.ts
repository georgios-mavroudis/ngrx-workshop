import { ActionReducerMap } from '@ngrx/store';
import { greetingReducer, IGreetingState } from './greeting.reducer';

export const reducers: ActionReducerMap<rootState> = {
  'greeting': greetingReducer,
};

export interface rootState {
  'greeting': IGreetingState,
}
