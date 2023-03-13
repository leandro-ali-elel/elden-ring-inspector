import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './components/shared-components.module';
import { SharedPipesModule } from './pipes/shared-pipes.module';

@NgModule({
  imports: [],
  exports: [SharedPipesModule, SharedComponentsModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
