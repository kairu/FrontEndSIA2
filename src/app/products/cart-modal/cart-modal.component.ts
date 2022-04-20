import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/header/service.service';
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent{

  constructor(private cartService: CartServiceService, private modalService: NgbModal, private http:HttpClient, private headerService: ServiceService) { }

  items = this.cartService.getItems();
  orderItems: any;
  showCart(Cart: any) {
    this.modalService.open(Cart, { scrollable: true });
  }

  showOrders(Orders: any){
    return this.http.get('http://localhost:5000/getOrder/'+this.headerService.get_login(),).subscribe({
      next: (d) => {this.hasItems(d, Orders)},
      error: () => {console.clear(), 
                    alert("No Orders Available!")}
    });
    
  }

  hasItems(data: any, modal: any){
    this.orderItems = data["Data"];    
    this.modalService.open(modal, { scrollable: true });
  }

  getCount(product: any){
    return product.length;
  }
  getTotal(product:any){
    let price = 0;
    for(let i=0; i<product.length; i++){
      price += parseInt(product[i].price);
    }
    return price
  }

  successOrder(){
    alert("Success Order has been placed!")
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }

  placeOrderPost(product:any){
    if(product.length != 0){
      const itemToDB = this.items;
      itemToDB.push(JSON.parse('{"username":"'+this.headerService.get_login()+'"}'));
      return this.http.post(
        'http://localhost:5000/order/',
        JSON.stringify(itemToDB)).subscribe({
          complete: () => {this.successOrder()},
          error: (e) => {console.log(e);}
        });
    }else{
      alert("Please add items to cart");
      return false;
    }
  }
}
