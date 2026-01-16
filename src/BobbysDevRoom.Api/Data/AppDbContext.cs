using Microsoft.EntityFrameworkCore;
using BobbysDevRoom.Api.Data.Entities;

namespace BobbysDevRoom.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    // Profile & Resume
    public DbSet<Profile> Profiles => Set<Profile>();
    public DbSet<Skill> Skills => Set<Skill>();
    public DbSet<Experience> Experiences => Set<Experience>();
    public DbSet<Education> Educations => Set<Education>();

    // Content
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<Tutorial> Tutorials => Set<Tutorial>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.ConfigureWarnings(warnings => 
        warnings.Ignore(Microsoft.EntityFrameworkCore.Diagnostics.RelationalEventId.PendingModelChangesWarning));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seed initial profile data
        modelBuilder.Entity<Profile>().HasData(new Profile
        {
            Id = 1,
            FullName = "Rob",
            Title = ".NET Developer",
            Bio = "Passionate developer building cool things.",
            Email = "contact@bobbysdevroom.io",
            GitHub = "https://github.com/yourusername",
            LinkedIn = "https://linkedin.com/in/yourprofile",
            UpdatedAt = DateTime.UtcNow
        });
    }
}
