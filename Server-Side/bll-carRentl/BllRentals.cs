using dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll_carRentl
{
    public class BllRentals
    {
        public static async Task<List<DtoRental>> SelectAllAsync()
        {
            dal.Rental dalU = new dal.Rental();
            var q1 = await Actions.GetRentalsAsync();
            //יתכן שפה תופיע לוגיקה
            return q1;
        }
        public static async Task<int> AddAsync(Dto.DtoRental c)
        {
            //פה נכתוב בדיקות תקינות למשל
            dal.Rental dalC = new dal.Rental();
            return await Actions.AddRentalAsync(c);
        }
        public static async Task<int> UpdateAsync(int id, Dto.DtoRental c)
        {
            //פה נכתוב בדיקות תקינות למשל
            dal.Rental dalC = new dal.Rental();
            return await Actions.UpdateRentalAsync(id, c);
        }
        public static async Task<int> DeleteAsync(int id)
        { //פה נכתוב בדיקות תקינות למשל
            dal.Rental dalC = new dal.Rental();
            return await Actions.DeleteRentalAsync(id);
        }
    }
}
