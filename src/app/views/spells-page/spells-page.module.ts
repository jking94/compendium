import { HomeButtonComponent } from './../../components/home-button/home-button.component';
import { RouterModule } from '@angular/router';
import { SpellsPageComponent } from './spells-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { spellsPageRoutes } from './spells-page.routing';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    SpellsPageComponent,
    HomeButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(spellsPageRoutes),
    MatButtonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ]
})
export class SpellsPageModule { }
