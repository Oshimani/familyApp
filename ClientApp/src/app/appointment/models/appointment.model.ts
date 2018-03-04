import { AppointmentType } from '../enums/appointment-type.enum';

export class Appointment {
    public date: Date;
    public duration: number;
    // wiederholen (jährlich, monatlich, täglich)
    public name: string;
    public contentType: AppointmentType;

    constructor(name?: string, date?: Date, duration?: number, contentType?: AppointmentType) {
        this.name = name;
        this.date = date;
        this.duration = duration;
        this.contentType = contentType;
    }
}
