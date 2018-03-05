import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AppointmentType } from '../enums/appointment-type.enum';
import { Appointment } from '../models/appointment.model';
import { AppointmentService } from '../services/appointment.service';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
    @Output() appointmentAdded: EventEmitter<Appointment> = new EventEmitter<Appointment>();

    private displayNewForm: boolean = false;
    private displayResult: boolean = false;
    private resultStatus: number;
    private appointmentTypes = AppointmentType;

    private appointment: Appointment = new Appointment();

    constructor(private appointmentService: AppointmentService) { }

    ngOnInit() {
        // ToDo: Allow non-all-day long Appointments
        this.appointment.duration = 24 * 60;
    }

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
                (result: Response) => {
                    console.log(result);
                    this.resultStatus = result.status;
                    this.displayResult = true;
                    this.appointmentAdded.emit(this.appointment);

                    setTimeout(() => {
                        this.displayResult = false;
                        this.hideNewForm();
                    }, 3000);
                }, (error: Response) => {
                    console.error(error);
                    this.displayResult = true;
                    this.resultStatus = error.status;
                }
            );
    }
}
