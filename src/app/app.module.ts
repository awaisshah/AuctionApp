import { ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from '@ngrx/store';
import { postReducer } from './post.reducer';
import { todoReducer } from './todo.reducer';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from "./components/home/home.component";
import { AppRoutingModule } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';



import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { createEpicMiddleware } from 'redux-observable';
import {IAppState, rootReducer, INITIAL_STATE} from "./store";
import {loginRrducer, INITIAL_LOGIN_STATE, ILoginSate} from "./store";
import {AppState, RootReducer} from "./combineReducer";

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';


import {SessionEpics} from './login.epics';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    StoreModule.forRoot({
      todoReducer
    }),
    NgReduxModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SessionEpics],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<AppState>, private epics: SessionEpics) {
    const middleware = [
      createEpicMiddleware(this.epics.login)
    ];

    this.ngRedux.configureStore(RootReducer, {}, middleware);
    
  }

}
