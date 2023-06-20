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
        label: 'Home',
        routerLink: 'home'
      },

      { label: 'Sing in',
        routerLink: 'sing-in'
      },

      { label: 'Sing up',
        routerLink: 'sing-up'
      },

    ];
  }

}
