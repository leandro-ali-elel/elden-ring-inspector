import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'ashes',
        loadChildren: () =>
          import('./views/ashes/ashes.module').then((m) => m.AshesModule),
      },
      {
        path: 'items',
        loadChildren: () =>
          import('./views/items/items.module').then((m) => m.ItemsModule),
      },
      {
        path: 'scripts',
        loadChildren: () =>
          import('./views/scripts/scripts.module').then((m) => m.ScriptsModule),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
