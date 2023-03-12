import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptDetailRoutingModule } from './script-detail-routing.module';
import { ScriptDetailComponent } from './script-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ScriptDetailComponent],
  imports: [CommonModule, SharedModule, ScriptDetailRoutingModule],
})
export class ScriptDetailModule {}
