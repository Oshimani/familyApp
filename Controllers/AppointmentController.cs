using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FamilyApp.Appointments.Models;
using FamilyApp.Appointments.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace familyApp.Controllers
{
    [Route("api/[controller]")]
    public class AppointmentController : Controller
    {
        private readonly IAppointmentService appointmentService;
        public AppointmentController(IAppointmentService appointmentService)
        {
            this.appointmentService = appointmentService;
        }

        // Post new Appointment
        [HttpPost]
        public async Task<IActionResult> createNew([FromBody]Appointment appointment)
        {
            try
            {
                await this.appointmentService.createNew(appointment);
                return Created("", null);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        // Get all Appointments
        [HttpGet]
        public async Task<IActionResult> getAll()
        {
            try
            {
                IList<Appointment> result = await this.appointmentService.getAll();
                return Json(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}
