using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    public class DtoReturn
    {
        public short Id { get; set; }

        public short? RentalId { get; set; }

        public DateTime? Date { get; set; }

        public short? Balance { get; set; }

        public double? TotalPayable { get; set; }

        public bool? Paid { get; set; }

    }
}
