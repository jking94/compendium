import { NgModule } from '@angular/core';
import { BeastDetailPageComponent } from './beast-detail-page.component';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { beastDetailPageRoutes } from './beast-detail-page.routing'

@NgModule({
    declarations: [
        BeastDetailPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(beastDetailPageRoutes),
    ],
    providers: [
        HttpClient
    ]
})
export class BeastDetailPageModule { }
