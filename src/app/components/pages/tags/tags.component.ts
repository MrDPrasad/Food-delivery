import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  tags?:Tag.Tag[];
  constructor(api:FoodService){
   api.getAllTags().subscribe(ServerTag=>{
    this.tags = ServerTag;
   });
  }

  ngOnInit(): void {
    
  }

}
