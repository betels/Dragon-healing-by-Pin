import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
// For MDB Angular Free

@Component({
  selector: 'anms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  releaseButler = require('../../../../assets/release-butler.png');
  constructor() { }

  ngOnInit(): void {
  }

}
