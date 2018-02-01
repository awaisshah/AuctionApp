import { combineReducers } from 'redux';
import { IAppState, rootReducer, INITIAL_STATE } from "./store/authStore"
import { loginReducer, INITIAL_LOGIN_STATE, ILoginSate, SignupState, signupReducer } from "./store/authStore"
import { createAuctionState, CreateAuctionReducer, getAuctionReducer, getAuctionState } from "./store/auctionStore"

export interface AppState {
    todo?: IAppState;
    login?: ILoginSate;
    signup?: SignupState;
    createAuction?: createAuctionState;
    getAuction?: getAuctionState;


}


export const RootReducer = combineReducers<AppState>({

    todo: rootReducer,
    login: loginReducer,
    signup: signupReducer,
    createAuction: CreateAuctionReducer,
    getAuction: getAuctionReducer

})