import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';

import {LoggingService} from './logging.service';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private loggingService: LoggingService,
    @Inject(PLATFORM_ID) private platformId
  ) {
  }

  ngOnInit() {
    this.authService.autoSignIn();
  }
}
