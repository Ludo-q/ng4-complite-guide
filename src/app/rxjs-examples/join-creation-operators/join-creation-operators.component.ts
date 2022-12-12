import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-join-creation-operators',
  templateUrl: './join-creation-operators.component.html',
  styleUrls: ['./join-creation-operators.component.scss']
})
export class JoinCreationOperatorsComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {

    // const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
    // const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting from now
    //
    // const combinedTimers = combineLatest([firstTimer, secondTimer]);
    // combinedTimers.subscribe(value => console.log(value));
  }

}
