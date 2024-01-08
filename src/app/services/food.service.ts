import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from '../../data';
import { Food } from '../shared/food';
import { HttpClient } from '@angular/common/http';
import { Observable, filter } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/url';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Food[]>{
    return this.httpClient.get<Food[]>(FOODS_URL)
  }
  //search Food
  getAllFoodBySearchTerm(searchTerm:string){
    return this.httpClient.get<Food>(FOODS_URL +searchTerm)
  }
  //get all tag
  getAllTags():Observable<Tag.Tag[]>{
    return this.httpClient.get<Tag.Tag[]>(FOODS_TAGS_URL);
  }
  //get food by tags
  getAllFoodByTag(tag:string):Observable<Food>[]{
    return tag === "All"? this.getAll():this.httpClient.get<Food[]>(FOOD_BY_TAG_URL +tag)
  }
  //get food by id
  getFoodById(foodId:string):Observable<Food>{
    return this.httpClient.get<Food>(FOODS_BY_ID_URL +foodId)
  }
}