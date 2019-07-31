import { Component, OnInit,Input } from '@angular/core';
import { menu } from '../models/menu.model';


@Component({
  selector: 'app-menu',
 
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})




export class MenuComponent implements OnInit {



  @Input() title : string; 
  @Input() theme  :string;
  @Input() color  :string;


  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }



  constructor() { }

  ngOnInit() {
  }

}
