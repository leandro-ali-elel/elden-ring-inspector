import { Component } from '@angular/core';
import { ITEMS } from 'src/app/db/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  protected consumables = ITEMS.filter((item) => item.type === 'consumables');
  protected displayedColumns: string[] = ['icon', 'name', 'description'];
}
