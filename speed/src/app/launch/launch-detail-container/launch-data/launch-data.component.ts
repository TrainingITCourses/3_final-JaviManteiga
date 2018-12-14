import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-launch-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launch-data.component.html',
  styleUrls: ['./launch-data.component.css']
})
export class LaunchDataComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
