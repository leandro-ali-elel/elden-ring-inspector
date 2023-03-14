import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AshesRoutingModule } from './ashes-routing.module';
import { AshesComponent } from './ashes.component';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AshesComponent],
  imports: [CommonModule, AshesRoutingModule, TranslocoModule, SharedModule],
})
export class AshesModule {}
