import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipTrackByNgforRoutingModule } from './tip-track-by-ngfor-routing.module';
import { TipTrackByComponent } from './tip-track-by/tip-track-by.component';

@NgModule({
  declarations: [TipTrackByComponent],
  imports: [
    CommonModule,
    TipTrackByNgforRoutingModule
  ]
})
export class TipTrackByNgforModule { }
