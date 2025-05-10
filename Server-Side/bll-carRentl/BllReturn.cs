using dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll_carRentl
{
    public class BllReturn
    {
        public static async Task<List<DtoReturn>> SelectAllAsync()
        {
            dal.Return dalU = new dal.Return();
            var q1 = await Actions.GetReturnsAsync();
            //יתכן שפה תופיע לוגיקה
            return q1;
        }
        public static async Task<int> AddAsync(Dto.DtoReturn c)
        {
            //פה נכתוב בדיקות תקינות למשל
            dal.Return dalC = new dal.Return();
            return await Actions.AddReturnAsync(c);
        }
        public static async Task<int> UpdateAsync(int id, Dto.DtoReturn c)
        {
            //פה נכתוב בדיקות תקינות למשל
            dal.Return dalC = new dal.Return();
            return await Actions.UpdateReturnAsync(id, c);
        }
        public static async Task<int> DeleteAsync(int id)
        { //פה נכתוב בדיקות תקינות למשל
            dal.User dalC = new dal.User();
            return await Actions.DeleteReturnAsync(id);
        }
    }
}
