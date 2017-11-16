/*import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const RESET = '[Counter] Reset';
export const ADDTODO = '[Counter] Add';


export class Increment implements Action {
  readonly type = INCREMENT;
}


export class AddTodo implements Action {
  readonly type = ADDTODO;
}

export class Decrement implements Action {
  readonly type = DECREMENT;
}

export class Reset implements Action {
  readonly type = RESET;

  constructor(public payload: number) { }
}

export type All
  = Increment
  | AddTodo
  | Decrement
  | Reset;

  */

  import { Action } from '@ngrx/store';

  export const EDIT_TEXT  = '[Post] Edit';
  export const UPVOTE     = '[Post] Upvote';
  export const DOWNVOTE   = '[Post] Downvote';
  export const RESET      = '[Post] Reset';
  
  export class EditText implements Action {
      readonly type = EDIT_TEXT;
      /// user a constructor to send a payload with the action
      constructor(public payload: string) {}
      
  }
  
  export class Upvote implements Action {
    
    readonly type = UPVOTE;
    
  }
  
  export class Downvote implements Action {
    readonly type = DOWNVOTE;
  }

  export class Reset implements Action {
    readonly type = RESET;
  }
  
  export type All
    = Upvote
    | Downvote
    | Reset
    | EditText;