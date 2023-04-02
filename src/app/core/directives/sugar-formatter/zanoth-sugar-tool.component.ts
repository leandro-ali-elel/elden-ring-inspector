import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipModule } from '../tooltip/item-tooltip.module';
import { SugarFormatterModule } from './sugar-formatter.module';

@Component({
  selector: 'zanoth-sugar-tool',
  templateUrl: './zanoth-sugar-tool.component.html',
  imports: [CommonModule, TooltipModule],
  standalone: true,
})
export class ZanothSugarToolComponent {
  @Input() public itemId = '';
  @Input() public text = '';
}
