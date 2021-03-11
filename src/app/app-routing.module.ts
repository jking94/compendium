import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/home-page/home-page.module').then(m => m.HomePageModule)
    
  },
  {
    path: 'spells',
    loadChildren: () => import('./views/spells-page/spells-page.module').then(m => m.SpellsPageModule)
  },
  {
    path: 'spell-detail',
    loadChildren: () => import('./views/spell-detail-page/spell-detail-page.module').then(m => m.SpellDetailPageModule)
  },
  {
    path: 'bestiary',
    loadChildren: () => import('./views/bestiary-page/bestiary-page.module').then(m => m.BestiaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
