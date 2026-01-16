namespace BobbysDevRoom.Api.Data.Entities;

public class Experience
{
    public int Id { get; set; }
    public string Company { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; } // null = current job
    public string Description { get; set; } = string.Empty;
    public int SortOrder { get; set; }
}
