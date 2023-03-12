import { Component } from '@angular/core';
import { ASHES } from 'src/app/db/ashes';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  protected ashes = ASHES;
}
