using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeWebAPIService.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employee",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(6)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(6)", nullable: true),
                    AnnualSalary = table.Column<decimal>(type: "decimal(8,2)", nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "Date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employee", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employee");
        }
    }
}
