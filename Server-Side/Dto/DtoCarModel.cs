using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class DtoCarModel
    {
        public short Id { get; set; }

        public string? Company { get; set; }

        public string? Model { get; set; }

        public short? CarTypeId { get; set; }
    }
}
