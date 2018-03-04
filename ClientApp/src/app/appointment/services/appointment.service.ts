import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Appointment } from '../models/appointment.model';

@Injectable()
export class AppointmentService {
    @Inject('BASE_URL') baseUrl: string;
    constructor(private http: HttpClient) { }

    submitNew(appointment: Appointment): Observable<any> {
        const body: string = JSON.stringify(appointment);

        const httpOptions = {
            headers: new HttpHeaders({ 'ContentType': 'application/json' })
        };

        return this.http.post(this.baseUrl + 'api/SampleData/WeatherForecasts', body, httpOptions);
    }
}
