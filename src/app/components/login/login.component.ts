import { Store } from 'redux';
import { observable } from 'rxjs/symbol/observable';
import { AppState } from '../../combineReducer';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from './../../store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS, LOGIN_DATA } from './../../todo.actions';
import { ITodo } from "../../todo";


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
    this.ngRedux.select('todo').subscribe(data => {
      console.log(data);
      this.todoData = data;
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

    this.todoForm = this.fb.group({
      id: [0, Validators.required],
      description: ['', Validators.required],
      responsible: ['', Validators.required],
      priority: ['low', Validators.required],
      isCompleted: [false, Validators.required]

    });
  }

  submit() {
    console.log(this.loginForm.value);
  }


  onLoginFormSubmition() {
    this.ngRedux.dispatch({ type: LOGIN_DATA, login: this.loginForm.value })
  }

  onSubmit() {
    this.ngRedux.dispatch({ type: ADD_TODO, todo: this.todoForm.value })
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id })
  }

  removeTodo(todo) {
    console.log(todo)
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id })
  }


}
