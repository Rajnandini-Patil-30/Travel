using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Mappers;
using Travel.Dtos.Tourist;
using Microsoft.EntityFrameworkCore;
using Travel.Models;

namespace Travel.Interfaces
{
    public interface ITouristRepo
    {
        Task<List<Tourists>> GetAllTouristsAsync();
        Task<Tourists?> GetTouristByIdAsync(int id);
        Task<Tourists> CreateTouristAsync(Tourists touristModel);
        Task<Tourists?> UpdateTouristAsync(int id, UpdateTouristAsync touristDto);
        Task<Tourists> DeleteTouristAsync(int id);
        Task<bool> TouristExists(int id);
    }
}