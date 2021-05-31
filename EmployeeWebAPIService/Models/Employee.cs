using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeWebAPIService.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(6)")]
        public string Code { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(6)")]
        public string Gender { get; set; }

        [Column(TypeName = "decimal(8,2)")]
        public decimal AnnualSalary { get; set; }

        [Column(TypeName = "Date")]
        public DateTime DateOfBirth { get; set; }
    }
}
