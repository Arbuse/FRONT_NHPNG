import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {


  constructor(private router: Router) {}

  login() {
    // Tu umieść kod logiki autoryzacji, np. wywołaj API, sprawdź dane logowania itp.

    const authenticationSuccessful = true; // Przykładowa zmienna określająca, czy autoryzacja się powiodła

    if (authenticationSuccessful) {
      this.router.navigate(['/user-profile']); // Przekierowanie do UserProfileComponent
    }
  }
}
