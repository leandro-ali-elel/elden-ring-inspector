import { NgModule } from '@angular/core';
import { MaterialModule } from '../core/modules/material.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { SharedPipesModule } from './pipes/shared-pipes.module';

@NgModule({
  imports: [],
  exports: [MaterialModule, SharedPipesModule, SharedComponentsModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
