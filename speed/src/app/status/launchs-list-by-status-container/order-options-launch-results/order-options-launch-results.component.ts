import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-options-launch-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-options-launch-results.component.html',
  styleUrls: ['./order-options-launch-results.component.css']
})
export class OrderOptionsLaunchResultsComponent implements OnInit {

  @Output() changeOrder: EventEmitter<number>;

  constructor() {
    this.changeOrder = new EventEmitter();
  }

  ngOnInit() {
  }

  public clickOrder(order: number) {
    this.changeOrder.emit(order);
  }
}
