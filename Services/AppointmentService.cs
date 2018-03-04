using System;
using System.Threading.Tasks;
using FamilyApp.Appointments.Interfaces;
using FamilyApp.Appointments.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace FamilyApp.Appointments.Services
{
    class AppointmentService : IAppointmentService
    {

        private readonly MongoClient mongoClient;
        private readonly IMongoDatabase dataBase;
        private readonly string collectionName;
        public AppointmentService(IConfiguration config)
        {
            this.mongoClient = new MongoClient(config["MongoDB:Local:ConnectionString"]);
            this.collectionName = config["MongoDB:DataBases:FamilyApp:Collections:Appointments:Name"];
            this.dataBase = this.mongoClient.GetDatabase(config["MongoDB:Databases:FamilyApp:Name"]);
        }

        public async Task createNew(Appointment appointment)
        {
            IMongoCollection<Appointment> collection = this.dataBase.GetCollection<Appointment>(this.collectionName);
            try
            {
                await collection.InsertOneAsync(appointment);
                return;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}