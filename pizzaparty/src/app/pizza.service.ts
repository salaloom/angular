import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  /**
   * Permet de récupérer toutes les pizzas du site
   * 
   * La fonction nous "promet" de renvoyer un tableau de pizzas.
   */
  getPizzas(): Promise<Pizza[]> {
    // On effectue une requête HTTP en GET sur notre API
    // Angular renvoie par défaut un observable mais on le convertit en promesse avec toPromise()
    // Quand la promesse est reçu (then...), on renvoie les pizzas de l'API
    // as Pizza[] permet juste de triche sur le type renvoyé par la fonction
    return this.http.get('http://localhost:3000/pizza').toPromise().then(
      response => response as Pizza[]
    );
  }

  /**
   * Permet de récupérer une pizza en particulier du site
   * par son ID
   */
  getOnePizza(id: number): Promise<Pizza> {
    // On va chercher dans le tableau PIZZAS la pizza qui contient
    // l'id passé en paramètre
    // 2 == '2' renvoie true car la valeur est la même
    // 2 === '2' renvoie false car le type est différent
    // return PIZZAS.find(pizza => pizza.id == id);
    return this.http.get('http://localhost:3000/pizza/'+id).toPromise().then(
      response => response as Pizza
    );
  }

  /**
   * Permet de modifier une Pizza sur notre API
   */
  updatePizza(pizza: Pizza) {
    // La méthode PUT de HTTP est la même que POST
    // Elle permet de mettre à jour un élément
    // Le premier argument de put est l'URL de l'API
    // Le second argument est l'objet à mettre à jour
    console.log(pizza);
    return this.http.put('http://localhost:3000/pizza/'+pizza.id, pizza)
        .toPromise().then((response) => response);
  }

  /**
   * Permet de créer une nouvelle Pizza sur l'API.
   *
   * 1: Sur la page /pizzas, ajouter un lien pour créer une pizza.
   * 2: Ce lien va vers une route /pizza/create qui est liée au composant PizzaCreate
   * 3: Le composant PizzaCreate va contenir une propriété pizza. Par défaut, la pizza est à new Pizza(). Il contiendra également une méthode save()
   * 4: Le template du composant va contenir 3 champs (name, price, image). L'image est un champ texte (toto.jpg), on mettra l'image directement dans le dossier. Attention au ngModel.
   *    Au clic sur le bouton du formulaire (Ajouter), on appellera la méthode save() du composant.
   * 5: Dans la méthode save() du composant, on appellera la méthode createPizza() de notre service pour insérer la pizza dans l'API via le service http (avec la méthode post())
   * 6: On masquera le formulaire après la sauvegarde
   */
  createPizza(pizza: Pizza): Promise<Pizza> {
    return this.http.post('http://localhost:3000/pizza', pizza)
        .toPromise().then((response) => response as Pizza);
  }

  /**
   * Permet de supprimer une pizza
   */
  deletePizza(pizza: Pizza) {
    return this.http.delete('http://localhost:3000/pizza/'+pizza.id)
        .toPromise().then((response) => response);
  }
}
