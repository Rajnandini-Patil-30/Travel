using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Mappers;
using Travel.Dtos.Tourist;
using Travel.Dtos.Booking;
using Microsoft.EntityFrameworkCore;
using Travel.Models;
using Travel.Interfaces;
namespace Travel.Repository
{
    public class TouristRepo : ITouristRepo
    {
        public readonly ApplicationDBContext _context;

        public TouristRepo(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Tourists> CreateTouristAsync(Tourists touristModel)
        {
            await _context.Tourists.AddAsync(touristModel);
            await _context.SaveChangesAsync();
            return touristModel;
        }
        public Task<bool> TouristExists(int id)
        {
            return _context.Tourists.AnyAsync(e => e.TouristId == id);
        }
        public async Task<Tourists?> DeleteTouristAsync(int id)
        {
            var touristModel = await _context.Tourists.Include(x=>x.Bookings).FirstOrDefaultAsync(x => x.TouristId == id);
            if (touristModel == null)
            {
                return null;
            }
            _context.Booking.RemoveRange(touristModel.Bookings);
            _context.Tourists.Remove(touristModel);
            await _context.SaveChangesAsync();
            return touristModel;
        }

        public async Task<List<Tourists>> GetAllTouristsAsync()
        {
            return await _context.Tourists.Include(t => t.Bookings).ToListAsync();
        }

        public async Task<Tourists?> UpdateTouristAsync(int id, UpdateTouristAsync touristDto)
        {
            var existingTourist = await _context.Tourists.FirstOrDefaultAsync(x => x.TouristId == id);
            if (existingTourist == null)
            {
                return null;
            }
            existingTourist.Name = touristDto.Name;
            existingTourist.Email = touristDto.Email;
            existingTourist.PhoneNumber = touristDto.PhoneNumber;
            existingTourist.PassportNumber = touristDto.PassportNumber;

            _context.Tourists.Update(existingTourist);
            await _context.SaveChangesAsync();
            return existingTourist;
        }

        public async Task<Tourists?> GetTouristByIdAsync(int id)
        {
            return await _context.Tourists.Include(t => t.Bookings).FirstOrDefaultAsync(t => t.TouristId == id);
        }
    }
}