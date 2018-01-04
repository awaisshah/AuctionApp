import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `.done { text-decoration: line-through; color: salmon; }`
  ]
})
export class AppComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }

}