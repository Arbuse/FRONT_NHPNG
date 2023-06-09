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
      {
        label: 'About Us',
        items: [
          { label: 'Contact Us', routerLink: 'about/contact' },
          { label: 'Our Story', routerLink: 'about/our-story' },
        ],
      },
      {
        label: 'Login',
        items: [
          { label: 'Sing in', routerLink: 'login/sing-in' },
          { label: 'Sing up', routerLink: 'login/sing-up' },
        ],
      },
    ];
  }

}
