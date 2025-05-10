using System;
using System.Collections.Generic;

namespace dal;

public partial class Car
{
    public short Id { get; set; }

    public string? LicensePlate { get; set; }

    public short? CarModelId { get; set; }

    public short? NumberOfSeats { get; set; }

    public string? Img { get; set; }

    public short? YearBook { get; set; }

    public bool? AutomaticGear { get; set; }

    public short? DriveTypeId { get; set; }

    public double? PricePerHour { get; set; }

    public double? FuelConsumptionPerKm { get; set; }

    public short? Balance { get; set; }

    public string? City { get; set; }

    public string? Street { get; set; }

    public bool? Available { get; set; }

    public virtual CarModel? CarModel { get; set; }

    public virtual DriveType? DriveType { get; set; }
}
