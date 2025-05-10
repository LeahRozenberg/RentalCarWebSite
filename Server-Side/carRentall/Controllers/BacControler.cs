using bll_carRentl;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace carRentall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BacController : ControllerBase
    {
            [HttpGet]
            public async Task<List<DtoReturn>> Get()
            {
                return await BllReturn.SelectAllAsync();
            }

            [HttpPost]
            public async Task<int> Post(DtoReturn rental)
            {
                try
                {
                    BllReturn.AddAsync(rental);
                    return 0;
                }
                catch (Exception ex) { return 1; }

            }
            [HttpPut]
            public async Task<List<DtoReturn>> Put(int id, DtoReturn rental)
            {
                try
                {
                    BllReturn.UpdateAsync(id, rental);
                }
                catch (Exception ex)
                {
                }
                return await BllReturn.SelectAllAsync();
            }

            [HttpDelete]
            public async Task<int> Delete(int id)
            {
                return await BllReturn.DeleteAsync(id);
            }
        }
}
