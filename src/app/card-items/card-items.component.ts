import { Component, OnInit } from '@angular/core';

import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.css']
})
export class CardItemsComponent implements OnInit {

  cardProducts;
  removeCardItem;

  deleteCard(id){
    console.log(id);
    let cardItems = JSON.parse(localStorage.getItem('Product'));
    const filteredPeople = cardItems.filter((item) => item.id !== id);
    // console.log(filteredPeople);
    localStorage.setItem('Product', JSON.stringify(filteredPeople));
    alert("Card Item Removed !! ");
    location.reload();

    }

  constructor(private ProductDataService : ProductDataService) { }

  ngOnInit(): void {
    this.cardProducts = this.ProductDataService.getCardItem();
  }

}
