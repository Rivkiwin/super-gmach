using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using SGmach.App.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using SGmach.Entity;

namespace SGmach.App
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlite(
                    Configuration.GetConnectionString("DefaultConnection")));
            
            
            services.AddDistributedMemoryCache();
 
            services.AddSession(options => {
                options.IdleTimeout = TimeSpan.FromSeconds(3);//You can set Time
            });
                
            

            services.AddDefaultIdentity<IdentityUser>(options =>
                {

                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequiredLength = 0;
                    options.Password.RequireDigit = false;
                    options.Password.RequiredUniqueChars = 0;
                    options.Password.RequireUppercase = false;
                    options.Password.RequireLowercase = false; 
                    options.SignIn.RequireConfirmedAccount = false;
                })
                .AddEntityFrameworkStores<ApplicationDbContext>();
 
            
             // services.AddAuthentication(options =>
             //    {
             //        options.DefaultScheme = "cookie";
             //        options.DefaultChallengeScheme = "oidc";
             //    })
                // .AddCookie("cookie", options =>
                // {
                //     options.Cookie.Name = "mycookie";
                //
                //     options.Events.OnSigningOut = async e =>
                //     {
                //         await e.HttpContext.RevokeUserRefreshTokenAsync();
                //     };
                // })
                services.AddAuthentication();
                // .AddGoogle(options =>
                // {
                //     IConfigurationSection googleAuthNSection =
                //         Configuration.GetSection("Authentication:Google");
                //
                //     options.ClientId = googleAuthNSection["ClientId"];
                //     options.ClientSecret = googleAuthNSection["ClientSecret"];
                // });

            services.AddScoped<SuperGmachEntities>();
         
            services.AddRazorPages(options=>
                    options.Conventions.AuthorizePage("/App")
            ); 
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "../ClientApp/dist";
            });
            // services.AddDbContext<SuperGmachEntities>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles(); 
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }
            app.UseSession();


            app.UseRouting(); 
            app.UseAuthentication();
            app.UseAuthorization();
            // app.UseEndpoints(endpoints =>
            // {
            //     endpoints.MapControllerRoute(
            //         name: "default",
            //         pattern: "{controller}/{action=Index}/{id?}");
            //     endpoints.MapRazorPages();
            // });
            //
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader());
            app.UseEndpoints(endpoints => { endpoints.MapRazorPages(); });
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

            app.Map("/apps/app", builder => {
              builder.UseSpa(spa =>
              {
                  spa.Options.SourcePath = "../ClientApp";

                if (env.IsDevelopment())
                { 
                    spa.UseAngularCliServer(npmScript: "start"); 
                    spa.UseProxyToSpaDevelopmentServer($"http://localhost:4201//");
                }
                else
                {
                  var staticPath = Path.Combine(
                    Directory.GetCurrentDirectory(), $"wwwroot/Apps/dist/app1");
                  var fileOptions = new StaticFileOptions
                    { FileProvider = new PhysicalFileProvider(staticPath) };
                  builder.UseSpaStaticFiles(options: fileOptions);
            
                  spa.Options.DefaultPageStaticFileOptions = fileOptions;
                }
              });
            });
            
            // app.UseSpa(spa =>
            // {
            //     // To learn more about options for serving an Angular SPA from ASP.NET Core,
            //     // see https://go.microsoft.com/fwlink/?linkid=864501
            //
            //     spa.Options.SourcePath = "../ClientApp";
            //
            //     if (env.IsDevelopment())
            //     {
            //         spa.UseAngularCliServer(npmScript: "start");
            //     }
            // });

        }
    }
}
