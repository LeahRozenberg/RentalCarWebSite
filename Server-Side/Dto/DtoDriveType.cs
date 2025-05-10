using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class DtoDriveType
    {
        public short Id { get; set; }

        public string? Description { get; set; }

        public double? PricePerLiter { get; set; }
    }
}
