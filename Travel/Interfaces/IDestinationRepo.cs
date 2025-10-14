using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Mappers;
using Travel.Dtos.Destination;
using Microsoft.EntityFrameworkCore;
using Travel.Models;

namespace Travel.Interfaces
{
    public interface IDestinationRepo
    {
        Task<List<Destination>> GetAllDestinationAsync();
        Task<Destination?> GetDestinationByIdAsync(int id);
        Task<Destination> CreateDestinationAsync(Destination DestinationModel);
        Task<Destination?> UpdateDestinationAsync(int id, UpdateDestionationDto DestinationDto);
        Task<Destination> DeleteDestinationAsync(int id);
        Task<bool> DestinationExists(int id);
    }
}