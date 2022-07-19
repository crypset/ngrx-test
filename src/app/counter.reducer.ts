import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 10;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) =>  state + action.inc),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
