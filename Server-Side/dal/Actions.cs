using Dto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dal
{
    public static class Actions
    {
        public  static async Task<List<DtoCar>> GetCarsAsync()
        {
            try
            {
                RentalCarsContext db= new RentalCarsContext();
                var q1 = await db.Cars.Include(c=>c.CarModel).ThenInclude(c=>c.CarType).Include(c=>c.DriveType).ToListAsync();
                return Convert.DtoCars(q1);
            }
            catch (Exception ex) { return null; /*throw ex;*/ }
        }

        public  static async Task<List<DtoCarModel>> GetCarModelsAsync()
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                var q1 = await db.CarModels.Include(c=>c.CarType).ToListAsync();
                return Convert.DtoCarModels(q1);
            }
            catch (Exception ex) { throw ex; }
        }

        public  static async Task<List<DtoCarType>> GetCarTypesAsync()
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                var q1 = await db.CarTypes.ToListAsync();
                return Convert.DtoCarTypes(q1);
            }
            catch (Exception ex) { throw ex; }
        }

        public static async Task<List<DtoDriveType>> GetDriveTypesAsync()
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                var q1 = await db.DriveTypes.ToListAsync();
                return Convert.DtoDriveTypes(q1);
            }
            catch (Exception ex) { throw ex; }
        }

        public static async Task<List<DtoRental>> GetRentalsAsync()
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();

                var q1 = await db.Rentals.ToListAsync();
                return Convert.DtoRentals(q1);
            }
            catch (Exception ex) { throw ex; }
        }

        public static async Task<List<DtoReturn>> GetReturnsAsync()
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                var q1 = await db.Returns.ToListAsync();
                return Convert.DtoReturns(q1);
            }
            catch (Exception ex) { throw ex; }
        }

        public static async Task<List<DtoUser>> GetUsersAsync()
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                var q1 = await db.Users.ToListAsync();
                return Convert.DtoUsers(q1);
            }
            catch (Exception ex) { throw ex; }
        }

        public static async Task<List<DtoUserType>> GetUserTypesAsync()
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                var q1 = await db.UserTypes.ToListAsync();
                return Convert.DtoUserTypes(q1);
            }
            catch (Exception ex) { throw ex; }
        }

        public static async Task<int> AddCarAsync(DtoCar car)
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                db.Cars.Add(Convert.Car(car));
                int x = await db.SaveChangesAsync();
                return x;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<int> AddCarModelAsync(DtoCarModel carmodel)
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                db.CarModels.Add(Convert.CarModel(carmodel));
                int x = await db.SaveChangesAsync();
                return x;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<int> AddCarTypeAsync(DtoCarType carType)
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                db.CarTypes.Add(Convert.CarType(carType));
                int x = await db.SaveChangesAsync();
                return x;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<int> AddDriveTypeAsync(DtoDriveType driveType)
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                db.DriveTypes.Add(Convert.DriveType(driveType));
                int x = await db.SaveChangesAsync();
                return x;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<int> AddRentalAsync(DtoRental rental)
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                db.Rentals.Add(Convert.Rental(rental));
                int x = await db.SaveChangesAsync();
                DtoReturn Return = new DtoReturn() {Paid=false };
                Return.RentalId = db.Rentals.FirstOrDefault(r =>  r.UserId == rental.UserId && r.CarId == rental.CarId && rental.Date == r.Date).Id;
                db.Returns.Add(Convert.Return(Return));
                x = await db.SaveChangesAsync();
                return x;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<int> AddReturnAsync(DtoReturn return1)
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                db.Returns.Add(Convert.Return(return1));
                int x = await db.SaveChangesAsync();
                return x;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<int> AddUserAsync(DtoUser user)
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                db.Users.Add(Convert.User(user));
                int x = await db.SaveChangesAsync();
                return x;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<int> AddUserTypeAsync(DtoUserType usertype)
        {
            try
            {
                RentalCarsContext db = new RentalCarsContext();
                db.UserTypes.Add(Convert.UserType(usertype));
                int x = await db.SaveChangesAsync();
                return x;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //update///////////////////////////
        public static async Task<int> UpdateCarAsync(int id, DtoCar car)
        {
            RentalCarsContext db = new RentalCarsContext();
            var c = await db.Cars.FirstOrDefaultAsync(c => c.Id == id);
            if (c == null)
                return -1;

            else
            {
                // c.Courseid=course.Courseid; מספור אוטומטי
                c.PricePerHour = car.PricePerHour;
                c.LicensePlate = car.LicensePlate;
                c.AutomaticGear = car.AutomaticGear;
                c.Balance = car.Balance;
                c.Available = car.Available;
                c.Street = car.Street;
                c.City = car.City;
                c.CarModelId = car.CarModelId;
                c.DriveTypeId = car.DriveTypeId;
                c.YearBook = car.YearBook;
                c.Balance = car.Balance;
                c.CarModelId = car.CarModelId;
                c.DriveTypeId = car.DriveTypeId;
                c.FuelConsumptionPerKm = car.FuelConsumptionPerKm;
                c.Img = car.Img;
                c.NumberOfSeats = car.NumberOfSeats;
                c.CarModel = new CarModel() { CarType = new CarType() { Description = car.Description } };
                c.CarModel.Model = car.Model;
                c.CarModel.Company = car.Company;
                int x = await db.SaveChangesAsync();
                return x;
            }

        }
        public static async Task<int> UpdateCarModelAsync(int id, DtoCarModel carModel)
        {
            RentalCarsContext db = new RentalCarsContext();
            var c = await db.CarModels.FirstOrDefaultAsync(c => c.Id== id);
            if (c == null)
                return -1;

            else
            {
                // c.Courseid=course.Courseid; מספור אוטומטי
                c.Model = carModel.Model;
                c.Company = carModel.Company;
                c.CarTypeId = carModel.CarTypeId;
                int x = await db.SaveChangesAsync();
                return x;
            }
        }
        public static async Task<int> UpdateCarTypeAsync(int id, DtoCarType carType)
        {
            RentalCarsContext db = new RentalCarsContext();
            var c = await db.CarTypes.FirstOrDefaultAsync(c => c.Id == id);
            if (c == null)
                return -1;

            else
            {
                // c.Courseid=course.Courseid; מספור אוטומטי
                c.Description = carType.Description;
                int x = await db.SaveChangesAsync();
                return x;
            }

        }
        public static async Task<int> UpdateDriveTypeAsync(int id, DtoDriveType driveType)
        {
            RentalCarsContext db = new RentalCarsContext();
            var c = await db.DriveTypes.FirstOrDefaultAsync(c => c.Id == id);
            if (c == null)
                return -1;

            else
            {
                // c.Courseid=course.Courseid; מספור אוטומטי
                c.Description = driveType.Description;
                c.PricePerLiter=driveType.PricePerLiter;
                int x = await db.SaveChangesAsync();
                return x;
            }

        }
        public static async Task<int> UpdateReturnAsync(int id, DtoReturn R)
        {
            RentalCarsContext db = new RentalCarsContext();
            var c = await db.Returns.FirstOrDefaultAsync(c => c.Id == id);
            if (c == null)
                return -1;

            else
            {
                // c.Courseid=course.Courseid; מספור אוטומטי
                c.Date = R.Date;
                c.Paid = R.Paid;
                c.Balance = R.Balance;
                c.TotalPayable = R.TotalPayable;
                c.RentalId = R.RentalId;
                c.TotalPayable= R.TotalPayable;
                int x = await db.SaveChangesAsync();
                return x;
            }

        }

        public static async Task<int> UpdateRentalAsync(int id, DtoRental R)
        {
            RentalCarsContext db = new RentalCarsContext();
            var c = await db.Rentals.FirstOrDefaultAsync(c => c.Id == id);
            if (c == null)
                return -1;
            var u = await db.Users.FirstOrDefaultAsync(u => u.Id == R.UserId);
            if (u == null) 
                return -1;

            else
            {
                // c.Courseid=course.Courseid; מספור אוטומטי
                c.Date = R.Date;
                c.CarId = R.CarId;  
                c.Id=R.Id;
                c.UserId = R.UserId;
                int x = await db.SaveChangesAsync();
                return x;
            }

        }

        public static async Task<int> UpdateUserAsync(int id, DtoUser user)
        {
            RentalCarsContext db = new RentalCarsContext();
            var c = await db.Users.FirstOrDefaultAsync(c => c.Id == id);
            if (c == null)
                return -1;

            else
            {
                // c.Courseid=course.Courseid; מספור אוטומטי
               c.Password = user.Password;
                c.Tz = user.Tz;
                c.PhoneNumber = user.PhoneNumber;
                c.CreditNumber = user.CreditNumber;
                c.Cvv = user.Cvv;
                c.ExpirationDate = user.ExpirationDate;
                c.UserTypeId = user.UserTypeId;
                c.Name = user.Name;

                int x = await db.SaveChangesAsync();
                return x;
            }

        }

        public static async Task<int> UpdateUserTypeAsync(int id, DtoUserType userType)
        {
            RentalCarsContext db = new RentalCarsContext();
            var c = await db.UserTypes.FirstOrDefaultAsync(c => c.Id == id);
            if (c == null)
                return -1;

            else
            {
                // c.Courseid=course.Courseid; מספור אוטומטי
               c.Description = userType.Description;
               
                int x = await db.SaveChangesAsync();
                return x;
            }

        }


        //remove
        public static async Task<int> DeleteUserAsync(int id)
        {
            RentalCarsContext db = new RentalCarsContext();
            var c = await db.Users.FirstOrDefaultAsync(c => c.Id == id);
            if (c == null)
                return -1;
            else
            {
                try
                {
                    db.Users.Remove(c);
                }
                catch { 

                }
                int x = await db.SaveChangesAsync();
                return x;
            }
        }
        public static async Task<int> DeleteCarAsync(int id)
        {
            RentalCarsContext db = new RentalCarsContext(); 
            {
                try
                {
                    var c = await db.Cars.FirstOrDefaultAsync(c => c.Id == id);
                    db.Cars.Remove(c);
                }
                catch
                {
                    return -1;  
                }
                int x = await db.SaveChangesAsync();
                return x;
            }
        }
        public static async Task<int> DeleteReturnAsync(int id)
        {
            RentalCarsContext db = new RentalCarsContext();
            {
                try
                {
                    var c = await db.Returns.FirstOrDefaultAsync(c => c.Id == id);
                    db.Returns.Remove(c);
                }
                catch
                {
                    return -1;
                }
                int x = await db.SaveChangesAsync();
                return x;
            }
        }


        public static async Task<int> DeleteRentalAsync(int id)
        {
            RentalCarsContext db = new RentalCarsContext();
            var c = await db.Rentals.FirstOrDefaultAsync(c => c.Id == id);
            if (c == null)
                return -1;
            else
            {
                try
                {
                    db.Rentals.Remove(c);
                }
                catch
                {

                }
                int x = await db.SaveChangesAsync();
                return x;
            }
        }
    }
}
