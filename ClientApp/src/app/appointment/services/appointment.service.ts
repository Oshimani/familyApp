import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Appointment } from '../models/appointment.model';

@Injectable()
export class AppointmentService {

    private appointmentsSource: Subject<Array<Appointment>> = new Subject<Array<Appointment>>();
    public appointments$: Observable<Array<Appointment>> = this.appointmentsSource.asObservable();

    constructor(private http: HttpClient) { }

    announceNewAppointments(appointments: Array<Appointment>) {
        this.appointmentsSource.next(appointments);
    }

    submitNew(appointment: Appointment): Observable<any> {
        const body: string = JSON.stringify(appointment);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post('api/appointment', body, { headers: headers, observe: 'response' });
    }

    loadAll(): Observable<Array<Appointment>> {
        const headers = new HttpHeaders({ 'Accept': 'application/json' });
        return this.http.get<Array<Appointment>>('api/appointment', { headers: headers });
    }

}
