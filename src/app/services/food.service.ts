import { Injectable } from '@angular/core';
import { sample_foods } from '../../data';
import { Food } from '../shared/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods
  }
}