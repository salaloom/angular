import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() title: string;
  @Input() theme: string;
  isCollapsed: boolean = false;

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }

  constructor() { }

  ngOnInit() {
  }

}
