import { Component, OnInit } from '@angular/core';
import { UpdateAvailableEvent, SwUpdate } from '@angular/service-worker';
import { GlobalState } from './reducers';
import { Store } from '@ngrx/store';
import { LoadLaunches } from './reducers/launch/launch.actions';
import { LoadStatuses } from './reducers/status/status.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'speed';
  public developerVersion = '3.0';

  constructor(private global: Store<GlobalState>, swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg = 'Cargar nueva versión de la app?';
          if (confirm(msg)) { window.location.reload(); }
        }
      );
    }
  }

  ngOnInit(): void {
    this.global.dispatch(new LoadLaunches());
    this.global.dispatch(new LoadStatuses());
  }
}
