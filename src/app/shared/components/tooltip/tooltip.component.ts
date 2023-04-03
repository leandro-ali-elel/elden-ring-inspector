import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { TOOLTIP_DATA } from 'src/app/core/providers/tooltip-data.provider';
import { DIALOGUES } from 'src/app/db/dialogues';
import { Item, ITEMS } from 'src/app/db/item';

@Component({
  selector: 'zanothwiki-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  public data!: Item | any;
  public mode: 'item' | 'dialogue' = 'item';
  public languageKey?: string;
  public dialogueKey?: string;
  private injectedData = inject(TOOLTIP_DATA);

  protected ngOnInit(): void {
    const attributes = (this.injectedData as any)['attributes'];
    const itemId = attributes.getNamedItem('item-id')?.value!;

    if (itemId) {
      this.data = ITEMS.find((item) => item.key === itemId)!;
      this.languageKey = `items.${this.data.type}.${this.data.key}`;
      return;
    }

    const characterId = attributes.getNamedItem('character-id')?.value!;
    const dialogueId = attributes.getNamedItem('dialogue-id')?.value!;

    if (characterId && dialogueId) {
      this.mode = 'dialogue';
      this.languageKey = `characters.${characterId}.name`;
      this.dialogueKey = `characters.${characterId}.dialogue.${dialogueId}`;
      return;
    }
  }
}
