import { Store } from 'redux';
import { observable } from 'rxjs/symbol/observable';
import { AppState } from '../../combineReducer';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from '../../store/authStore';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS, LOGIN_DATA } from './../../todo.actions';
//import { ITodo } from "../../todo";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  todoForm: FormGroup;

  //@select() todos;
  
  todoData: any;
  constructor(private fb: FormBuilder, private ngRedux: NgRedux<AppState>) {
    //this.ngRedux.getState
    this.createForm();

  }

  ngOnInit() {
    this.ngRedux.select('signup').subscribe(data => {
      console.log(data);
    });
    
    this.ngRedux.select('login').subscribe(data => {
      console.log(data);
    });
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    
  }

  submit() {
    console.log(this.loginForm.value);
    this.ngRedux.dispatch({ type: LOGIN_DATA, login: this.loginForm.value })
  }


  // onSubmit() {
  //   this.ngRedux.dispatch({ type: ADD_TODO, todo: this.todoForm.value })
  // }


}
