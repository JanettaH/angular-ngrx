import { Action } from '@ngrx/store';

export enum NewsActionTypes {
  LoadNews = '[News] Load News',
  AddNews = '[News] Add News',
  SetNews = '[News] Set News'
}

export class News implements Action {
  readonly type = NewsActionTypes.LoadNews;
}


export class AddNews implements Action {
  readonly type = NewsActionTypes.AddNews;
}

export type NewsActions = News | AddNews;
