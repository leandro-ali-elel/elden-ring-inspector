import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SugarFormatterModule } from 'src/app/core/directives/sugar-formatter/sugar-formatter.module';
import { TooltipModule } from 'src/app/core/directives/tooltip/item-tooltip.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScriptDetailRoutingModule } from './script-detail-routing.module';
import { ScriptDetailComponent } from './script-detail.component';

@NgModule({
  declarations: [ScriptDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    ScriptDetailRoutingModule,
    TooltipModule,
    SugarFormatterModule,
  ],
})
export class ScriptDetailModule {}
