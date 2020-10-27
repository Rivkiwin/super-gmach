using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SGmach.angular.Migrations.SuperGmachEntitiesMigrations
{
    public partial class create_gmachdb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ManagementStatuses",
                columns: table => new
                {
                    NameManagement_status = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Color = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ManagementStatuses", x => x.NameManagement_status);
                });

            migrationBuilder.CreateTable(
                name: "Statuses",
                columns: table => new
                {
                    NameStatus = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Statuses", x => x.NameStatus);
                });

            migrationBuilder.CreateTable(
                name: "Expenditure",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Date = table.Column<DateTime>(nullable: false),
                    Amount = table.Column<int>(nullable: false),
                    Purpose = table.Column<string>(nullable: true),
                    Way_of_payment = table.Column<string>(nullable: true),
                    Receives = table.Column<string>(nullable: true),
                    NameStatus = table.Column<string>(nullable: true),
                    StatusNameStatus = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Expenditure", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Expenditure_Statuses_StatusNameStatus",
                        column: x => x.StatusNameStatus,
                        principalTable: "Statuses",
                        principalColumn: "NameStatus",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Funds",
                columns: table => new
                {
                    FundId = table.Column<string>(nullable: false),
                    GmachId = table.Column<string>(nullable: true),
                    fund_name = table.Column<string>(nullable: true),
                    required_months = table.Column<int>(nullable: true),
                    required_vip = table.Column<bool>(nullable: true),
                    comments = table.Column<string>(nullable: true),
                    Date_create = table.Column<DateTime>(nullable: true),
                    NameStatus = table.Column<string>(nullable: true),
                    statusNameStatus = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Funds", x => x.FundId);
                    table.ForeignKey(
                        name: "FK_Funds_Statuses_statusNameStatus",
                        column: x => x.statusNameStatus,
                        principalTable: "Statuses",
                        principalColumn: "NameStatus",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Incoms",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Date = table.Column<DateTime>(nullable: false),
                    Amount = table.Column<int>(nullable: false),
                    Payment_method = table.Column<int>(nullable: false),
                    GmachId = table.Column<string>(nullable: true),
                    From = table.Column<string>(nullable: true),
                    Remarks = table.Column<string>(nullable: true),
                    NameStatus = table.Column<string>(nullable: true),
                    statusNameStatus = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Incoms", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Incoms_Statuses_statusNameStatus",
                        column: x => x.statusNameStatus,
                        principalTable: "Statuses",
                        principalColumn: "NameStatus",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    firstName = table.Column<string>(nullable: true),
                    lastname = table.Column<string>(nullable: true),
                    father_name = table.Column<string>(nullable: true),
                    VIP = table.Column<bool>(nullable: false),
                    frirnd = table.Column<bool>(nullable: false),
                    phon1 = table.Column<string>(nullable: true),
                    phon2 = table.Column<string>(nullable: true),
                    email_addres = table.Column<string>(nullable: true),
                    city = table.Column<string>(nullable: true),
                    street = table.Column<string>(nullable: true),
                    num_street = table.Column<int>(nullable: false),
                    collection_date = table.Column<int>(nullable: false),
                    remarks = table.Column<string>(nullable: true),
                    joining_date = table.Column<DateTime>(nullable: false),
                    Manager_permissions = table.Column<int>(nullable: true),
                    Scoring = table.Column<int>(nullable: false),
                    GmachId = table.Column<string>(nullable: true),
                    MaritalStatus = table.Column<string>(nullable: true),
                    Status_reason = table.Column<string>(nullable: true),
                    NameManagement_status = table.Column<string>(nullable: true),
                    management_StatusNameManagement_status = table.Column<string>(nullable: true),
                    NameStatus = table.Column<string>(nullable: true),
                    statusNameStatus = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_Users_ManagementStatuses_management_StatusNameManagement_status",
                        column: x => x.management_StatusNameManagement_status,
                        principalTable: "ManagementStatuses",
                        principalColumn: "NameManagement_status",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_Statuses_statusNameStatus",
                        column: x => x.statusNameStatus,
                        principalTable: "Statuses",
                        principalColumn: "NameStatus",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "BankDetails",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Branch = table.Column<string>(nullable: true),
                    Bank = table.Column<string>(nullable: true),
                    Account = table.Column<string>(nullable: true),
                    owner = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BankDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BankDetails_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Collections",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Amount = table.Column<int>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    Remarks = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Collections", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Collections_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Credits",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Number = table.Column<string>(nullable: true),
                    CVV = table.Column<string>(nullable: true),
                    Expdate = table.Column<string>(nullable: true),
                    Owner = table.Column<string>(nullable: true),
                    CrdeditOwnerID = table.Column<string>(nullable: true),
                    Ciling = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    Token = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Credits", x => x.id);
                    table.ForeignKey(
                        name: "FK_Credits_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Loans",
                columns: table => new
                {
                    LoanId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Amount = table.Column<int>(nullable: false),
                    Months = table.Column<int>(nullable: false),
                    RepaymentStart = table.Column<DateTime>(nullable: false),
                    remark = table.Column<string>(nullable: true),
                    Num_payments = table.Column<int>(nullable: false),
                    Score = table.Column<int>(nullable: false),
                    EnteryDate = table.Column<DateTime>(nullable: false),
                    NameManagement_status = table.Column<string>(nullable: true),
                    Management_StatusNameManagement_status = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Loans", x => x.LoanId);
                    table.ForeignKey(
                        name: "FK_Loans_ManagementStatuses_Management_StatusNameManagement_status",
                        column: x => x.Management_StatusNameManagement_status,
                        principalTable: "ManagementStatuses",
                        principalColumn: "NameManagement_status",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Loans_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserInFunds",
                columns: table => new
                {
                    User_in_fundId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    GmachId = table.Column<string>(nullable: true),
                    date_join = table.Column<DateTime>(nullable: false),
                    balance = table.Column<int>(nullable: false),
                    FundId = table.Column<int>(nullable: false),
                    FundId1 = table.Column<string>(nullable: true),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserInFunds", x => x.User_in_fundId);
                    table.ForeignKey(
                        name: "FK_UserInFunds_Funds_FundId1",
                        column: x => x.FundId1,
                        principalTable: "Funds",
                        principalColumn: "FundId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserInFunds_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Repayments",
                columns: table => new
                {
                    RepaymentId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Amount = table.Column<int>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    NameStatus = table.Column<string>(nullable: true),
                    StatusNameStatus = table.Column<string>(nullable: true),
                    LoanId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Repayments", x => x.RepaymentId);
                    table.ForeignKey(
                        name: "FK_Repayments_Loans_LoanId",
                        column: x => x.LoanId,
                        principalTable: "Loans",
                        principalColumn: "LoanId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Repayments_Statuses_StatusNameStatus",
                        column: x => x.StatusNameStatus,
                        principalTable: "Statuses",
                        principalColumn: "NameStatus",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Deposits",
                columns: table => new
                {
                    DepositId = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    GmachId = table.Column<string>(nullable: true),
                    Amount = table.Column<int>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    Form_deposit = table.Column<string>(nullable: true),
                    FundId = table.Column<string>(nullable: true),
                    User_in_fundId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Deposits", x => x.DepositId);
                    table.ForeignKey(
                        name: "FK_Deposits_Funds_FundId",
                        column: x => x.FundId,
                        principalTable: "Funds",
                        principalColumn: "FundId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Deposits_UserInFunds_User_in_fundId",
                        column: x => x.User_in_fundId,
                        principalTable: "UserInFunds",
                        principalColumn: "User_in_fundId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Withdrawing",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Amount = table.Column<int>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    FundId = table.Column<string>(nullable: true),
                    NameStatus = table.Column<string>(nullable: true),
                    StatusNameStatus = table.Column<string>(nullable: true),
                    User_in_fundId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Withdrawing", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Withdrawing_Funds_FundId",
                        column: x => x.FundId,
                        principalTable: "Funds",
                        principalColumn: "FundId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Withdrawing_Statuses_StatusNameStatus",
                        column: x => x.StatusNameStatus,
                        principalTable: "Statuses",
                        principalColumn: "NameStatus",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Withdrawing_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Withdrawing_UserInFunds_User_in_fundId",
                        column: x => x.User_in_fundId,
                        principalTable: "UserInFunds",
                        principalColumn: "User_in_fundId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BankDetails_UserId",
                table: "BankDetails",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Collections_UserId",
                table: "Collections",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Credits_UserId",
                table: "Credits",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Deposits_FundId",
                table: "Deposits",
                column: "FundId");

            migrationBuilder.CreateIndex(
                name: "IX_Deposits_User_in_fundId",
                table: "Deposits",
                column: "User_in_fundId");

            migrationBuilder.CreateIndex(
                name: "IX_Expenditure_StatusNameStatus",
                table: "Expenditure",
                column: "StatusNameStatus");

            migrationBuilder.CreateIndex(
                name: "IX_Funds_statusNameStatus",
                table: "Funds",
                column: "statusNameStatus");

            migrationBuilder.CreateIndex(
                name: "IX_Incoms_statusNameStatus",
                table: "Incoms",
                column: "statusNameStatus");

            migrationBuilder.CreateIndex(
                name: "IX_Loans_Management_StatusNameManagement_status",
                table: "Loans",
                column: "Management_StatusNameManagement_status");

            migrationBuilder.CreateIndex(
                name: "IX_Loans_UserId",
                table: "Loans",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Repayments_LoanId",
                table: "Repayments",
                column: "LoanId");

            migrationBuilder.CreateIndex(
                name: "IX_Repayments_StatusNameStatus",
                table: "Repayments",
                column: "StatusNameStatus");

            migrationBuilder.CreateIndex(
                name: "IX_UserInFunds_FundId1",
                table: "UserInFunds",
                column: "FundId1");

            migrationBuilder.CreateIndex(
                name: "IX_UserInFunds_UserId",
                table: "UserInFunds",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_management_StatusNameManagement_status",
                table: "Users",
                column: "management_StatusNameManagement_status");

            migrationBuilder.CreateIndex(
                name: "IX_Users_statusNameStatus",
                table: "Users",
                column: "statusNameStatus");

            migrationBuilder.CreateIndex(
                name: "IX_Withdrawing_FundId",
                table: "Withdrawing",
                column: "FundId");

            migrationBuilder.CreateIndex(
                name: "IX_Withdrawing_StatusNameStatus",
                table: "Withdrawing",
                column: "StatusNameStatus");

            migrationBuilder.CreateIndex(
                name: "IX_Withdrawing_UserId",
                table: "Withdrawing",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Withdrawing_User_in_fundId",
                table: "Withdrawing",
                column: "User_in_fundId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BankDetails");

            migrationBuilder.DropTable(
                name: "Collections");

            migrationBuilder.DropTable(
                name: "Credits");

            migrationBuilder.DropTable(
                name: "Deposits");

            migrationBuilder.DropTable(
                name: "Expenditure");

            migrationBuilder.DropTable(
                name: "Incoms");

            migrationBuilder.DropTable(
                name: "Repayments");

            migrationBuilder.DropTable(
                name: "Withdrawing");

            migrationBuilder.DropTable(
                name: "Loans");

            migrationBuilder.DropTable(
                name: "UserInFunds");

            migrationBuilder.DropTable(
                name: "Funds");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "ManagementStatuses");

            migrationBuilder.DropTable(
                name: "Statuses");
        }
    }
}
