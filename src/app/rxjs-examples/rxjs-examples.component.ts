import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rxjs-examples',
  templateUrl: './rxjs-examples.component.html',
  styleUrls: ['./rxjs-examples.component.scss']
})
export class RxjsExamplesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    ////////////////////////////////////////////////
    // First examples

    // Normally we use event listeners
    // document.addEventListener('click', () => console.log('Clicked'));
    // Using rxjs, so we create an observable
    // fromEvent(document, 'click').subscribe(() => console.log('CLicked'));

    ////////////////////////////////////////////////
    // Purity (the ability to produce values using pure functions)

    // Normally we will mess up with the state.
    // let count = 0;
    // document.addEventListener('click', () => console.log(`Click ${++count} times` ));

    // Using rxjs we can isolate the state
    // fromEvent(document, 'click').pipe(
    //   scan((count) => count + 1, 0)
    // )
    //   .subscribe((count) => console.log(`Clicked ${count} times`));

    //////////////////////////////////////////
    // Flow (helps to control the flow of event through the observables)

    // Allow at least one click per second with plain js
    // let count = 0;
    // const rate = 1000;
    // let lastClick = Date.now() - rate;
    // document.addEventListener('click', () => {
    //   if (Date.now() - lastClick >= rate) {
    //     console.log(`Clicked ${++count} times`);
    //     lastClick = Date.now();
    //   }
    // });

    // With rxjs
    // fromEvent(document, 'click').pipe(
    //   throttleTime(1000),
    //   scan(count => count + 1, 0)
    // ).subscribe(count => console.log(`Clicked ${count} times`));

    ////////////////////////////////////////////
    // Values (helps to transform values through the observables)


    // Add the current mouse x position to count, with plan js
    // let count = 0;
    // const rate = 1000;
    // let lastClick = Date.now() - rate;
    //
    // document.addEventListener('click', (event) => {
    //   if (Date.now() - lastClick >= rate) {
    //     count += event.clientX;
    //     console.log(count);
    //     lastClick = Date.now();
    //   }
    // });

    // with rxjs
    // fromEvent(document, 'click').pipe(
    //   throttleTime(1000),
    //   map((event: MouseEvent) => event.clientX),
    //   scan((count, client) => count + client, 0)
    // ).subscribe(count => console.log(count));

    ////////////////////////////////////////////////////////
    // Higher-order Observables

    // const numberObservable = of(1, 2, 3, 4);
    // const interval$ = interval(1500);
    //
    // interval$.pipe(
    //   map(num => of(num)),
    //   concatAll(),
    //   throttleTime(1000),
    // ).subscribe(numObs => console.log(numObs));

  }
}
