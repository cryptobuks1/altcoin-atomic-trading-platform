import {ActionReducer, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';

import {storeFreeze} from 'ngrx-store-freeze';

import {AppState} from './app.state';

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    const nextState = reducer(state, action);
    if (environment.reducerLogger) {
      console.group(action.type);
      console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
      console.log(`%c previous state`, `color: #9E9E9E; font-weight: bold`, state);
      console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
      console.groupEnd();
    }
    return nextState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
// storeFreeze
