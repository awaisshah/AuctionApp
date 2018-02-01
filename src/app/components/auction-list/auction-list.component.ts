import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NgRedux, select } from "@angular-redux/store";
import { AppState } from '../../combineReducer';
import { AngularFireAuth } from 'angularfire2/auth';
import { GET_AUCTION } from './../../todo.actions';


@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuctionListComponent implements OnInit {
  AuctionData: any;
  uid;
  
  constructor(public afAuth: AngularFireAuth, private ngRedux: NgRedux<AppState>) {
    // afAuth.authState.subscribe(auth => {
    //   console.log(auth.uid)
    //   this.uid = auth.uid;
    // })

    console.log("11111111")
    this.ngRedux.dispatch({ type: GET_AUCTION })

  }

  ngOnInit() {

    this.ngRedux.select('getAuction').subscribe(data => {
      console.log(data);
      this.AuctionData = data;
    });

  }

}
