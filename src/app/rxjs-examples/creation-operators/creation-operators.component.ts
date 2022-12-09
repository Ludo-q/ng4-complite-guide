import {Component, OnInit} from '@angular/core';
import {concatMap, interval, Observable, of} from 'rxjs';
import {RxjsExamplesService} from '../rxjs-examples.service';

@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.scss']
})
export class CreationOperatorsComponent implements OnInit {

  interval$ = interval(1000);
  numbers$: Observable<number[]> = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  randomNumber: number;
  titles: string[];

  constructor(private rxjsExampleService: RxjsExamplesService) {
  }

  ngOnInit(): void {
    this.rxjsExampleService.searchByTitleBooksOpenLibrary('the lord of the ring')
      .pipe(
        concatMap(res => res)
      ).subscribe(titles => this.titles = titles);

    // this.randomNumber = Math.random();
    //
    // const clickOrInterval = defer(() => {
    //   return this.randomNumber > 0.5 ? fromEvent(document, 'click') : interval(1000);
    // });
    //
    // clickOrInterval.subscribe(x => console.dir(`x is: ${x}`));
  }
}
