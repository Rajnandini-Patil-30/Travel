using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Mappers;
using Travel.Dtos.Destination;
using Microsoft.EntityFrameworkCore;
using Travel.Models;
using Travel.Interfaces;
namespace Travel.Repository
{
    public class DestinationRepo : IDestinationRepo
    {
        public readonly ApplicationDBContext _context;

        public DestinationRepo(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Destination> CreateDestinationAsync(Destination DestinationModel)
        {
            await _context.Destination.AddAsync(DestinationModel);
            await _context.SaveChangesAsync();
            return DestinationModel;
        }
        public Task<bool> DestinationExists(int id)
        {
            return _context.Destination.AnyAsync(e => e.DestinationId == id);
        }

        public async Task<Destination> DeleteDestinationAsync(int id)
        {
            var destinationModel = await _context.Destination
                .Include(x => x.Bookings)
                .FirstOrDefaultAsync(x => x.DestinationId == id);

            if (destinationModel == null)
            {
                return null;
            }

            // Remove related bookings
            _context.Booking.RemoveRange(destinationModel.Bookings);

            // Remove the destination
            _context.Destination.Remove(destinationModel);

            // Save changes
            await _context.SaveChangesAsync();

            return destinationModel;
        }

        public async Task<List<Destination>> GetAllDestinationAsync()
        {
            return await _context.Destination.Include(t => t.Bookings).ToListAsync();
        }

        public async Task<Destination?> UpdateDestinationAsync(int id, UpdateDestionationDto DestinationDto)
        {
            var existingDestination = await _context.Destination.FirstOrDefaultAsync(x => x.DestinationId == id);
            if (existingDestination == null)
            {
                return null;
            }
            existingDestination.Name = DestinationDto.Name;
            existingDestination.Country = DestinationDto.Country;
            existingDestination.Price = DestinationDto.Price;

            _context.Destination.Update(existingDestination);
            await _context.SaveChangesAsync();
            return existingDestination;
        }

        public async Task<Destination?> GetDestinationByIdAsync(int id)
        {
            return await _context.Destination.Include(t => t.Bookings).FirstOrDefaultAsync(t => t.DestinationId == id);
        }

    }
}