import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { productType } from '../ProductType';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  Product;
  // newCard = new productType();

  AddCard(){
    this.ProductDataService.addtoCard(this.Product);
    alert(`Product Added To Card => ${this.Product.title}`)
  }

  constructor(private route:ActivatedRoute,private ProductDataService: ProductDataService) { }

  ngOnInit(): void {
    let urlId = this.route.snapshot.paramMap.get('Id');
    this.Product = this.ProductDataService.findProduct(urlId).subscribe((Product) => {
      this.Product = Product;
    })
  }
}
