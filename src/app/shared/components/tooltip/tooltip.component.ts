import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { TOOLTIP_DATA } from 'src/app/core/providers/tooltip-data.provider';
import { Item, ITEMS } from 'src/app/db/item';

@Component({
  selector: 'zanothwiki-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  public data!: Item;
  public languageKey?: string;
  private injectedData = inject(TOOLTIP_DATA);

  protected ngOnInit(): void {
    this.data = ITEMS.find((item) => item.key === this.injectedData)!;
    this.languageKey = `items.${this.data.type}.${this.data.key}`;
  }
}
