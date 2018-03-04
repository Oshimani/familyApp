using System;
using FamilyApp.Appointments.Enums;

namespace FamilyApp.Appointments.Models
{

    public class Appointment
    {
        public string name { get; set; }
        public DateTime date { get; set; }
        public int duration { get; set; }
        public AppointmentType contentType { get; set; }
    }
}