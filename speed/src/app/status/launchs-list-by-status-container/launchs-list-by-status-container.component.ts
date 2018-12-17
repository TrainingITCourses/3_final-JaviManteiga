import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map, toArray } from 'rxjs/operators';
import { GlobalState } from 'src/app/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-launchs-list-by-status-container',
  templateUrl: './launchs-list-by-status-container.component.html',
  styleUrls: ['./launchs-list-by-status-container.component.css']
})
export class LaunchsListByStatusContainerComponent implements OnInit {

  public launches$: Observable<any[]>;

  public status: any;

  public id: string;

  constructor(private global: Store<GlobalState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.id = params.get('id'));
    this.global.select(x => x.status).pipe(map(x => x.statuses.filter(l => l.id == +this.id)))
          .subscribe(x => this.status = x[0]);
    this.launches$ = this.global.select('launch').pipe(map(x => x.launches.filter(l => l.status == +this.id)));
  }

  public changeLaunchsOrder(order: number) {
    const sortFn = function (a, b) {
      if (order == 1) {
        if (new Date(a.net) < new Date(b.net)) {
          return -1;
        } else if (new Date(a.isostart) > new Date(b.net)) {
          return 1;
        } else {
          return 0;
        }
      } else if (order == 0) {
        if (new Date(a.net) > new Date(b.net)) {
          return -1;
        } else if (new Date(a.net) < new Date(b.net)) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    };

    this.global.select('launch').pipe(map(x => x.launches.filter(l => l.status == +this.id), toArray()))
      .subscribe(n => this.launches$ = of(n.sort(sortFn)));
  }


}
