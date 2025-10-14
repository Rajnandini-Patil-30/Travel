using System;
using Travel.Dtos.Booking;

namespace Travel.Dtos.Destination
{
    public class DestinationDto
    {
        public int DestinationId { get; set; }
        public String? Name { get; set; }
        public String? Country { get; set; }
        public String? Price { get; set; }
        public List<BookingDto> Bookings { get;  set; }
    }
}