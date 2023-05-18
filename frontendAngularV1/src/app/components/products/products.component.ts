import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Product } from 'src/app/interfaces/product/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  filter: boolean = false;

  filteredProducts: any[] = [];

  products: Product[] = [];

  productIndex: number[] = [];

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.retrieveAllProducts();
    document.body.style.backgroundColor = "lightblue";
  }

  retrieveAllProducts() {
    this.ps.getAllProducts().pipe(take(1)).subscribe(res => {
      this.products = res;
      /*
      this.productIndex = Array.from( { length: res.length }, (_,k) => k + 1 );
      var productNames = res.map(x=>x.name);
      var productImages = res.map(x=>x.imageURL);
      var productPrices = res.map(x=>x.price);
      res.map((_,i) => {
        var pNameElement;
        pNameElement = document.createElement('mat-card-title');
        pNameElement.className = 'product-name';
        pNameElement.innerHTML = productNames[i];
        document.getElementsByTagName('mat-card-header')[i].appendChild(pNameElement);

        var pImageElement;
        pImageElement = document.createElement('img');
        pImageElement.className = 'product-image';
        pImageElement.src = productImages[i];
        // pImageElement.height = 150;
        pImageElement.width = 250;
        document.getElementsByTagName('mat-card-header')[i].appendChild(pImageElement);

        var pPriceElement;
        pPriceElement = document.createElement('h6');
        pPriceElement.className = 'product-price col';
        pPriceElement.innerHTML = productPrices[i].toString();
        document.getElementsByTagName('mat-card-content')[i].appendChild(pPriceElement);
      });
      */
    });
  }

  searchProductTerm(event: Event) {
    this.filter = false;
    this.filteredProducts = this.products.filter(term => term.name.toLowerCase().includes((event.target as HTMLInputElement).value.toLowerCase()));
  }

  searchProduct() {
    this.filter = true;
  }

  addToCart() {

  }

}