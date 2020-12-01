import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable({providedIn: 'root'})
export class AuthService {

  private tokenExpirationTimer: any;

  constructor(
    private store: Store<fromApp.AppState>
  ) {
  }

  setLogoutTimer(expirationDuration: number) {
    expirationDuration = expirationDuration * 1000;
    console.log('expirationDuration: ' + expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);

    this.tokenExpirationTimer = null;
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
}
