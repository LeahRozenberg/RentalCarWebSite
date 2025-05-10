using dal;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace carRental.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public static async Task<List<DtoUser>> GetAsync()
        {
            return await Actions.GetUsersAsync();
        }

    }
}
