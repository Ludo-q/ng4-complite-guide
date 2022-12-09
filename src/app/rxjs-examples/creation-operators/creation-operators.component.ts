import {Component, OnInit} from '@angular/core';
import {concatMap, generate, interval, Observable, of} from 'rxjs';
import {RxjsExamplesService} from '../rxjs-examples.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.scss']
})
export class CreationOperatorsComponent implements OnInit {

  interval$ = interval(1000);
  // numbers$: Observable<number[]> = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  randomNumber: number;
  titles: string[];

  constructor(private rxjsExampleService: RxjsExamplesService) {
  }

  ngOnInit(): void {

    generate(1, x => x < 10, x => x + 2)
      .pipe(tap(x => this.oddNumbers.push(x)))
      .subscribe();

    generate(0, x => x < 10, x => x + 2)
      .pipe(tap(x => this.evenNumbers.push(x)))
      .subscribe();


    // this.rxjsExampleService.searchByTitleBooksOpenLibrary('the lord of the ring')
    //   .pipe(
    //     concatMap(res => res)
    //   ).subscribe(titles => this.titles = titles);

    // this.randomNumber = Math.random();
    //
    // const clickOrInterval = defer(() => {
    //   return this.randomNumber > 0.5 ? fromEvent(document, 'click') : interval(1000);
    // });
    //
    // clickOrInterval.subscribe(x => console.dir(`x is: ${x}`));
  }
}
