import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const shoppingRoutes: Routes = [
    {
        path: '',
        component: ShoppingListComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListComponent },
            { path: 'detail', component: DetailComponent },
            // { path: '**', component: ListComponent },
        ]
    }
];

@NgModule({
    declarations: [
        ShoppingListComponent,
        ListComponent,
        DetailComponent
    ],
    imports: [CommonModule, RouterModule.forChild(shoppingRoutes)],
    exports: [],
    providers: []
})
export class ShoppingListModule { }
