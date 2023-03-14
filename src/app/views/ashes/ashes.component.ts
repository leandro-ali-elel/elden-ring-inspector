import { Component } from '@angular/core';
import { ASHES } from 'src/app/db/ashes';

@Component({
  selector: 'zanothwiki-ashes',
  templateUrl: './ashes.component.html',
  styleUrls: ['./ashes.component.scss'],
})
export class AshesComponent {
  protected ashes = ASHES;
}
