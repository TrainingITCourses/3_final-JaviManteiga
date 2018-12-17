import { routerReducer, RouterReducerState} from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromStatus from './status/status.reducer';
import * as fromLaunch from './launch/launch.reducer';

export interface GlobalState {
  router: RouterReducerState;
  status: fromStatus.StatusState;
  launch: fromLaunch.LaunchesState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  router: routerReducer,
  status: fromStatus.reducer,
  launch: fromLaunch.reducer,
};


export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];
