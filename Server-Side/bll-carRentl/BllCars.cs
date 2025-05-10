using dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll_carRentl
{
    public class BllCars
    {
        public delegate bool filter(DtoCar car);
        public static bool filter1(DtoCar car) { return true; }
        public static List<filter> list1 = new List<filter>() {filter1 };
        
        public static async Task<List<DtoCar>> SelectAllAsync()
        {
            dal.User dalU = new dal.User();
            var q1 = await Actions.GetCarsAsync();
            //יתכן שפה תופיע לוגיקה
            return q1;
        }
        public static async Task<int> AddAsync(DtoCar c)
        {
            //פה נכתוב בדיקות תקינות למשל
            dal.User dalC = new dal.User();
            return await Actions.AddCarAsync(c);
        }
        public static async Task<int> UpdateAsync(int id, DtoCar c)
        {
            //פה נכתוב בדיקות תקינות למשל
            dal.User dalC = new dal.User();
            return await Actions.UpdateCarAsync(id, c);
        }
        public static async Task<int> DeleteAsync(int id)
        { //פה נכתוב בדיקות תקינות למשל
            dal.User dalC = new dal.User();
            return await Actions.DeleteCarAsync(id);
        }

        public static async Task<List<DtoCar>> FilterCars(int filter)
        {
            filter func = list1[filter];
            var list = Actions.GetCarsAsync().Result.Where(c=>func(c)).ToList();
            return list;
        }   
    }
}
