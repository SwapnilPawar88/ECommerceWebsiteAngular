import { Component, OnInit, ɵLocaleDataIndex } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { userAddress } from '../ProductType';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  
  totalPrice = 0;
  userAddress = new userAddress();

  Standard_delivery = "Standard_delivery";
  Fast_delivery = "Fast_delivery($10)";

  onSubmit(){
    if(localStorage.getItem('UserAdress') == null) {
      localStorage.setItem('UserAdress','[]');
    } 

    var localData = JSON.parse(localStorage.getItem('UserAdress'));
    console.log(localData);
    localData.push(this.userAddress);

    localStorage.setItem("UserAdress", JSON.stringify(localData));
    alert("Thank You Order Place !!");
    this.route.navigate(['/thankPage']);
  }

  constructor(private ProductDataService : ProductDataService, private route:Router) { }

  ngOnInit(): void {
    let totalCardPrice = JSON.parse(localStorage.getItem('Product'));
    for(let i = 0 ; i < totalCardPrice.length ; i++){
      this.totalPrice += totalCardPrice[i].price;
    }
  }
}