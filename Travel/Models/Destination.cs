using System;
using System.ComponentModel.DataAnnotations;

namespace Travel.Models
{
    public class Destination
    {
        [Key]
        public int DestinationId { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string Price { get; set; }
        public List<Booking> Bookings { get; set; }
    }
}