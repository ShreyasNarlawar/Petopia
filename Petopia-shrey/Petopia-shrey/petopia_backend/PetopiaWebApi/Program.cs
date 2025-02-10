using Microsoft.EntityFrameworkCore;
using PetopiaWebApi.Models;

namespace PetopiaWebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Retrieve the connection string from appsettings.json
            var connectionString = builder.Configuration.GetConnectionString("dbcs")
                ?? throw new InvalidOperationException("Connection string 'dbcs' not found.");

            // Add services to the container
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Register DbContext with the retrieved connection string
            builder.Services.AddDbContext<PetopiaDbContext>(options =>
                options.UseSqlServer(connectionString));

            // Enable CORS 
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });



            var app = builder.Build();

            // Configure the HTTP request pipeline
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            // Apply CORS policy (optional, modify if needed)
            app.UseCors("AllowAll");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}

