    
import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  pizzas: Pizza[];
  selectedPizza: Pizza;

  // On injecte le service PizzaService dans le composant
  // pour pouvoir l'utiliser avec this.pizzaService
  constructor(private pizzaService: PizzaService) { }

  // Equivalent du document.ready
  // Quand le composant est prêt dans le DOM, on récupére
  // les pizzas
  ngOnInit() {
    this.pizzas = this.pizzaService.getPizzas();
  }

  onSelect(pizza: Pizza): void {
    console.log(pizza);
    // On modifie la propriété pizza de l'instance
    // de AppComponent
    this.selectedPizza = pizza;
  }
}