using System.Collections.Generic;
using System.Threading.Tasks;
using FamilyApp.Appointments.Models;

namespace FamilyApp.Appointments.Interfaces
{
    public interface IAppointmentService
    {
        Task createNew(Appointment appointment);
        Task<IList<Appointment>> getAll();
    }
}