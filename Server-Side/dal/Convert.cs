using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dto;

namespace dal
{
    public class Convert
    {
        public static DtoUser DtoUser(User user)
        {
            DtoUser convert = new DtoUser();
            convert.UserTypeId = user.UserTypeId;
            convert.CreditNumber = user.CreditNumber;
            convert.PhoneNumber = user.PhoneNumber;
            convert.Cvv = user.Cvv;
            convert.ExpirationDate = user.ExpirationDate;
            convert.Id = user.Id;
            convert.Name = user.Name;
            convert.Password = user.Password;
            convert.Tz = user.Tz;
            return convert;
        }

        public static List<DtoUser> DtoUsers(List<User> users)
        {
            List<DtoUser> list = new List<DtoUser>();
            foreach (var user in users)
            {
                list.Add(DtoUser(user));
            }
            return list;
        }

        public static DtoCar DtoCar(Car car)
        {
            if (car == null)
                return null;
            DtoCar convert = new DtoCar();
            convert.Balance = car.Balance;
            convert.CarModelId = car.CarModelId;
            convert.Id = car.Id;
            convert.LicensePlate = car.LicensePlate;
            convert.Street = car.Street;
            convert.AutomaticGear = car.AutomaticGear;
            convert.City = car.City;
            convert.DriveTypeId = car.DriveTypeId;
            convert.FuelConsumptionPerKm = car.FuelConsumptionPerKm;
            convert.PricePerHour = car.PricePerHour;
            convert.YearBook = car.YearBook;
            convert.Img = car.Img;
            convert.Available = car.Available;
            convert.Company = car.CarModel.Company;
            convert.Model = car.CarModel.Model;
            convert.Description = car.CarModel.CarType.Description;
            convert.driveType = car.DriveType.Description;
            convert.NumberOfSeats = car.NumberOfSeats;
            return convert;
        }
        public static List<DtoCar> DtoCars(List<Car> cars)
        {
            List<DtoCar> list = new List<DtoCar>();
            foreach (var car in cars)
            {
                list.Add(DtoCar(car));
            }
            return list;
        }

        public static DtoCarModel DtoCarModel(CarModel carModel)
        {
            if (carModel == null)
                return null;
            DtoCarModel convert = new DtoCarModel();
            convert.CarTypeId = carModel.CarTypeId;
            convert.Model = carModel.Model;
            convert.Id = carModel.Id;
            convert.Company = carModel.Company;
            return convert;
        }
        public static List<DtoCarModel> DtoCarModels(List<CarModel> carModels)
        {
            List<DtoCarModel> list = new List<DtoCarModel>();
            foreach (var carModel in carModels)
            {
                list.Add(DtoCarModel(carModel));
            }
            return list;
        }

        public static DtoCarType DtoCarType(CarType carType)
        {
            DtoCarType convert = new DtoCarType();
            convert.Description = carType.Description;
            convert.Id = carType.Id;
            return convert;
        }

        public static List<DtoCarType> DtoCarTypes(List<CarType> carTypes)
        {
            List<DtoCarType> list = new List<DtoCarType>();
            foreach (var carType in carTypes)
            {
                list.Add(DtoCarType(carType));
            }
            return list;
        }

        public static DtoDriveType DtoDriveType(DriveType driveType)
        {
            if (driveType == null)
                return null;
            DtoDriveType convert = new DtoDriveType();
            convert.Description = driveType.Description;
            convert.PricePerLiter = driveType.PricePerLiter;
            convert.Id = driveType.Id;
            return convert;
        }
        public static List<DtoDriveType> DtoDriveTypes(List<DriveType> driveTypes)
        {
            List<DtoDriveType> list = new List<DtoDriveType>();
            foreach (var carDrive in driveTypes)
            {
                list.Add(DtoDriveType(carDrive));
            }
            return list;
        }

        public static DtoRental DtoRental(Rental rental)
        {
            DtoRental convert = new DtoRental();
            convert.Date = rental.Date;
            convert.UserId = rental.UserId;
            convert.CarId = rental.CarId;
            convert.Id = rental.Id;
            convert.Date = rental.Date;
            return convert;
        }

        public static List<DtoRental> DtoRentals(List<Rental> rentals)
        {
            List<DtoRental> list = new List<DtoRental>();
            foreach (var rental in rentals)
            {
                    list.Add(DtoRental(rental));
            }
            return list;
        }

        public static DtoReturn DtoReturn(Return return1)
        {
            DtoReturn convert = new DtoReturn();
            convert.Date = return1.Date;
            convert.RentalId = return1.RentalId;
            convert.Id = return1.Id;
            convert.Balance = return1.Balance;
            convert.TotalPayable = return1.TotalPayable;
            convert.Paid = return1.Paid;
            return convert;
        }

