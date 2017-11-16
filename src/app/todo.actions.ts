
  import { Action } from '@ngrx/store';
  
    export const EDIT_TEXT  = '[Todo] Edit';
    export const ADD_TEXT     = '[Todo] AddText';
    export const DELETE_TEXT   = '[Todo] DeleteText';
    export const RESET      = '[Todo] Reset';
    
    export class EditText implements Action {
        readonly type = EDIT_TEXT;
        /// user a constructor to send a payload with the action
        constructor(public payload: string) {}
        
    }
    
    export class AddText implements Action {
      
      readonly type = ADD_TEXT;
      constructor(public payload: string) {}
    }
    
    export class DeleteText implements Action {
      readonly type = DELETE_TEXT;
      constructor(public payload: number) {}
        
      
    }
  
    export class Reset implements Action {
      readonly type = RESET;
    }
    
    export type All
      = AddText
      | DeleteText
      | Reset
      | EditText;