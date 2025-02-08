import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user-service/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
  providers: [MessageService]
})
export class SingInComponent implements OnInit {

  formGroup!: FormGroup;
  password!: string;
  email!: string;

  constructor(private router: Router,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  login() {
    if (this.formGroup.valid) {
      this.email = this.formGroup.get('email')?.value;
      this.password = this.formGroup.get('password')?.value;

      this.userService.getAuthorization(this.password, this.email).subscribe(userId => {
        if (userId !== null) {
          localStorage.setItem('userId', userId.toString());
          this.router.navigate(['/user-profile']);
          this.showToastLoginSucces();

        } else {
          this.showToastLoginFailed();
        }
      });
    }
  }

  private showToastLoginSucces() {
    this.messageService.clear();
    this.messageService.add({ key: 'toastSucces', severity: 'success', summary: 'Success', detail: '' });
  }

  private showToastLoginFailed() {
    this.messageService.clear();
    this.messageService.add({ key: 'toastFailed', severity: 'warn', summary: 'Warning', detail: 'Incorrect login or password' });
  }
}
