import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgRedux, select } from "@angular-redux/store";
import { AppState } from '../../combineReducer';
import { AngularFireAuth } from 'angularfire2/auth';
import { CREATE_AUCTION, CREATE_AUCTION_SUCESS, CREATE_AUCTION_FAIL } from './../../todo.actions';


import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Promise } from 'q';

@Component({
  selector: 'app-auction-form',
  templateUrl: './auction-form.component.html',
  styleUrls: ['./auction-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuctionFormComponent implements OnInit {

  CreateAuctionForm: FormGroup;
  user: Observable<any>;
  uid: any;
  AuctionCreator: any;
  model;
  time = { hour: 13, minute: 30 };
  meridian = true;

  constructor(private fb: FormBuilder, public afAuth: AngularFireAuth, private ngRedux: NgRedux<AppState>) {

    afAuth.authState.subscribe(auth => {
      console.log(auth.uid)
      this.uid = auth.uid;
    })

  }

  ngOnInit() {

    this.ngRedux.select('login').subscribe(data => {
      console.log(data);
      this.AuctionCreator = data;
    });
    this.createForm();
  }

  createForm() {
    this.CreateAuctionForm = this.fb.group({
      auctionCreatorUid: [''],
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      auctionEndDate: ['', Validators.required],
      endTime: ['', Validators.required],
      selectCategory: ['', Validators.required],
      FirstBiding: ['', Validators.required]
    });
  }


  submit() {
    if (this.uid) {
      this.CreateAuctionForm.patchValue({
        auctionCreatorUid: this.uid
      });
      console.log(this.CreateAuctionForm.value);
      this.ngRedux.dispatch({ type: CREATE_AUCTION, payload: this.CreateAuctionForm.value })
    }

  }



}
