using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class DtoRental
    {
        public short Id { get; set; }

        public short? UserId { get; set; }

        public short? CarId { get; set; }

        public DateTime? Date { get; set; }

    }
}

