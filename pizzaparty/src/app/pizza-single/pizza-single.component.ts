import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.scss']
})
export class PizzaSingleComponent implements OnInit {
  id: number;
  pizza: Pizza;

  // On peut injecter plusieurs services dans
  // le constructeur
  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) { }

  ngOnInit() {
    // Equivalent d'un $_GET['id'] en PHP
    this.id = this.route.snapshot.params.id;
    // On récupére la pizza de la route actuelle
    this.pizzaService.getOnePizza(this.id).then(pizza => this.pizza = pizza);
  }

}
