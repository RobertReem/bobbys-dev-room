namespace BobbysDevRoom.Api.Data.Entities;

public class Tutorial
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string HtmlFilePath { get; set; } = string.Empty; // Path to the HTML file
    public string? ThumbnailUrl { get; set; }
    public string Category { get; set; } = string.Empty;
    public bool IsPublished { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
