using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Mappers;
using Travel.Dtos.Tourist;
using Microsoft.EntityFrameworkCore;
using Travel.Interfaces;

namespace Travel.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TouristsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly ITouristRepo _touristRepo;
        public TouristsController(ApplicationDBContext context, ITouristRepo touristRepo)
        {
            _context = context;
            _touristRepo = touristRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTourists()
        {
            var touristsList = await _touristRepo.GetAllTouristsAsync();
            var touristDtos = touristsList.Select(s => s.ToTouristDto());

            return Ok(touristsList);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTouristById([FromRoute] int id)
        {
            var tourist = await _touristRepo.GetTouristByIdAsync(id);
            if (tourist == null)
            {
                return NotFound();
            }
            return Ok(tourist.ToTouristDto());
        }

        [HttpPost]
        public async Task<IActionResult> CreateTourist([FromBody] CreateTouristRequestDto touristDto)
        {
            var touristModel = touristDto.ToTouristFromCreateDto();
            await _touristRepo.CreateTouristAsync(touristModel);
            return CreatedAtAction(nameof(GetTouristById), new { id = touristModel.TouristId }, touristModel.ToTouristDto());
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTourist(int id, [FromBody] UpdateTouristAsync touristDto)
        {
            var existingTourist =await _touristRepo.UpdateTouristAsync(id, touristDto);
            if (existingTourist == null)
            {
                return NotFound();
            }


            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTourist([FromRoute] int id)
        {
            var touristModel = await _touristRepo.DeleteTouristAsync(id);
            if (touristModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}