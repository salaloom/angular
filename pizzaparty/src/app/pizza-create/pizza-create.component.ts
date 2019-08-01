import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../pizza.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pizza-create',
  templateUrl: './pizza-create.component.html',
  styleUrls: ['./pizza-create.component.scss']
})
export class PizzaCreateComponent implements OnInit {
  @Input() pizza: Pizza = new Pizza();

  constructor(
    private pizzaService: PizzaService,
    private location: Location
  ) { }

  /**
   * S'exécute au chargement de la page
   */
  ngOnInit() {
  }

  /**
   * Au clic, on crée la pizza
   */
  save() {
    console.log(this.pizza);
    // On redirige l'utilisateur quand la requête AJAX
    // est terminée
    this.pizzaService.createPizza(this.pizza).then(
      pizza => {
        this.pizza = pizza;
        this.location.back();
      }
    )
  }

}
