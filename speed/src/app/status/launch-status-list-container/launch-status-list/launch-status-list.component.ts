import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-launch-status-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launch-status-list.component.html',
  styleUrls: ['./launch-status-list.component.css']
})
export class LaunchStatusListComponent implements OnInit {

  @Input() data: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
