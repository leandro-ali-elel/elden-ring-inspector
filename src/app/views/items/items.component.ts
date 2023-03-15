import { Component } from '@angular/core';
import { CONSUMABLES } from 'src/app/db/consumables';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  protected consumables = CONSUMABLES;
  protected displayedColumns: string[] = ['icon', 'name', 'description'];
}
