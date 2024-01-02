import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../shared/food';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { user } from '../../shared/constants/user';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartQuantity=0;
  user!:user

  constructor(cartService:CartService, private userService:UserService){
    cartService.getcartobservable().subscribe((newCart)=>{
      this.cartQuantity = newCart.totalcount;
    })
    userService.userObservable.subscribe((newUser)=>{
      this.user=newUser;
    })

  }


  ngOnInit(): void {

  }
  logout(){
    this.userService.logout();
  }
  get isAuth(){
    return this.user.token;
  }

}
