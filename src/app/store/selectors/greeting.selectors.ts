import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IGreetingState, selectGreetingEntities } from '../reducers/greeting.reducer';

export const selectGreetingState = createFeatureSelector<IGreetingState>('greeting');

const getGreetingEntities = createSelector(
  selectGreetingState,
  selectGreetingEntities,
);

export const getSpecificGreetingTimeSelector = (id: number) => createSelector(
  selectGreetingState,
  (state) => { console.log(state.entities); return state.entities[id]; },
);

export const getAllGreetingsSelector = createSelector(
  getGreetingEntities,
  (greetingEntities) => {
    return Array.from(Object.values(greetingEntities));
  },
);

