using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Dtos.Booking;
using Travel.Interfaces;
using Travel.Mappers;

namespace Travel.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookingController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IBookingRepo _bookingRepo;
        public BookingController(ApplicationDBContext context, IBookingRepo bookingRepo)
        {
            _context = context;
            _bookingRepo = bookingRepo;
        }

        [HttpGet]
        public async Task<ActionResult<List<BookingDto>>> GetAllBookings()
        {
            var bookings = await _bookingRepo.GetAllBookingsAsync();
            var bookingDtos = bookings.Select(s => s.ToBookingDto());
            return Ok(bookingDtos);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<BookingDto>> GetBookingById(int id)
        {
            var booking = await _bookingRepo.GetBookingByIdAsync(id);
            if (booking == null)
            {
                return NotFound();
            }
            var bookingDto = BookingMapper.ToBookingDto(booking);
            return Ok(bookingDto);
        }
        [HttpPost]
        public async Task<ActionResult<BookingDto>> CreateBooking(CreateBookingRequestDto bookingDto)
        {
            var bookingModel = bookingDto.ToBookingFromCreateDto();
            var createdBooking = await _bookingRepo.CreateBookingAsync(bookingModel);
            var createdBookingDto = BookingMapper.ToBookingDto(createdBooking);
            return CreatedAtAction(nameof(GetBookingById), new { id = createdBookingDto.BookingId }, createdBookingDto);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<BookingDto>> UpdateBooking(int id, UpdateBookingDto bookingDto)
        {
            var updatedBooking = await _bookingRepo.UpdateBookingAsync(id, bookingDto);
            if (updatedBooking == null)
            {
                return NotFound();
            }
            var updatedBookingDto = BookingMapper.ToBookingDto(updatedBooking);
            return Ok(updatedBookingDto);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<BookingDto>> DeleteBooking(int id)
        {
            var deletedBooking = await _bookingRepo.DeleteBookingAsync(id);
            if (deletedBooking == null)
            {
                return NotFound();
            }
            var deletedBookingDto = BookingMapper.ToBookingDto(deletedBooking);
            return Ok(deletedBookingDto);
        }
    } 
}