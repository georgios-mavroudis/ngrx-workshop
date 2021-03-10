import { createAction, props } from '@ngrx/store';
import { Greeting } from '../reducers/greeting.reducer';

export const sendGreeting = createAction(
  '[Amb] sendGreeting',
  props<{ greeting: Greeting }>(),
);

export const getGreeting = createAction(
  '[Amb] getGreeting',
);
