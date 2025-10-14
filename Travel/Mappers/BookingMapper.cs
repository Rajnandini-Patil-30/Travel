using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Dtos.Booking;
using Travel.Interfaces;
using Travel.Mappers;
namespace Travel.Mappers
{
    public static class BookingMapper
    {
        public static BookingDto ToBookingDto(this Models.Booking booking)
        {
            return new BookingDto
            {
                BookingId = booking.BookingId,
                TouristId = booking.TouristId,
                DestinationId = booking.DestinationId,
                BookingDate = booking.BookingDate
            };
        }

        public static Models.Booking ToBookingFromCreateDto(this CreateBookingRequestDto bookingDto)
        {
            return new Models.Booking
            {
                TouristId = bookingDto.TouristId,
                DestinationId = bookingDto.DestinationId,
                BookingDate = bookingDto.BookingDate,
                StartDate = bookingDto.StartDate,
                EndDate = bookingDto.EndDate,
                Cost = bookingDto.Cost
            };
        }
        public static Models.Booking ToBookingFromUpdateDto(this UpdateBookingDto bookingDto)
        {
            return new Models.Booking
            {
                TouristId = bookingDto.TouristId,
                DestinationId = bookingDto.DestinationId,
                BookingDate = bookingDto.BookingDate,
                StartDate = bookingDto.StartDate,
                EndDate = bookingDto.EndDate,
                Cost = bookingDto.Cost
            };
        }
    }
}