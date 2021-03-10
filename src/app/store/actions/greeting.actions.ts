import { createAction, props } from '@ngrx/store';
import { Greeting } from '../reducers/greeting.reducer';

export const sendGreeting = createAction(
  '[Amb] sendGreeting',
  props<{ greeting: Greeting }>(),
);

export const sendGreetingCompleted = createAction(
  '[Amb] sendGreetingCompleted',
  props<{ greeting: Greeting }>(),
);

export const sendGreetingFailed = createAction(
  '[Amb] sendGreetingFailed',
);

export const getGreeting = createAction(
  '[Amb] getGreeting',
);
