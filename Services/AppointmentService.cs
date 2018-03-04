using System;
using System.Collections.Generic;
using System.Threading;
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
        private readonly IMongoCollection<Appointment> collection;
        public AppointmentService(IConfiguration config)
        {
            this.mongoClient = new MongoClient(config["MongoDB:Local:ConnectionString"]);
            this.collectionName = config["MongoDB:DataBases:FamilyApp:Collections:Appointments:Name"];
            this.dataBase = this.mongoClient.GetDatabase(config["MongoDB:Databases:FamilyApp:Name"]);
            this.collection = this.dataBase.GetCollection<Appointment>(this.collectionName);
        }

        public async Task createNew(Appointment appointment)
        {
            try
            {
                await this.collection.InsertOneAsync(appointment);
                return;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<IList<Appointment>> getAll()
        {
            ProjectionDefinition<Appointment> projection = Builders<Appointment>.Projection.Exclude("_id");
            FindOptions<Appointment> options = new FindOptions<Appointment>()
            {
                Projection = projection
            };
            try
            {
                IAsyncCursor<Appointment> results = await this.collection.FindAsync(Builders<Appointment>.Filter.Empty, options);
                return results.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}