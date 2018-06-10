import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {NewsActions, NewsActionTypes} from './news.actions';
import {HttpClient} from '@angular/common/http';
import {switchMap, tap} from 'rxjs/operators';

@Injectable()
export class NewsEffects {

  @Effect()
  effect$ = this.actions$
    .ofType(NewsActionTypes.LoadNews)
    .pipe(switchMap(() => this.httpClient.get('https://hacker-news.firebaseio.com/v0/topstories.json')),
      tap(result => console.log(result))
      );

  constructor(private actions$: Actions, private httpClient: HttpClient) {
  }
}
