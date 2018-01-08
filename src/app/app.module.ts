import { ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from '@ngrx/store';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from "./components/home/home.component";
import { AppRoutingModule } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';



import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { createEpicMiddleware } from 'redux-observable';
import {IAppState, rootReducer, INITIAL_STATE} from "./store/authStore";
import {loginReducer, INITIAL_LOGIN_STATE, ILoginSate} from "./store/authStore";
import {AppState, RootReducer} from "./combineReducer";

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import {CreateUserEpics} from './epics/createuser.epics';
import { AuctionFormComponent } from './components/auction-form/auction-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AuctionFormComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    NgReduxModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CreateUserEpics],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<AppState>, private epics: CreateUserEpics) {
    const middleware = [
      createEpicMiddleware(this.epics.createNewUser),
      createEpicMiddleware(this.epics.loginUser)
      
    ];

    this.ngRedux.configureStore(RootReducer, {}, middleware);
    
  }

}
