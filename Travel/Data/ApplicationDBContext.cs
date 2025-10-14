using Microsoft.EntityFrameworkCore;
using Travel.Models;
namespace Travel.Data
{

    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
            : base(options)
        {
        }

        public DbSet<Tourists> Tourists { get; set; } = default!;

        public DbSet<Destination> Destination { get; set; } = default!;

        public DbSet<Booking> Booking { get; set; } = default!;
    }
}