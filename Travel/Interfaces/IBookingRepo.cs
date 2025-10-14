using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Mappers;
using Travel.Dtos.Booking;
using Microsoft.EntityFrameworkCore;
using Travel.Models;

namespace Travel.Interfaces
{
    public interface IBookingRepo
    {
        Task<List<Booking>> GetAllBookingsAsync();
        Task<Booking?> GetBookingByIdAsync(int id);
        Task<Booking> CreateBookingAsync(Booking bookingModel);
        Task<Booking?> UpdateBookingAsync(int id, UpdateBookingDto bookingDto);
        Task<Booking> DeleteBookingAsync(int id);
    }
}