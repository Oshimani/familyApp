import { Component, OnInit } from '@angular/core';

import { AppointmentService } from './services/appointment.service';
import { Appointment } from './models/appointment.model';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
    private displayError: boolean = false;

    constructor(private appointmentService: AppointmentService) { }

    ngOnInit() {
        this.loadAppointments();
    }

    private loadAppointments() {
        this.appointmentService.loadAll()
            .subscribe(
                results => {
                    console.log('Success loading Appointments');
                    console.log(results);
                    this.appointmentService.announceNewAppointments(this.sortTimelineByDate(results));
                },
                error => {
                    console.error(error);
                    this.displayError = true;
                }
            );
    }

    private sortTimelineByDate(timeline: Array<Appointment>): Array<Appointment> {
        return timeline.sort((a, b) => {
            if (a.date > b.date) return 1;
            if (a.date < b.date) return -1;
            return 0;
        });
    }
    private handleAppointmentCreation(appointment: Appointment) {
        this.loadAppointments();
    }
}
