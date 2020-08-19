using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Hosting;
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
            services.AddDefaultIdentity<IdentityUser>(options =>
                {
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequiredLength = 0;
                    options.Password.RequireDigit = false;
                    options.Password.RequiredUniqueChars = 0;

                    options.SignIn.RequireConfirmedAccount = true;
                })
                .AddEntityFrameworkStores<ApplicationDbContext>();


            services.AddRazorPages();

            services.AddAuthentication()
                .AddGoogle(options =>
                {
                    IConfigurationSection googleAuthNSection =
                        Configuration.GetSection("Authentication:Google");

                    options.ClientId = googleAuthNSection["ClientId"];
                    options.ClientSecret = googleAuthNSection["ClientSecret"];
                });

            services.AddScoped<SuperGmachEntities>();
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

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader());
            app.UseEndpoints(endpoints => { endpoints.MapRazorPages(); });
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

            app.Map("/apps/app1", builder => {
              builder.UseSpa(spa =>
              {
                if (env.IsDevelopment())
                {
                  spa.UseProxyToSpaDevelopmentServer($"http://localhost:4201/");
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

        }
    }
}
