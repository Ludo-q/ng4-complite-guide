import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

import {AuthService, AuthResponseData} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {

    if (authForm.invalid) {
      return;
    }

    let authObs: Observable<AuthResponseData>;

    const {email, password} = authForm.value;

    if (this.isLoginMode) {
      authObs = this.authService.signIn(email, password);
    } else {
      this.isLoading = true;
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      response => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    authForm.reset();
  }
}
