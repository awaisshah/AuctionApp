import { StoreModule } from "@ngrx/store";
//import { simpleReducer } from "./simple.reducer";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { postReducer } from './reducers/post.reducer';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(
    { 
      post: postReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // number of states to retain
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
