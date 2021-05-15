import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { productType } from './ProductType';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductDataService {

  products;
  AllDataApi = 'https://fakestoreapi.com/products';
  singleRecord = 'https://fakestoreapi.com/products/userId'

  getProductList():Observable<productType[]>{
    return this.fromDatabase() as Observable<productType[]>;
  }

  findProduct(userId){
    return this.http.get<productType[]>('https://fakestoreapi.com/products/'+userId);
  }

  fromDatabase():Observable<productType[]>{
    return this.http.get<productType[]>(this.AllDataApi);    
  }

  addtoCard(cardData){
    if(localStorage.getItem('Product') == null) {
      localStorage.setItem('Product','[]');
    } 
    let userProduct = JSON.parse(localStorage.getItem('Product'));
    userProduct.push(cardData);
            if(cardData){
              localStorage.setItem('Product', JSON.stringify(userProduct));
              location.reload();
            }
  }

  getCardItem(){
    return JSON.parse(localStorage.getItem('Product'));
  }

  constructor(private http: HttpClient ) { }
}
