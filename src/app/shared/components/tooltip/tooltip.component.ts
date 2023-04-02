import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TOOLTIP_DATA } from 'src/app/core/providers/tooltip-data.provider';
import { Item, ITEMS } from 'src/app/db/item';

@Component({
  selector: 'zanothwiki-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  public data?: Item;
  private injectedData = inject(TOOLTIP_DATA);

  protected ngOnInit(): void {
    this.data = ITEMS.find((item) => item.key === this.injectedData);
  }
}
