import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptDetailRoutingModule } from './script-detail-routing.module';
import { ScriptDetailComponent } from './script-detail.component';


@NgModule({
  declarations: [
    ScriptDetailComponent
  ],
  imports: [
    CommonModule,
    ScriptDetailRoutingModule
  ]
})
export class ScriptDetailModule { }
