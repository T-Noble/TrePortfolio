using Microsoft.EntityFrameworkCore;
using TreDotNetApp2.Models;

namespace TreDotNetApp2.Services
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        //Add DBSets and models, then migrate into database with:
        //dotnet ef database update
        //and dotnet ef database update
        public DbSet<TechnicalSkill> TechnicalSkills { get; set; }
        public DbSet<SoftSkill> SoftSkills { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Certification> Certifications { get; set; }
        public DbSet<TechStackItem> TechStackItems { get; set; }
    }
}
