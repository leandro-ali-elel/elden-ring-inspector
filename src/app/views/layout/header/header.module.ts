import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { TranslocoRootModule } from 'src/app/core/modules/transloco-root.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, TranslocoRootModule, RouterModule, SharedModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
