import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, throwError} from 'rxjs';
import {UserModel} from './user.model';
import {Router} from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  user = new BehaviorSubject<UserModel>(null);
  private tokenExpirationTimer: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  private static handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!!!';

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }

    switch (errorResponse.error.error.message) {
      // for sign up
      case 'EMAIL_EXISTS':
        errorMessage = 'The email address is already in use by another account.';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
        break;
      // for sign in
      case 'EMAIL_NOT_FOUND':
        errorMessage = ' There is no user record corresponding to this identifier. The user may have been deleted.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The password is invalid or the user does not have a password.';
        break;
      case 'USER_DISABLED':
        errorMessage = 'The user account has been disabled by an administrator.';
        break;
    }

    return throwError(errorMessage);
  }

  private handleAuthentication(email: string, localId: string, idToken: string, expiresIn: number) {
    const expirationTokenDate = new Date(
      new Date().getTime() + (expiresIn * 1000)
    );

    const newUser = new UserModel(
      email, localId, idToken, expirationTokenDate
    );

    this.user.next(newUser);
    this.autoLogout(expiresIn);
    localStorage.setItem('userData', JSON.stringify(newUser));
  }

  signUp(email: string, password: string) {
    return this.httpClient.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(AuthService.handleError),
      tap(respData => {
        this.handleAuthentication(
          respData.email,
          respData.localId,
          respData.idToken,
          +respData.expiresIn
        );
      })
    );
  }

  autoSignIn() {
    const userData: {
      email: string,
      id: string,
      // tslint:disable-next-line:variable-name
      _token: string,
      // tslint:disable-next-line:variable-name
      _tokenExpirationDate: Date
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new UserModel(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  signIn(email: string, password: string) {
    return this.httpClient.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(AuthService.handleError),
      tap(respData => {
        this.handleAuthentication(
          respData.email,
          respData.localId,
          respData.idToken,
          +respData.expiresIn
        );
      })
    );
  }

  autoLogout(expirationTime: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationTime);
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');

    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }

    this.tokenExpirationTimer = null;
  }
}
