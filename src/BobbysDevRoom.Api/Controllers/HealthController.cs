using Microsoft.AspNetCore.Mvc;

namespace BobbysDevRoom.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new 
        { 
            status = "healthy", 
            timestamp = DateTime.UtcNow,
            service = "Bobby's Dev Room API"
        });
    }
}
