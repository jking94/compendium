import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpellDetailPageComponent } from './spell-detail-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { spellDetailPageRoutes } from './spell-detail-page.routing';

@NgModule({
    declarations: [
        SpellDetailPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(spellDetailPageRoutes),   
    ],
    providers: [
        HttpClient
    ]
})
export class SpellDetailPageModule { }