using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Mappers;
using Travel.Dtos.Booking;
using Microsoft.EntityFrameworkCore;
using Travel.Models;
using Travel.Interfaces;
namespace Travel.Repository
{
    public class BookingRepo : IBookingRepo
    {
        public readonly ApplicationDBContext _context;

        public BookingRepo(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Booking> CreateBookingAsync(Booking BookingModel)
        {
            await _context.Booking.AddAsync(BookingModel);
            await _context.SaveChangesAsync();
            return BookingModel;
        }

        public async Task<Booking> DeleteBookingAsync(int id)
        {
            var BookingModel = await _context.Booking.FirstOrDefaultAsync(x=>x.BookingId==id);
            if (BookingModel == null)
            {
                return null;
            }
            _context.Booking.Remove(BookingModel);
            await _context.SaveChangesAsync();
            return BookingModel;
        }

        public async Task<List<Booking>> GetAllBookingsAsync()
        {
            return await _context.Booking.ToListAsync();
        }

        public async Task<Booking?> UpdateBookingAsync(int id, UpdateBookingDto BookingDto)
        {
            var existingBooking = await _context.Booking.FirstOrDefaultAsync(x => x.BookingId == id);
            if (existingBooking == null)
            {
                return null;
            }
            existingBooking.TouristId = BookingDto.TouristId;
            existingBooking.DestinationId = BookingDto.DestinationId;
            existingBooking.BookingDate = BookingDto.BookingDate;
            existingBooking.StartDate = BookingDto.StartDate;
            existingBooking.EndDate = BookingDto.EndDate;
            existingBooking.Cost = BookingDto.Cost;
            
            _context.Booking.Update(existingBooking);
            await _context.SaveChangesAsync();
            return existingBooking;
        }

        public async Task<Booking?> GetBookingByIdAsync(int id)
        {
            return await _context.Booking.FindAsync(id);
        }

    }
}