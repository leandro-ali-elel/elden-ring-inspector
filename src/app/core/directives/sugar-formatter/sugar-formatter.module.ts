import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SugarFormatterDirective } from './sugar-formatter.directive';

@NgModule({
  declarations: [SugarFormatterDirective],
  imports: [CommonModule],
  exports: [SugarFormatterDirective],
})
export class SugarFormatterModule {}
