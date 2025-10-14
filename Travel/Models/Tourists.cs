using System;
using System.ComponentModel.DataAnnotations;

namespace Travel.Models
{
    public class Tourists
    {
        [Key]
        public int TouristId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string PassportNumber { get; set; }
        // public List<Destination> Destinations { get; set; }
        public List<Booking> Bookings { get; set; }
    }
}