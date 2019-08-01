import { Component } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { PizzaService } from './pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizzaparty';
}
