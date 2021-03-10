import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as sendGreetingActions from '../actions/greeting.actions';

export type IGreetingState = EntityState<Greeting>;

export interface Greeting {
  id: number;
  word: string;
  time: number;
};

const initialState: IGreetingState = {
  entities: {},
  ids: [],
};

const adapter = createEntityAdapter<Greeting>();

const reducer = createReducer(
  initialState,
  on(
    sendGreetingActions.sendGreeting,
    (state, { greeting }) => adapter.addOne(greeting, state),
  ),
);

export function greetingReducer(
  state: IGreetingState,
  action: Action,
): IGreetingState {
  return reducer(state, action);
}

export const {
  selectAll,
  selectEntities: selectGreetingEntities,
} = adapter.getSelectors();

