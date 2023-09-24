import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user-service/user.service";
import {UserRegister} from "../user-service/model/user-register";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  isFormValid = false;
  formGroup!: FormGroup;
  user!: UserRegister;


  constructor(private router: Router,
              private userService: UserService,
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z]).{5,}$')])
    });

    this.formGroup.valueChanges.subscribe(() => {
      this.isFormValid = this.formGroup.valid;
    });
  }

  validateUsername(control: FormControl): {[key: string]: any} | null {
    const value = control.value;
    if (value && (value.length < 5 || !/@|\./.test(value))) {
      return { invalidUsername: true };
    }
    return null;
  }

  register() {
    if (this.formGroup.valid) {
      this.user = {
        username: this.formGroup.get('username')?.value,
        email: this.formGroup.get('email')?.value,
        password: this.formGroup.get('password')?.value
      };

      this.userService.createUser(this.user).subscribe(
        () => {
          this.navigateToSignIn();
        },
        error => {
        }
      );
    }
  }

  private navigateToSignIn() {
    this.router.navigate(['/sing-in']);
  }

}
