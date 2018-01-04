

//--------------------@angular-redux/store
import { ITodo } from "./todo";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS, LOGIN_DATA, SIGNUP_DATA, SIGNUP_DATA_SUCESS, SIGNUP_FAIL } from './todo.actions';

export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
}

export interface ILoginSate {
    email: string;
    password: any;
}

export interface SignupState {
    email: string;
    uid: any;
}


export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
}

export const INITIAL_LOGIN_STATE: ILoginSate = {
    email: "",
    password: ""
}



export const INITIAL_SIGNUP_STATE: SignupState = {
    email: "",
    uid: ""
}

export function rootReducer(state: IAppState = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODO:
            console.log(action.todo);
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            })
        case TOGGLE_TODO:
            var todo = state.todos.find(t => t.id === action.id);
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
                    ...state.todos.slice(index + 1)
                ],
                lastUpdate: new Date()
            })

        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            })


        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            })
    }
    return state;
}


export function loginRrducer(state: ILoginSate = INITIAL_LOGIN_STATE, action) {
    switch (action.type) {
        case LOGIN_DATA:
            console.log(action.login);
            return Object.assign({}, state, {
                email: action.login.email,
                password: action.login.password
            });
        //action.login.id = state.todos.length + 1;
        // return Object.assign({}, state, {
        //     todos: state.todos.concat(Object.assign({}, action.login)),
        //     lastUpdate: new Date()
        // })
    }
    return state;
}


export function signupReducer(state: SignupState = INITIAL_SIGNUP_STATE, action) {
    switch (action.type) {
        case SIGNUP_DATA_SUCESS:
            console.log(action.payload);
            return Object.assign({}, state, {
                email: action.payload.email,
                uid: action.payload.uid
            })
        case SIGNUP_FAIL:
            console.log(action.payload);
            // return Object.assign({}, state, {
            //     email: action.payload.email,
            //     uid: action.payload.uid
            // })

    }
    return state;
}


/*

export function todoReducer(state = [], action: ActionWithPayload<TodoPayload>) {
    switch (action.type) {
        case ADD_TODO:
            return [action.payload, ...state];
        case DELETE_TODO:
            return state.filter((item, index) => index !== action.payload.index);
        case UPDATE_TODO:
            return state.map((item, index) => {
                return index === action.payload.index
                    ? Object.assign({}, item, { value: action.payload.newValue })
                    : item;
            });
        case TOGGLE_DONE:
            return state.map((item, index) => {
                return index === action.payload.index
                    ? Object.assign({}, item, { done: !action.payload.done })
                    : item;
            });
        default:
            return state;
    }
}

*/