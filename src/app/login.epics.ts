// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { ActionsObservable } from 'redux-observable';
// import { SessionActions } from '../actions/session.actions';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

// const BASE_URL = '/api';

// @Injectable()
// export class LoginEpics {
//   constructor(private http: Http) {}

//   login = (action$: ActionsObservable<any>) => {
//     return action$.ofType(SessionActions.LOGIN_USER)
//       .mergeMap(({payload}) => {
//         return this.http.post(`${BASE_URL}/auth/login`, payload)
//           .map(result => ({
//             type: SessionActions.LOGIN_USER_SUCCESS,
//             payload: result.json().meta
//           }))
//           .catch(error => Observable.of({
//             type: SessionActions.LOGIN_USER_ERROR
//           }));
//         });
//   }
// }


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActionsObservable } from 'redux-observable';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS, LOGIN_DATA, SIGNUP_DATA, SIGNUP_DATA_SUCESS } from './todo.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Injectable()
export class SessionEpics {
    constructor(public afAuth: AngularFireAuth) { }

    login = (action$) => {
        return action$.ofType(SIGNUP_DATA)
            .mergeMap(({ signup }) => {
                return Observable.fromPromise(<Promise<any>>this.afAuth.auth.createUserWithEmailAndPassword(signup.email, signup.password)
                ).map(signup => {
                    console.log(signup)
                    return {
                        type: SIGNUP_DATA_SUCESS,
                        payload: signup
                    }
                })
                //   .catch(error => Observable.of({
                //     type: SessionActions.LOGIN_USER_ERROR
                //   }));
            });
    }
}