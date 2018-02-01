import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ShowAuctionForm = false;
  ShowAuctionList = false;

  
  categoryName: string = "";
  
  constructor() { }

  ngOnInit() {
  }

  switchAction() {
    this.ShowAuctionForm = !this.ShowAuctionForm;
    this.ShowAuctionList = false;
  }

  showAuctionList(name) {
    this.ShowAuctionForm = false;
    this.ShowAuctionList = true;
    console.log(name);
    this.categoryName = name;
  }

}
