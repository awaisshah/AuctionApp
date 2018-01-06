import { combineReducers } from 'redux';
import {IAppState, rootReducer, INITIAL_STATE} from "./store"
import {loginReducer, INITIAL_LOGIN_STATE, ILoginSate, SignupState, signupReducer} from "./store"


export interface AppState {
    todo?: IAppState;
    login?: ILoginSate;
    signup?: SignupState
    

}


export const RootReducer = combineReducers<AppState>({
    todo: rootReducer,
    login: loginReducer,
    signup: signupReducer

})