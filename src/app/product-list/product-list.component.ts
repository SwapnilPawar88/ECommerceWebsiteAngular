import { Component, OnInit } from '@angular/core';

import { productType } from '../ProductType';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList;
  myarr;

  constructor(private ProductDataService : ProductDataService) { }

  ngOnInit(): void {
    this.productList = this.ProductDataService.getProductList().subscribe((productList) => {
      this.productList = productList;
      this.productList.sort((a, b) => b.price - a.price);
    });
  }
}
