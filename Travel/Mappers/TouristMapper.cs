using Travel.Models;
using Travel.Dtos.Tourist;
using Travel.Dtos.Booking;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Travel.Dtos.Destination;

namespace Travel.Mappers
{
    public static class TouristMapper
    {
        public static TouristDto ToTouristDto(this Tourists touristModel)
        {
            return new TouristDto
            {
                TouristId = touristModel.TouristId,
                Name = touristModel.Name,
                Email = touristModel.Email,
                PhoneNumber = touristModel.PhoneNumber,
                PassportNumber = touristModel.PassportNumber,
                Bookings= touristModel.Bookings.Select(b => b.ToBookingDto ()).ToList()
            };
        }
        public static Tourists ToTouristFromCreateDto(this CreateTouristRequestDto touristDto)
        {
            return new Tourists
            {
                TouristId = touristDto.TouristId,
                Name = touristDto.Name,
                Email = touristDto.Email,
                PhoneNumber = touristDto.PhoneNumber,
                PassportNumber = touristDto.PassportNumber
            };
        }
        public static Tourists ToTouristFromUpdateDto(this UpdateTouristAsync touristDto)
        {
            return new Tourists
            {
                TouristId = touristDto.TouristId,
                Name = touristDto.Name,
                Email = touristDto.Email,
                PhoneNumber = touristDto.PhoneNumber,
                PassportNumber = touristDto.PassportNumber
            };
        }
    }
}