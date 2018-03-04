import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';

// Components
import { AppointmentComponent } from './appointment.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NewComponent } from './new/new.component';

// Services
import { AppointmentService } from './services/appointment.service';

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
        CalendarComponent,
        NewComponent
    ],
    imports: [CoreModule, RouterModule.forChild(appointmentRoutes)],
    exports: [],
    providers: [AppointmentService]
})
export class AppointmentModule { }
