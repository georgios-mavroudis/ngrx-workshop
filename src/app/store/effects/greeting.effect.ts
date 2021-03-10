import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as greetingActions from '../actions/greeting.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

@Injectable()
export class GreetingEffects {
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
  ) {}

  public sendGreeting$ = createEffect(() => this.actions$
    .pipe(
      ofType(greetingActions.sendGreeting),
      mergeMap(({ greeting }) => {
        return this.httpClient.get('../../../assets/data.json').pipe(
          map((data) => {
            console.log('effect', data)
            return greetingActions.sendGreetingCompleted({ greeting });
          }),
          catchError(() => of(greetingActions.sendGreetingFailed())),
        );
      }),
    ),
  );
}
