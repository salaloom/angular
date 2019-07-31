import { Injectable } from '@angular/core';
import { Pizza } from '../app/models/pizza.model';


const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12 , image: 'queen.jpg' },
  { id: 2, name: '4 fromages', price: 13 , image: 'fromage.jpg' },
  { id: 3, name: 'Orientale', price: 11 , image: 'orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9 , image: 'cannibale.jpg' }
];


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

getPizzas(): Pizza[]{
    return PIZZAS;

}
}
