import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShareModule} from './shared/share.module';
import {CoreModule} from './core.module';
import {LoggingService} from './logging.service';
import {ShortenPipe} from './pipe-custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    ShareModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  // providers: [LoggingService]
})
export class AppModule {
}
