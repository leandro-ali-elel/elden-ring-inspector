import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { TranslocoRootModule } from 'src/app/core/modules/transloco-root.module';

@NgModule({
  declarations: [ItemsComponent],
  imports: [CommonModule, ItemsRoutingModule, TranslocoRootModule],
})
export class ItemsModule {}
