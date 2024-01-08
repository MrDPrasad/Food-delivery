import { Component, OnInit } from '@angular/core';
import { cart } from '../../../shared/cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/Cartitem';
import { Food } from '../../../shared/food';
import { TitleComponent } from "../title/title.component";
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
    selector: 'app-cart-page',
    standalone: true,
    templateUrl: './cart-page.component.html',
    styleUrl: './cart-page.component.css',
    imports: [TitleComponent, NotFoundComponent]
})
export class CartPageComponent implements OnInit{
  cart!:cart
  constructor(private cartService:CartService){
    this.cartService.getcartobservable().subscribe((cart)=>{
      this.cart = cart;
    })
  }

  ngOnInit(): void {
    
  }
  removeFromCart(CartItem:CartItem){
    this.cartService.removefromcart(CartItem.food.id);
  }
  changeQuantity(CartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changequantity(CartItem.food.id, quantity)
  }


}
