import { Component } from '@angular/core';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {
  loginModalVisible = false;
  loginEmail: string = '';
  loginPassword: string = '';

  showLoginModal(): void {
    this.loginModalVisible = true;
  }

  closeLoginModal(): void {
    this.loginModalVisible = false;
  }

  login(): void {
    // Implementacja logiki logowania
    // Przykład:
    if (this.loginEmail === 'example@example.com' && this.loginPassword === 'password') {
      console.log('Login successful');
      // Przekierowanie do innej strony po zalogowaniu
      // this.router.navigate(['/user-profile']);
    } else {
      console.log('Invalid credentials');
    }
  }
}
