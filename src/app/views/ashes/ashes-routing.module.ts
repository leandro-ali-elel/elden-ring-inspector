import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AshesComponent } from './ashes.component';

const routes: Routes = [
  {
    path: '',
    component: AshesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AshesRoutingModule {}
