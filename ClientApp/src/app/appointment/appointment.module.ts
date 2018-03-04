import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentComponent } from './appointment.component';
import { CalendarComponent } from './calendar/calendar.component';

const appointmentRoutes: Routes = [
    {
        path: '',
        component: AppointmentComponent,
        children: [
            { path: '', redirectTo: 'calendar', pathMatch: 'full' },
            { path: 'calendar', component: CalendarComponent },
            // { path: '**', component: ListComponent },
        ]
    }
];

@NgModule({
    declarations: [
        AppointmentComponent,
        CalendarComponent
    ],
    imports: [CommonModule, RouterModule.forChild(appointmentRoutes)],
    exports: [],
    providers: []
})
export class AppointmentModule { }
