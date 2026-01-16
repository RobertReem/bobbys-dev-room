namespace BobbysDevRoom.Api.Data.Entities;

public class Profile
{
    public int Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Bio { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? GitHub { get; set; }
    public string? LinkedIn { get; set; }
    public string? TwitterUrl { get; set; }
    public string? YouTubeUrl { get; set; }
    public string? TwitchUrl { get; set; }
    public string? ResumeUrl { get; set; }
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
