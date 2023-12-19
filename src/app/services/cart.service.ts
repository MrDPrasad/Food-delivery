import { Injectable } from '@angular/core';
import { cart } from '../shared/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:cart = new cart();
  private cartsubject:BehaviorSubject<cart> = new BehaviorSubject(this.cart)
  constructor() { }
  //add to cart method
  addtocart(food:Food):void{
    let CartItem= this.cart.items.find(item => item.food.id ===food.id)
    if(CartItem)
    return;

    this.cart.items.push(new CartItem(food))
    this.setcartlocalstorage();
  }
  //remove cart item
  removefromcart(foodid:string):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodid)
  }

  //change quantity
  changequantity(foodid:string, quantity:number){
    let CartItem = this.cart.items.find(item => item.food.id ===foodid);
    if(!CartItem)
    return;

    CartItem.quantity = quantity;
    CartItem.price = quantity *CartItem.food.price;
  }
  //clear cart
  clearcart(){
  this.cart = new cart();
  }
  //get cart observable mean check observable data
  getcartobservable():Observable<cart>{
    return this.cartsubject.asObservable();
  }
  //now set localstorage data
  private setcartlocalstorage():void{
    this.cart.totalprice = this.cart.items.reduce((prevsum, currentitem) =>
    prevsum + currentitem.price, 0);
    this.cart.totalcount = this.cart.items.reduce((prevsum, currentitem) =>
    prevsum + currentitem.quantity,0)

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart', cartJson);
    this.cartsubject.next(this.cart)
  }
  //when ever set local storege data then also get data
  private getcartfromlocalstorage():cart{
    const cartJson = localStorage.getItem('cart');
    return cartJson?JSON.parse(cartJson):new cart();
  }

}