        public static List<DtoReturn> DtoReturns(List<Return> returns)
        {
            List<DtoReturn> list = new List<DtoReturn>();
            foreach (var return1 in returns)
            {
                list.Add(DtoReturn(return1));
            }
            return list;
        }

        public static DtoUserType DtoUserType(UserType userType)
        {
            if (userType == null)
                return null;
            DtoUserType convert = new DtoUserType();
            convert.Description = userType.Description;
            convert.Id = userType.Id;
            return convert;
        }

        public static List<DtoUserType> DtoUserTypes(List<UserType> userTypes)
        {
            List<DtoUserType> list = new List<DtoUserType>();
            foreach (var userType in userTypes)
            {
                list.Add(DtoUserType(userType));
            }
            return list;
        }
        public static User User(DtoUser user)
        {
            if (user == null)
                return null;
            User convert = new User();
            convert.UserTypeId = user.UserTypeId;
            convert.CreditNumber = user.CreditNumber;
            convert.PhoneNumber = user.PhoneNumber;
            convert.Cvv = user.Cvv;
            convert.ExpirationDate = user.ExpirationDate;
            convert.Id = user.Id;
            convert.Name = user.Name;
            convert.Password = user.Password;
            convert.Tz = user.Tz;
            return convert;
        }

        public static List<User> Users(List<DtoUser> users)
        {
            List<User> list = new List<User>();
            foreach (var user in users)
            {
                list.Add(User(user));
            }
            return list;
        }

        public static Car Car(DtoCar car)
        {
            Car convert = new Car();
            convert.Balance = car.Balance;
            convert.CarModelId = car.CarModelId;
            convert.Id = car.Id;
            convert.LicensePlate = car.LicensePlate;
            convert.Street = car.Street;
            convert.AutomaticGear = car.AutomaticGear;
            convert.City = car.City;
            convert.DriveTypeId = car.DriveTypeId;
            convert.FuelConsumptionPerKm = car.FuelConsumptionPerKm;
            convert.PricePerHour = car.PricePerHour;
            convert.YearBook = car.YearBook;
            convert.Img = car.Img;
            convert.YearBook = car.YearBook;
            convert.Available = car.Available;
            convert.CarModel = new CarModel() { Company = car.Company, Model = car.Model, CarType = new CarType() { Description = car.Description } };
            return convert;
        }

        public static List<Car> Cars(List<DtoCar> cars)
        {
            List<Car> list = new List<Car>();
            foreach (var car in cars)
            {
                list.Add(Car(car));
            }
            return list;
        }

        public static CarModel CarModel(DtoCarModel carModel)
        {
            CarModel convert = new CarModel();
            convert.CarTypeId = carModel.CarTypeId;
            convert.Model = carModel.Model;
            convert.Id = carModel.Id;
            convert.Company = carModel.Company;
            return convert;
        }

        public static List<CarModel> CarModels(List<DtoCarModel> carModels)
        {
            List<CarModel> list = new List<CarModel>();
            foreach (var carModel in carModels)
            {
                list.Add(CarModel(carModel));
            }
            return list;
        }

        public static CarType CarType(DtoCarType carType)
        {
            CarType convert = new CarType();
            convert.Description = carType.Description;
            convert.Id = carType.Id;
            return convert;
        }

        public static DriveType DriveType(DtoDriveType driveType)
        {
            DriveType convert = new DriveType();
            convert.Description = driveType.Description;
            convert.PricePerLiter = driveType.PricePerLiter;
            convert.Id = driveType.Id;
            return convert;
        }
 
        public static Rental Rental(DtoRental rental)
        {
            Rental convert = new Rental();
            convert.Date = rental.Date;
            convert.UserId = rental.UserId;
            convert.CarId = rental.CarId;
            convert.Id = rental.Id;
            return convert;
        }

        public static List<Rental> Rentals(List<DtoRental> rentals)
        {
            List<Rental> list = new List<Rental>();
            foreach (var rental in rentals)
            {
                list.Add(Rental(rental));
            }
            return list;
        }

        public static Return Return(DtoReturn return1)
        {
            Return convert = new Return();
            convert.Date = return1.Date;
            convert.RentalId = return1.RentalId;
            convert.Id = return1.Id;
            convert.Balance = return1.Balance;
            convert.TotalPayable = return1.TotalPayable;
            convert.Paid = return1.Paid;
            return convert;
        }

        public static List<Return> Returns(List<DtoReturn> returns)
        {
            List<Return> list = new List<Return>();
            foreach (var return1 in returns)
            {
                list.Add(Return(return1));
            }
            return list;
        }

        public static UserType UserType(DtoUserType userType)
        {
            UserType convert = new UserType();
            convert.Description = userType.Description;
            convert.Id = userType.Id;
            return convert;
        }

 
    }
}

