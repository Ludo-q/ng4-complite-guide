import {Component, OnInit} from '@angular/core';
import {interval, Observable, of} from 'rxjs';

@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.scss']
})
export class CreationOperatorsComponent implements OnInit {

  interval$ = interval(1000);
  numbers$: Observable<number[]> = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  constructor() {
  }

  ngOnInit(): void {
  }

}
