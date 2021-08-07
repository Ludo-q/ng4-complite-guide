import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShareModule} from './shared/share.module';
import {CoreModule} from './core.module';
import {ShortenPipe} from './pipe-custom.pipe';
import {AuthComponent} from './auth/auth.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShortenPipe,
    AuthComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    HttpClientModule,
    AppRoutingModule,
    ShareModule,
    CoreModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
