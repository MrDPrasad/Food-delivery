import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  food: Food[] = []; // Updated property name

  constructor(private api: FoodService) {
    this.food = api.getAll();
  }
  ngOnInit(): void {
  }
}


