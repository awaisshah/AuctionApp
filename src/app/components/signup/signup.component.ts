import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../../combineReducer';
import { SIGNUP_DATA } from './../../todo.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  todoData: any;

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private ngRedux: NgRedux<AppState>) {
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
  
    
    this.ngRedux.select('signup').subscribe(data => {
      console.log(data);
    });
  
  }

  createForm() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    console.log(this.signUpForm.value);
    this.ngRedux.dispatch({ type: SIGNUP_DATA, signup: this.signUpForm.value })
  }

  users() {}

}
