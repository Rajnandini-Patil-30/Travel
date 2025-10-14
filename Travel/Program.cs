using Microsoft.EntityFrameworkCore;
using Travel.Data;
using Travel.Interfaces;
using Travel.Repository;
using Microsoft.AspNetCore.Mvc.NewtonsoftJson;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); 
builder.Services.AddDbContext<ApplicationDBContext>(options=>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnectionString")));
builder.Services.AddControllers().AddNewtonsoftJson(options =>
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
);
builder.Services.AddScoped<ITouristRepo, TouristRepo>();
builder.Services.AddScoped<IDestinationRepo, DestinationRepo>();
builder.Services.AddScoped<IBookingRepo, BookingRepo>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();