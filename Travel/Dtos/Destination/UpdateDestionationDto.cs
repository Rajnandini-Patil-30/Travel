namespace Travel.Dtos.Destination
{
    public class UpdateDestionationDto
    {
        public int DestinationId { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string Price { get; set; }
        public string PassportNumber { get; set; }
    }
}