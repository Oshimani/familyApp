import { Component, OnInit } from '@angular/core';

import { AppointmentType } from '../enums/appointment-type.enum';
import { Appointment } from '../models/appointment.model';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
    private displayNewForm: boolean = false;
    private appointmentTypes = AppointmentType;

    private appointment: Appointment = new Appointment();

    constructor(private appointmentService: AppointmentService) { }

    ngOnInit() { }

    private showNewForm() {
        this.displayNewForm = true;
    }

    private hideNewForm() {
        this.displayNewForm = false;
    }

    private saveClicked() {
        this.submit();
    }

    private submit() {
        this.appointmentService.submitNew(this.appointment)
            .subscribe(
                result => {
                    console.log(result);
                }, error => {
                    console.error(error);
                }
            );
    }
}
