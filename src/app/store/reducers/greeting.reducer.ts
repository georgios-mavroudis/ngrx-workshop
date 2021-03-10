import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as sendGreetingActions from '../actions/greeting.actions';

export interface Greeting {
  id: number;
  word: string;
  time: number;
};


