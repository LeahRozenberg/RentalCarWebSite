using System;
using System.Collections.Generic;

namespace dal;

public partial class CarModel
{
    public short Id { get; set; }

    public string? Company { get; set; }

    public string? Model { get; set; }

    public short? CarTypeId { get; set; }

    public virtual CarType? CarType { get; set; }

    public virtual ICollection<Car> Cars { get; set; } = new List<Car>();
}
