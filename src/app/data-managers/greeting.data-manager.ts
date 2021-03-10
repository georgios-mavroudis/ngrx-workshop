import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as sayHiActions from '../store/actions/greeting.actions';
import { Greeting, IGreetingState } from '../store/reducers/greeting.reducer';
import { getAllGreetingsSelector, getSpecificGreetingTimeSelector, selectGreetingState } from '../store/selectors/greeting.selectors';

@Injectable()
export class GreetingDataManager {
  public greetingStore: Observable<IGreetingState>;
  constructor(
    private store: Store<any>,
  ) {
    this.greetingStore = this.store.pipe(select(selectGreetingState));
  }

  public sendGreeting(word: Greeting) {
    this.store.dispatch(sayHiActions.sendGreeting({ greeting: word }));
  }

  public getGreeting$(id: number) {
    return this.store.pipe(select(getSpecificGreetingTimeSelector(id)));
  }

  public getAllGreetings$() {
    return this.store.pipe(select(getAllGreetingsSelector));
  }
}
