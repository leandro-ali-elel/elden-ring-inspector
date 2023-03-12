import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScriptsComponent } from './scripts.component';

const routes: Routes = [
  {
    path: '',
    component: ScriptsComponent,
  },
  {
    path: ':scriptId',
    loadChildren: () =>
      import('./script-detail/script-detail.module').then(
        (m) => m.ScriptDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScriptsRoutingModule {}
