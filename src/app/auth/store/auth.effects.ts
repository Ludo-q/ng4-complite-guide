import {Actions, ofType, Effect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import * as AuthActions from './auth.actions';
import {AuthResponseData} from '../auth.service';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwuR8KmMX_VMdJ3LcfBWMO7qvzsX5bRRs',
        {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true
        }
      ).pipe(
        catchError(error => {
          // ...
          return of();
        }),
        map(resData => {
          // ...
          return of();
        }));
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {
  }
}
