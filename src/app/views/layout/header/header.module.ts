import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoRootModule } from 'src/app/core/modules/transloco-root.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, TranslocoRootModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
