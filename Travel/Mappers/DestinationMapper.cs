using Travel.Models;
using Travel.Dtos.Destination;

namespace Travel.Mappers
{
    public static class DestinationMapper
    {
        public static DestinationDto ToDestinationDto(this Destination destinationModel)
        {
            return new DestinationDto
            {
                DestinationId = destinationModel.DestinationId,
                Name = destinationModel.Name,
                Country = destinationModel.Country,
                Price = destinationModel.Price
            };
        }

        public static Destination ToDestinationFromCreateDto(this CreateDestinationRequestDto destinationDto)
        {
            return new Destination
            {
                DestinationId = destinationDto.DestinationId,
                Name = destinationDto.Name,
                Country = destinationDto.Country,
                Price = destinationDto.Price
            };
        }
        public static Destination ToDestinationFromUpdateDto(this UpdateDestionationDto destinationDto)
        {
            return new Destination
            {
                DestinationId = destinationDto.DestinationId,
                Name = destinationDto.Name,
                Country = destinationDto.Country,
                Price = destinationDto.Price
            };
        }
    }
}