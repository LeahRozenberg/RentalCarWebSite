using System;
using System.Collections.Generic;

namespace dal;

public partial class DriveType
{
    public short Id { get; set; }

    public string? Description { get; set; }

    public double? PricePerLiter { get; set; }

    public virtual ICollection<Car> Cars { get; set; } = new List<Car>();
}
