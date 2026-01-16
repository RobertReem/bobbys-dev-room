namespace BobbysDevRoom.Api.Data.Entities;

public class Education
{
    public int Id { get; set; }
    public string Institution { get; set; } = string.Empty;
    public string Degree { get; set; } = string.Empty;
    public string Field { get; set; } = string.Empty;
    public DateTime? GraduationDate { get; set; }
    public string? Description { get; set; }
}
