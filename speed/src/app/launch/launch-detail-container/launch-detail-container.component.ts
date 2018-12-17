import { Component, OnInit } from '@angular/core';
import { GlobalState } from 'src/app/reducers';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadLaunches } from 'src/app/reducers/launch/launch.actions';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-launch-detail-container',
  templateUrl: './launch-detail-container.component.html',
  styleUrls: ['./launch-detail-container.component.css']
})
export class LaunchDetailContainerComponent implements OnInit {

  public launch: any;

  public id: string;

  constructor(private global: Store<GlobalState>, private route: ActivatedRoute,
     private _location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.id = params.get('id'));
    this.loadData();
    this.global.select('launch').pipe(map(x => x.launches.filter(l => l.id == +this.id))).subscribe(x => this.launch = x[0]);
  }

  public clickBackLink() {
    this._location.back();
  }

  private loadData() {
    this.global.dispatch(new LoadLaunches());
  }
}
