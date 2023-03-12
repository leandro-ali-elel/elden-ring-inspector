import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScriptDetailComponent } from './script-detail.component';

const routes: Routes = [{ path: '', component: ScriptDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScriptDetailRoutingModule {}
