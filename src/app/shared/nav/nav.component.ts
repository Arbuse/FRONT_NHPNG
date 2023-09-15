import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  items!: MenuItem[];

  ngOnInit(){
    this.items = [
      {
        label: 'Strona główna',
        routerLink: 'home'
      },

      { label: 'Zaloguj się',
        routerLink: 'sing-in'
      },

      { label: 'Zarejestruj się',
        routerLink: 'sing-up'
      },

    ];
  }

}
