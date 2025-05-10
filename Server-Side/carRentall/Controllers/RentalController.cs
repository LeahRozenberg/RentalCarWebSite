using bll_carRentl;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace carRentall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalController : ControllerBase
    {

        [HttpGet]
        public async Task<List<DtoRental>> Get()
        {
            return await BllRentals.SelectAllAsync();
        }

        [HttpPost]
        public async Task<int> Post(DtoRental rental)
        {
            try
            {
                BllRentals.AddAsync(rental);
                return 0;
            }
            catch (Exception ex) { return 1; }

        }
        [HttpPut]
        public async Task<List<DtoRental>> Put(int id, DtoRental rental)
        {
            try
            {
                BllRentals.UpdateAsync(id, rental);  
            }
            catch (Exception ex) {
            }
            return  await BllRentals.SelectAllAsync();
        }

        [HttpDelete]
        public async Task<int> Delete(int id)
        {
            return await BllRentals.DeleteAsync(id);
        }
    }

}
