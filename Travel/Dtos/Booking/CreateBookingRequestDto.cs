using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Dtos.Booking;
using Travel.Interfaces;
using Travel.Mappers;
using Travel.Models;

namespace Travel.Dtos.Booking
{
    public class CreateBookingRequestDto
    {
        public int BookingId { get; set; }
        public int? TouristId { get; set; }
        public int? DestinationId { get; set; }
        public DateTime BookingDate { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Cost { get; set; }
        // public Tourists Tourist { get; set; }
        // public Travel.Models.Destination Destination { get; set; }
    }
}