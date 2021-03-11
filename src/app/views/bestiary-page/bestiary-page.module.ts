//import { HomeButtonComponent } from './../../components/home-button/home-button.component';
import { RouterModule } from '@angular/router';
import { BestiaryPageComponent } from './bestiary-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { bestiaryPageRoutes } from './bestiary-page.routing';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        BestiaryPageComponent
        //HomeButtonComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(bestiaryPageRoutes),
        MatButtonModule
    ],
    providers: [
        HttpClient
    ]
})
export class BestiaryPageModule { }