/*
import { State } from '@ngrx/store';
import * as CounterActions from './counter.actions';

interface AppState {
	counter: number;
  }

  

export type Action = CounterActions.All;

export function reducer(state: number = 0, action: Action): any {
  switch(action.type) {
    case CounterActions.INCREMENT: {
      return state + 1;
    }

    case CounterActions.ADDTODO: {
      return state + 1;
    }

    case CounterActions.DECREMENT: {
      return state - 1;
    }

    case CounterActions.RESET: {
      return action.payload; // typed to number
    }    

    default: {
      return state;
    }
  }
}

*/

import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action: Action) {
  switch (action.type) {
    case 'SPANISH':
      return state = 'Hola Mundo'
    case 'FRENCH':
      return state = 'Bonjour le monde'
    default:
      return state;
  }
}
