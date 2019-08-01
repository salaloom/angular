import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../pizza.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[];
  selectedPizza: Pizza;

  // On injecte le service PizzaService dans le composant
  // pour pouvoir l'utiliser avec this.pizzaService
  constructor(
    private pizzaService: PizzaService,
    private modalService: NgbModal
  ) { }

  // Equivalent du document.ready
  // Quand le composant est prêt dans le DOM, on récupére
  // les pizzas
  ngOnInit() {
    this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }

  onSelect(pizza: Pizza): void {
    console.log(pizza);
    // On modifie la propriété pizza de l'instance
    // de AppComponent
    this.selectedPizza = pizza;
  }

  // On clique pour ouvrir la modal
  // et on choisit la bonne pizza à supprimer
  open(content, pizza: Pizza) {
    this.modalService.open(content).result.then(result => {
      // Ce code s'exécute à la fermeture de la modal
      if (result === 'delete') {
        console.log('On supprime');
        this.pizzaService.deletePizza(pizza)
        // On mets à jour la liste après la suppression
        .then(() => this.pizzaService.getPizzas())
        .then(pizzas => this.pizzas = pizzas);
      }
    });
  }
}
