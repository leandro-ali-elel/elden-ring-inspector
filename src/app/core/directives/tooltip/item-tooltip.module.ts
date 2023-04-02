import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemTooltipDirective } from './item-tooltip.directive';

@NgModule({
  declarations: [ItemTooltipDirective],
  imports: [CommonModule, SharedModule],
  exports: [ItemTooltipDirective],
})
export class TooltipModule {}
