using bll_carRentl;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace carRentall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    { 
        [HttpGet]
        public async Task<List<DtoCar>> Get(int indexFilter)
        {
            return await BllCars.FilterCars(indexFilter);
        }

        [HttpPost]
        public async Task<int> Post(DtoCar car)
        {
            return await BllCars.AddAsync(car);
        }

        [HttpPut]
        public async Task<int> Put(int id,DtoCar car)
        {
            return await BllCars.UpdateAsync(id,car);
        }

        [HttpDelete]
        public async Task<int> Delete(int id)
        {
            return await BllCars.DeleteAsync(id);
        }
    }
}
