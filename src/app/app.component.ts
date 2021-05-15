import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'onlineEcommerceStore';
  cardItemLength;

  constructor(){
    if(localStorage.getItem('Product') == null) {
      localStorage.setItem('Product','[]');
    }
    if(localStorage.getItem("Product") != null){
      this.cardItemLength = JSON.parse(localStorage.getItem('Product'));
    }
  }
  
}
