// ./effects/auth.ts
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect() login$: Observable<Action> = this.actions$.ofType('ADD_TODO')
    .mergeMap(action =>
      this.http.post('/auth', action)
        // If successful, dispatch success action with result
        .map(data => ({ type: 'ADD_TODO', todo: data }))
        // If request fails, dispatch failed action

    );

  constructor(
    private http: Http,
    private actions$: Actions
  ) {}      
}