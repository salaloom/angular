import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { MenuComponent } from './menu/menu.component';
import { PizzasComponent } from './pizzas/pizzas.component';


import { PizzaService } from '../services/pizza.service';


@NgModule({


  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaComponent,
    MenuComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'pizzas', component:PizzasComponent}
    ])
  ],
 
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }