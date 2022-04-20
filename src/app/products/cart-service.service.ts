import { Injectable } from '@angular/core';
import { ProductsComponent } from 'src/app/products/products.component';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }
  items: any[] = [];
  addToCart(product: ProductsComponent) {
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
  }
}
