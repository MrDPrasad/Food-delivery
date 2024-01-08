import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Server } from 'http';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  food: Food[] = []; // Updated property name
foods: any;

  constructor(private api: FoodService, activateRoute:ActivatedRoute) {
    let foodObservable:Observable<Food[]>
    activateRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.foods = this.api.getAllFoodBySearchTerm(params.searchTerm)
      else if(params.tag)
      this.foods = this.api.getAllFoodByTag(params.tag)
    else
    foodObservable = api.getAll() //get all data return
  foodObservable.subscribe((ServerFoods)=>{
    this.foods = ServerFoods;
  
  })
    })
  

