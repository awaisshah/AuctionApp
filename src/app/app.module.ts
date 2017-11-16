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
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      todoReducer
    }),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
