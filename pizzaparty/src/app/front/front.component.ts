import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    // Quand la requête AJAX est terminée, on récupère les pizzas
    this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }

}
