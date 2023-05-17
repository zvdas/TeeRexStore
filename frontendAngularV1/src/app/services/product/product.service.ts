import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url: string = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';

  constructor(private http: HttpClient) { }

  /**
   * retrieve all products from API
   */
  getAllProducts() {
    return this.http.get<Product[]>(this.url);
  }

}