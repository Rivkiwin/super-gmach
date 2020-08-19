using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SGmach.Entity.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ManagementStatuses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(nullable: true),
                    Color = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ManagementStatuses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Statuses",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Statuses", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    bank = table.Column<int>(nullable: true),
                    id_user = table.Column<int>(nullable: false),
                    firstName = table.Column<string>(nullable: true),
                    lastname = table.Column<string>(nullable: true),
                    VIP = table.Column<bool>(nullable: true),
                    frirnd = table.Column<bool>(nullable: true),
                    status_User = table.Column<int>(nullable: true),
                    Management_status = table.Column<int>(nullable: true),
                    phon1 = table.Column<string>(nullable: true),
                    phon2 = table.Column<string>(nullable: true),
                    email_addres = table.Column<string>(nullable: true),
                    city = table.Column<string>(nullable: true),
                    street = table.Column<string>(nullable: true),
                    num_street = table.Column<int>(nullable: false),
                    bankName = table.Column<string>(nullable: true),
                    brunchName = table.Column<string>(nullable: true),
                    account_number = table.Column<int>(nullable: false),
                    ciling = table.Column<int>(nullable: false),
                    collection_date = table.Column<int>(nullable: false),
                    remarks = table.Column<string>(nullable: true),
                    joining_date = table.Column<DateTime>(nullable: true),
                    Manager_permissions = table.Column<int>(nullable: true),
                    Scoring = table.Column<int>(nullable: true),
                    father_name = table.Column<string>(nullable: true),
                    Status_reason = table.Column<string>(nullable: true),
                    Management_status1Id = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.id);
                    table.ForeignKey(
                        name: "FK_Users_ManagementStatuses_Management_status1Id",
                        column: x => x.Management_status1Id,
                        principalTable: "ManagementStatuses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Expenditure",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    future_date = table.Column<DateTime>(nullable: true),
                    real_date = table.Column<DateTime>(nullable: true),
                    amount = table.Column<int>(nullable: false),
                    purpose = table.Column<string>(nullable: true),
                    way_of_payment = table.Column<string>(nullable: true),
                    Receives = table.Column<string>(nullable: true),
                    status = table.Column<int>(nullable: true),
                    Status1id = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Expenditure", x => x.id);
                    table.ForeignKey(
                        name: "FK_Expenditure_Statuses_Status1id",
                        column: x => x.Status1id,
                        principalTable: "Statuses",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Fund",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    fund_name = table.Column<string>(nullable: true),
                    status = table.Column<int>(nullable: true),
                    required_months = table.Column<int>(nullable: true),
                    required_vip = table.Column<bool>(nullable: true),
                    comments = table.Column<string>(nullable: true),
                    date_create = table.Column<DateTime>(nullable: true),
                    Status1id = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fund", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Fund_Statuses_Status1id",
                        column: x => x.Status1id,
                        principalTable: "Statuses",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Withdrawing",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    userID = table.Column<int>(nullable: false),
                    fundID = table.Column<int>(nullable: false),
                    amount = table.Column<int>(nullable: false),
                    future_date = table.Column<DateTime>(nullable: true),
                    real_date = table.Column<DateTime>(nullable: true),
                    status = table.Column<int>(nullable: true),
                    status_reason = table.Column<string>(nullable: true),
                    Status1id = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Withdrawing", x => x.id);
                    table.ForeignKey(
                        name: "FK_Withdrawing_Statuses_Status1id",
                        column: x => x.Status1id,
                        principalTable: "Statuses",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserInFunds",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    userID = table.Column<int>(nullable: false),
                    fundID = table.Column<int>(nullable: false),
                    date_join = table.Column<DateTime>(nullable: true),
                    balance = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserInFunds", x => x.id);
                    table.ForeignKey(
                        name: "FK_UserInFunds_Fund_fundID",
                        column: x => x.fundID,
                        principalTable: "Fund",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserInFunds_Users_userID",
                        column: x => x.userID,
                        principalTable: "Users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Expenditure_Status1id",
                table: "Expenditure",
                column: "Status1id");

            migrationBuilder.CreateIndex(
                name: "IX_Fund_Status1id",
                table: "Fund",
                column: "Status1id");

            migrationBuilder.CreateIndex(
                name: "IX_UserInFunds_fundID",
                table: "UserInFunds",
                column: "fundID");

            migrationBuilder.CreateIndex(
                name: "IX_UserInFunds_userID",
                table: "UserInFunds",
                column: "userID");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Management_status1Id",
                table: "Users",
                column: "Management_status1Id");

            migrationBuilder.CreateIndex(
                name: "IX_Withdrawing_Status1id",
                table: "Withdrawing",
                column: "Status1id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Expenditure");

            migrationBuilder.DropTable(
                name: "UserInFunds");

            migrationBuilder.DropTable(
                name: "Withdrawing");

            migrationBuilder.DropTable(
                name: "Fund");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Statuses");

            migrationBuilder.DropTable(
                name: "ManagementStatuses");
        }
    }
}
