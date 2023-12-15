import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../shared/food';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  foods:Food[] =[];

  constructor(private api:FoodService){
    this.foods =api.getAll() //getAll datareturn
  }


  ngOnInit(){}

}
