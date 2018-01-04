import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgRedux, select } from "@angular-redux/store";
import { AppState } from '../../combineReducer';
import { logging } from 'selenium-webdriver';

@Component({
  selector: 'app-auction-form',
  templateUrl: './auction-form.component.html',
  styleUrls: ['./auction-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuctionFormComponent implements OnInit {

  CreateAuctionForm: FormGroup;
  constructor(private fb: FormBuilder, private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.CreateAuctionForm = this.fb.group({
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      auctionEndDate: ['', Validators.required],
      endTime: ['', Validators.required],
      FirstBiding: ['', Validators.required]
    }); 
  }

  submit() {
    console.log(this.CreateAuctionForm.value);
    
  }
}
