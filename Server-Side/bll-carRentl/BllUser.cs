using Dto;
using dal;

namespace bll_carRentl
{
    public class BllUser
    {
        public static async Task<List<DtoUser>> SelectAllAsync()
        {
            var q1 = await Actions.GetUsersAsync();
            //יתכן שפה תופיע לוגיקה
            return q1;
        }
        
        public static async Task<int> AddAsync(Dto.DtoUser c)
        {
            //פה נכתוב בדיקות תקינות למשל
            dal.User dalC = new dal.User();
            return await Actions.AddUserAsync(c);
        }
        public static async Task<int> UpdateAsync(int id, Dto.DtoUser c)
        {
            //פה נכתוב בדיקות תקינות למשל
            dal.User dalC = new dal.User();
            return await Actions.UpdateUserAsync(id, c);
        }
        public static async Task<int> DeleteAsync(int id)
        { //פה נכתוב בדיקות תקינות למשל
            dal.User dalC = new dal.User();
            return await Actions.DeleteRentalAsync(id);
        }
    }
}
