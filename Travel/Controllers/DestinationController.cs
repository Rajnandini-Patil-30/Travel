using System;
using Microsoft.AspNetCore.Mvc;
using Travel.Data;
using Travel.Dtos.Destination;
using Travel.Mappers;
using Travel.Interfaces;
using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace Travel.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DestinationController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IDestinationRepo _destinationRepo;
        public DestinationController(ApplicationDBContext context, IDestinationRepo destinationRepo)
        {
            _context = context;
            _destinationRepo = destinationRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDestion()
        {
            var destination = await _destinationRepo.GetAllDestinationAsync();
            var ddtos = destination.Select(s => s.ToDestinationDto());
            return Ok(destination);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var destination = await _destinationRepo.GetDestinationByIdAsync(id);
            if (destination == null)
            {
                return NotFound();
            }
            return Ok(destination.ToDestinationDto());
        }
        [HttpPost]
        public async Task<IActionResult> CreateDestination([FromBody] CreateDestinationRequestDto destinationDto)
        {
            var destinationModel = destinationDto.ToDestinationFromCreateDto();
            await _destinationRepo.CreateDestinationAsync(destinationModel);
            return CreatedAtAction(nameof(GetById), new { id = destinationModel.DestinationId }, destinationModel.ToDestinationDto());
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDestination([FromRoute] int id, [FromBody] UpdateDestionationDto destinationDto)
        {
            var existongDestination = await _destinationRepo.UpdateDestinationAsync(id, destinationDto);
            if (existongDestination == null)
            {
                return NotFound();
            }
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDestination(int id)
        {
            var destination = await _destinationRepo.DeleteDestinationAsync(id);
            if (destination == null)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}