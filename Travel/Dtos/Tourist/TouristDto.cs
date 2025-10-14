using Travel.Dtos.Booking;

namespace Travel.Dtos.Tourist
{
    public class TouristDto
    {
        public int TouristId { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? PassportNumber { get; set; }
        public List<BookingDto> Bookings { get;  set; }
    }

}