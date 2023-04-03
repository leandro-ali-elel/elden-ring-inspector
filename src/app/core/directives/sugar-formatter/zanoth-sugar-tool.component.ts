import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SanitizeModule } from 'src/app/shared/pipes/sanitization/sanitize.module';
import { TooltipModule } from '../tooltip/item-tooltip.module';

@Component({
  selector: 'zanoth-sugar-tool',
  templateUrl: './zanoth-sugar-tool.component.html',
  styleUrls: ['./zanoth-sugar-tool.component.scss'],
  imports: [CommonModule, TooltipModule, SanitizeModule],
  standalone: true,
})
export class ZanothSugarToolComponent {
  @Input() public itemId = '';
  @Input() public type: string | '#text' | 'zanothwikitooltip' = '#text';
  @Input() public text: string = '';
}
