import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';

import {LoggingService} from './logging.service';
import {AuthService} from './auth/auth.service';
import {concat, Observable, of} from 'rxjs';
import {filter, find, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // obsA = of(1, 2, 3, 5, 7);
  //
  // obsB = of('a', 'b', 'c');

  // arrA = [1, 2, 3, 5, 7];
  // arrB = ['a', 'b', 'c'];


  constructor(
    private authService: AuthService,
    private loggingService: LoggingService,
    @Inject(PLATFORM_ID) private platformId
  ) {

    // console.log('Concat');
    // const obs = concat(this.obsA, this.obsB);
    // const arr = this.arrA.concat(this.arrB);

    // console.log('Filter');
    // const obs = this.obsA.pipe(filter(res => res > 3));
    // const arr = this.arrA.filter(item => item > 3);

    // console.log('Find');
    //
    // const obs = this.obsB.pipe(find(res => res === 'b'));
    // const result = this.arrB.find(item => item === 'b');

    // console.log('For each');
    // const obs = this.obsA.pipe(tap(res => console.log(res)));
    //
    // console.log('Observable');
    // // obs.subscribe(res => console.log(res));
    // obs.subscribe();
    //
    // console.log('Array');
    // // console.log(result);
    // this.arrA.forEach(item => console.log(item));

    const iterator = this.values();

    console.log('WE PULL ITEMS FROM ITERATOR');
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    const observable = new Observable(subscriber => {
      // Pushing values
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
    });

    console.log('OBSERVABLE PUSH VALUES TO THE HANDLER');
    observable.subscribe(val => console.log(val));

  }


  ngOnInit() {
    this.authService.autoSignIn();
  }

  * values() {
    // Pushing values
    yield 1;
    yield 2;
    yield 3;
  }


}
