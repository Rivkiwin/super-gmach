using System.Linq;
using System.Reflection;
using API.Controllers;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SGmach.angular.Data;
using SGmach.angular.Models;
using SGmach.Entity;

namespace SGmach.angular {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {
            // services.AddMvc ().AddApplicationPart (Assembly.GetAssembly (typeof (ExpenditureController))).AddControllersAsServices ();
            // services.AddMvc ().AddApplicationPart (Assembly.GetAssembly (typeof (DepositController))).AddControllersAsServices ();
            // services.AddMvc ().AddApplicationPart (Assembly.GetAssembly (typeof (FundController))).AddControllersAsServices ();
            // services.AddMvc ().AddApplicationPart (Assembly.GetAssembly (typeof (IncomeController))).AddControllersAsServices ();
            // services.AddMvc ().AddApplicationPart (Assembly.GetAssembly (typeof (LoanController))).AddControllersAsServices ();
            // services.AddMvc ().AddApplicationPart (Assembly.GetAssembly (typeof (StatusController))).AddControllersAsServices ();
            // services.AddMvc ().AddApplicationPart (Assembly.GetAssembly (typeof (TranzilaController))).AddControllersAsServices ();
            // services.AddMvc ().AddApplicationPart (Assembly.GetAssembly (typeof (UsersController))).AddControllersAsServices ();
            // services.AddMvc ().AddApplicationPart (Assembly.GetAssembly (typeof (WithdrawalsController))).AddControllersAsServices ();
            services.AddMvc ().AddApplicationPart (Assembly.GetAssembly (typeof (Management_StatusController))).AddControllersAsServices ()
            .AddNewtonsoftJson();

                // .AddJsonOptions (op => {op.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
                // op.JsonSerializerOptions.});

            services.AddDbContext<ApplicationDbContext> (options =>
                options.UseSqlite (
                    Configuration.GetConnectionString ("DefaultConnection")));

            // services.AddDbContext<GmachUserDbContext>(options =>
            //     options.UseSqlite(
            //         Configuration.GetConnectionString("DefaultConnection")));
            //

            services.AddDbContext<SuperGmachEntities> (options =>
                options.UseSqlite (
                    Configuration.GetConnectionString ("GmachConnection"),
                    builder => builder.MigrationsAssembly ("SGmach.angular")));

            services.AddScoped<SuperGmachEntities> ();

            services.AddDefaultIdentity<ApplicationUser> (options => {
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequiredLength = 0;
                    options.Password.RequireDigit = false;
                    options.Password.RequiredUniqueChars = 0;
                    options.Password.RequireUppercase = false;
                    options.Password.RequireLowercase = false;
                    options.SignIn.RequireConfirmedAccount = false;
                })
                .AddEntityFrameworkStores<ApplicationDbContext> ();

            services.AddIdentityServer ()
                .AddApiAuthorization<ApplicationUser, ApplicationDbContext> ();

            services.AddAuthentication ()
                .AddIdentityServerJwt ();

            //
            // services.AddIdentity<GmachUser, IdentityRole>(options =>
            //     {
            //         options.Password.RequireNonAlphanumeric = false;
            //         options.Password.RequiredLength = 0;
            //         options.Password.RequireDigit = false;
            //         options.Password.RequiredUniqueChars = 0;
            //         options.Password.RequireUppercase = false;
            //         options.Password.RequireLowercase = false;
            //         options.SignIn.RequireConfirmedAccount = false;
            //     })
            //     .AddEntityFrameworkStores<GmachUserDbContext>();
            //

            services.AddControllersWithViews ();
            services.AddRazorPages ();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles (configuration => {
                configuration.RootPath = "ClientApp/dist";
            });

            // services.Configure<JwtBearerOptions>(
            //     IdentityServerJwtConstants.IdentityServerJwtBearerScheme,
            //     options =>
            //     {
            //         var onTokenValidated = options.Events.OnTokenValidated;
            //         var onChallenge = options.Events.OnChallenge;
            //         // options.Events.OnChallenge = async context =>
            //         // {
            //         //     
            //         //     await onChallenge(context);
            //         // };
            //         // options.Events.OnTokenValidated = async context =>
            //         // { 
            //         //     await onTokenValidated(context);
            //         // };
            //     });
            // services.AddAuthorization( 
            //    
            // );
            // services.AddAuthorization(options =>
            // {
            //     options.AddPolicy("GmachMng", policy =>
            //         policy.RequireClaim("gmach"));
            // });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
                app.UseDatabaseErrorPage ();
            } else {
                app.UseExceptionHandler ("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts ();
            }

            app.UseHttpsRedirection ();
            app.UseStaticFiles ();
            if (!env.IsDevelopment ()) {
                app.UseSpaStaticFiles ();
            }

            app.UseRouting ();

            app.UseAuthentication ();
            app.UseIdentityServer ();
            app.UseAuthorization ();
            app.UseEndpoints (endpoints => {
                endpoints.MapControllerRoute (
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
                endpoints.MapRazorPages ();
                endpoints.MapControllers ();
            });

            app.UseSpa (spa => {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment ()) {
                    spa.UseAngularCliServer (npmScript: "start");
                }
            });
app.UseStaticFiles();
            // app.Map("/gmach", builder =>
            // {
            //     builder.UseRewriter(new RewriteOptions()
            //     {
            //         
            //     })
            // });

        }
    }
}