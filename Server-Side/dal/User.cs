using System;
using System.Collections.Generic;

namespace dal;

public partial class User
{
    public short Id { get; set; }

    public string? Name { get; set; }

    public string? Tz { get; set; }

    public string? PhoneNumber { get; set; }

    public string? Password { get; set; }

    public string? CreditNumber { get; set; }

    public DateTime? ExpirationDate { get; set; }

    public string? Cvv { get; set; }

    public short? UserTypeId { get; set; }

    public virtual UserType? UserType { get; set; }
}
