using bll_carRentl;
using Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace carRentall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public async Task<List<DtoUser>> Get()
        {
            return await BllUser.SelectAllAsync();
        }
        [HttpPost("GetUser")]
        public async Task<DtoUser> GetUser(string password)
        {
            var users = await BllUser.SelectAllAsync();
            if (users.FirstOrDefault(p => p.Password.Equals(password)) == null)
                throw new Exception();
            return users.FirstOrDefault(p => p.Password.Equals(password));
                
        }

        [HttpPost]
        public async Task<int> Post(DtoUser user)
        {
            try
            {
                BllUser.AddAsync(user);
                return 0;
            }
            catch (Exception ex) { return 1; }
            
        }
        [HttpPut]
        public async Task<int> Put(int id,DtoUser user)
        {
            try
            {
                BllUser.UpdateAsync(id,user);
                return 0;
            }
            catch (Exception ex) { return 1; }
        }

        [HttpDelete]
        public async Task<int> Delete(int id)
        {
            return await BllCars.DeleteAsync(id);
        }
    }
}
