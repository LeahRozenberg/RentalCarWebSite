using System;
using System.Collections.Generic;

namespace dal;

public partial class UserType
{
    public short Id { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
