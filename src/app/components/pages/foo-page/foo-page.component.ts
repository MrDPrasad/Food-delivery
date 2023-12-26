import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';



@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [],
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FooPageComponent implements OnInit {
  food!:Food;
  constructor(activatedRoute:ActivatedRoute, private api:FoodService, private cartService:CartService, private router: Router){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = api.getFoodById(params.id);

    })
  }
  ngOnInit(): void {
    
  }
  //Add to cart Button Code
  addToCart(){
    this.cartService.addtocart(this.food);
    this.router.navigatebyurl('/cart-page')
  }

}
