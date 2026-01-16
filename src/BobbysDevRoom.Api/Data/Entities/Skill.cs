namespace BobbysDevRoom.Api.Data.Entities;

public class Skill
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty; // e.g., "Backend", "Frontend", "Database", "Tools"
    public int Proficiency { get; set; } // 1-100
    public int SortOrder { get; set; }
}
