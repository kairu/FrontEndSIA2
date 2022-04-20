import { Component, OnInit } from '@angular/core';
import { productList } from '../common/productList';
import { ServiceService } from '../header/service.service';
import { CartServiceService } from './cart-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productlist = productList;
  constructor(private cartService: CartServiceService, private headerService: ServiceService) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    if(this.headerService.login != null){
      this.cartService.addToCart(product);
      alert(product.name+" Added to cart");
    }else{
      alert("Please Login First before adding something!")
    }
  }

}
