import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as sayHiActions from '../store/actions/greeting.actions';
import { Greeting } from '../store/reducers/greeting.reducer';

@Injectable()
export class GreetingDataManager {

  constructor(
    private store: Store<any>,
  ) {

  }

  public sendGreeting(word: Greeting) {

  }

  public getGreeting$(id: number) {

  }

  public getAllGreetings$() {

  }
}
