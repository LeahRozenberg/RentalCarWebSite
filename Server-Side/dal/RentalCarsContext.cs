using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace dal;

public partial class RentalCarsContext : DbContext
{
    public RentalCarsContext()
    {
    }

    public RentalCarsContext(DbContextOptions<RentalCarsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Car> Cars { get; set; }

    public virtual DbSet<CarModel> CarModels { get; set; }

    public virtual DbSet<CarType> CarTypes { get; set; }

    public virtual DbSet<DriveType> DriveTypes { get; set; }

    public virtual DbSet<Rental> Rentals { get; set; }

    public virtual DbSet<Return> Returns { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserType> UserTypes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=DESKTOP-L9S4R74;Initial Catalog=RentalCars; Trusted_Connection=True;MultipleActiveResultSets=True;Encrypt=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Car>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Cars__3213E83F4EFE31B5");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AutomaticGear).HasColumnName("automaticGear");
            entity.Property(e => e.Available).HasColumnName("available");
            entity.Property(e => e.Balance).HasColumnName("balance");
            entity.Property(e => e.CarModelId).HasColumnName("carModelId");
            entity.Property(e => e.City)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("city");
            entity.Property(e => e.DriveTypeId).HasColumnName("driveTypeId");
            entity.Property(e => e.FuelConsumptionPerKm).HasColumnName("fuelConsumptionPerKm");
            entity.Property(e => e.Img)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("img");
            entity.Property(e => e.LicensePlate)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("licensePlate");
            entity.Property(e => e.NumberOfSeats).HasColumnName("numberOfSeats");
            entity.Property(e => e.PricePerHour).HasColumnName("pricePerHour");
            entity.Property(e => e.Street)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("street");
            entity.Property(e => e.YearBook).HasColumnName("yearBook");

            entity.HasOne(d => d.CarModel).WithMany(p => p.Cars)
                .HasForeignKey(d => d.CarModelId)
                .HasConstraintName("FK__Cars__carModelId__45F365D3");

            entity.HasOne(d => d.DriveType).WithMany(p => p.Cars)
                .HasForeignKey(d => d.DriveTypeId)
                .HasConstraintName("FK__Cars__driveTypeI__46E78A0C");
        });

        modelBuilder.Entity<CarModel>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CarModel__3213E83F4F690BDB");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CarTypeId).HasColumnName("carTypeId");
            entity.Property(e => e.Company)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("company");
            entity.Property(e => e.Model)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("model");

            entity.HasOne(d => d.CarType).WithMany(p => p.CarModels)
                .HasForeignKey(d => d.CarTypeId)
                .HasConstraintName("FK__CarModels__carTy__44FF419A");
        });

        modelBuilder.Entity<CarType>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__CarTypes__3213E83F14FF6BFE");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("description");
        });

        modelBuilder.Entity<DriveType>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__DriveTyp__3213E83FEC194495");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("description");
            entity.Property(e => e.PricePerLiter).HasColumnName("pricePerLiter");
        });

        modelBuilder.Entity<Rental>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Rentals__3213E83F9D7AE587");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CarId).HasColumnName("carId");
            entity.Property(e => e.Date)
                .HasColumnType("datetime")
                .HasColumnName("date");
            entity.Property(e => e.UserId).HasColumnName("userId");
        });

        modelBuilder.Entity<Return>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Returns__3213E83F763BA676");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Balance).HasColumnName("balance");
            entity.Property(e => e.Date)
                .HasColumnType("datetime")
                .HasColumnName("date");
            entity.Property(e => e.Paid).HasColumnName("paid");
            entity.Property(e => e.RentalId).HasColumnName("rentalId");
            entity.Property(e => e.TotalPayable).HasColumnName("totalPayable");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3213E83F4C7D4336");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreditNumber)
                .HasMaxLength(16)
                .IsUnicode(false)
                .HasColumnName("creditNumber");
            entity.Property(e => e.Cvv)
                .HasMaxLength(3)
                .IsUnicode(false)
                .HasColumnName("cvv");
            entity.Property(e => e.ExpirationDate)
                .HasColumnType("date")
                .HasColumnName("expirationDate");
            entity.Property(e => e.Name)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("phoneNumber");
            entity.Property(e => e.Tz)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("tz");
            entity.Property(e => e.UserTypeId).HasColumnName("userTypeId");

            entity.HasOne(d => d.UserType).WithMany(p => p.Users)
                .HasForeignKey(d => d.UserTypeId)
                .HasConstraintName("FK__Users__userTypeI__4AB81AF0");
        });

        modelBuilder.Entity<UserType>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__UserType__3213E83FC8825FA4");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("description");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
