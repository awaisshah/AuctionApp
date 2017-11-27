import { combineReducers } from 'redux';
import {IAppState, rootReducer, INITIAL_STATE} from "./store"
import {loginRrducer, INITIAL_LOGIN_STATE, ILoginSate} from "./store"


export interface AppState {
    todo?: IAppState;
    login?: ILoginSate;

}


export const RootReducer = combineReducers<AppState>({
    todo: rootReducer,
    login: loginRrducer

})