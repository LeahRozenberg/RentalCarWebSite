using System;
using System.Collections.Generic;

namespace dal;

public partial class Rental
{
    public short Id { get; set; }

    public short? UserId { get; set; }

    public short? CarId { get; set; }

    public DateTime? Date { get; set; }
}
