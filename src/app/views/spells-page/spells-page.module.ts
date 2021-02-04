import { RouterModule } from '@angular/router';
import { SpellsPageComponent } from './spells-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { spellsPageRoutes } from './spells-page.routing';



@NgModule({
  declarations: [
    SpellsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(spellsPageRoutes)
  ]
})
export class SpellsPageModule { }
