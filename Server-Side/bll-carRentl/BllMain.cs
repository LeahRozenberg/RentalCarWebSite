using dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll_carRentl
{
    public class BllMain
    {
        public async Task<List<DtoCarModel>> SelectCarModelAllAsync()
        {
            dal.User dalU = new dal.User();
            var q1 = await Actions.GetCarModelsAsync();
            //יתכן שפה תופיע לוגיקה
            return q1;
        }
        public async Task<List<DtoCarType>> SelectAllCarTypeAsync()
        {
            dal.User dalU = new dal.User();
            var q1 = await Actions.GetCarTypesAsync();
            //יתכן שפה תופיע לוגיקה
            return q1;
        }
        public async Task<List<DtoDriveType>> SelectAllDriveTypeAsync()
        {
            dal.User dalU = new dal.User();
            var q1 = await Actions.GetDriveTypesAsync();
            //יתכן שפה תופיע לוגיקה
            return q1;
        }
        public async Task<List<DtoRental>> SelectAllRentalCarsAsync()
        {
            dal.User dalU = new dal.User();
            var q1 = await Actions.GetRentalsAsync();
            //יתכן שפה תופיע לוגיקה
            return q1;
        }
        public async Task<List<DtoReturn>> SelectAllReturnAsync()
        {
            dal.User dalU = new dal.User();
            var q1 = await Actions.GetReturnsAsync();
            //יתכן שפה תופיע לוגיקה
            return q1;
        }
        public async Task<List<DtoUserType>> SelectAllUderTypeAsync()
        {
            dal.User dalU = new dal.User();
            var q1 = await Actions.GetUserTypesAsync();
            //יתכן שפה תופיע לוגיקה
            return q1;
        }
    }
}
