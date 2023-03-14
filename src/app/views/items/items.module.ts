import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { TranslocoRootModule } from 'src/app/core/modules/transloco-root.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    TranslocoRootModule,
    SharedModule,
  ],
})
export class ItemsModule {}
