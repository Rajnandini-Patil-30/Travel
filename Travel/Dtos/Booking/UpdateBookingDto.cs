namespace Travel.Dtos.Booking
{
    public class UpdateBookingDto
    {
        public int BookingId { get; set; }
        public int? TouristId { get; set; }
        public int? DestinationId { get; set; }
        public DateTime BookingDate { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Cost { get; set; }
        // public Tourists Tourist { get; set; }
        // public Destination Destination { get; set; }
    }
}