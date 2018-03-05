import { Component, OnInit } from '@angular/core';

import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';
import { AppointmentType } from '../enums/appointment-type.enum';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    private appointments: Array<Appointment>;
    private appointmentTypes = AppointmentType;

    constructor(private appointmentService: AppointmentService) {
        this.appointmentService.appointments$.subscribe(
            appointments => {
                this.appointments = appointments;
            }
        );
    }

    ngOnInit() {
    }
}
