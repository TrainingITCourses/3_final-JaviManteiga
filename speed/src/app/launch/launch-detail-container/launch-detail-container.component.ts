import { Component, OnInit } from '@angular/core';
import { GlobalState } from 'src/app/reducers';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadLaunches } from 'src/app/reducers/launch/launch.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-detail-container',
  templateUrl: './launch-detail-container.component.html',
  styleUrls: ['./launch-detail-container.component.css']
})
export class LaunchDetailContainerComponent implements OnInit {

  public launch: any;

  public id: string;

  constructor(private global: Store<GlobalState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.id = params.get('id'));
    this.loadData();
    this.global.select('launch').pipe(map(x => x.launches.filter(l => l.id == +this.id))).subscribe(x => this.launch = x[0]);
  }

  // Cargamos los datos porque puede que no hayan sido cargados anteriormente
  // PWA evitara multiples llamadas
  private loadData() {
    this.global.dispatch(new LoadLaunches());
  }
}
