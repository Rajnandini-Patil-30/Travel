namespace Travel.Dtos.Destination
{
    public class CreateDestinationRequestDto
    {
        public int DestinationId { get; set; }
        public String? Name { get; set; }
        public String? Country { get; set; }
        public String? Price { get; set; }
    }
}