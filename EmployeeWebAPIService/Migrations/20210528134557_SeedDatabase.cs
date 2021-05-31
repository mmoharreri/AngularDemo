using Microsoft.EntityFrameworkCore.Migrations;
namespace EmployeeWebAPIService.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Employee (Code, Name, Gender, AnnualSalary, DateOfBirth) VALUES ('emp101', 'Tom', 'Male', 110000, '6/25/1956' )");
            migrationBuilder.Sql("INSERT INTO Employee (Code, Name, Gender, AnnualSalary, DateOfBirth) VALUES ('emp102', 'Maryam', 'Female', 65000, '5/20/1983')");
            migrationBuilder.Sql("INSERT INTO Employee (Code, Name, Gender, AnnualSalary, DateOfBirth) VALUES ('emp103', 'Shaham', 'Male', 63000, '10/27/2002')");
            migrationBuilder.Sql("INSERT INTO Employee (Code, Name, Gender, AnnualSalary, DateOfBirth) VALUES ('emp104', 'Simel', 'Male', 65000, '1/29/2016')");
            migrationBuilder.Sql("INSERT INTO Employee (Code, Name, Gender, AnnualSalary, DateOfBirth) VALUES ('emp105', 'Sky', 'Female', 55000, '9/3/2018')");
        }


        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Employee WHERE Code IN ('emp101', 'emp102', 'emp103', 'emp104', 'emp105')");
        }
    }
}
