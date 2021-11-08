import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule,CarouselModule]
})
export class HomeModule {}
