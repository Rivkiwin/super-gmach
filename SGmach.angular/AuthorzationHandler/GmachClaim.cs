// using System.Collections.Generic;
// using System.Linq;
// using System.Security.Claims;
// using System.Threading.Tasks;
// using IdentityModel;
// using Microsoft.AspNetCore.Identity;
// using Microsoft.Extensions.Options;
// using SGmach.angular.Models;
//
// namespace SGmach.angular
// {
//     public class GmachUser : IdentityUser
//     {
//         public string GmachId;
//         public string Role;
//     }
//
//     public class AdditionalUserClaimsPrincipalFactory
//         : UserClaimsPrincipalFactory<GmachUser, IdentityRole>
//     {
//         public AdditionalUserClaimsPrincipalFactory(
//             UserManager<GmachUser> userManager,
//             RoleManager<IdentityRole> roleManager,
//             IOptions<IdentityOptions> optionsAccessor)
//             : base(userManager, roleManager, optionsAccessor)
//         {
//         }
//
//         public override async Task<ClaimsPrincipal> CreateAsync(GmachUser user)
//         {
//             var principal = await base.CreateAsync(user);
//             var identity = (ClaimsIdentity) principal.Identity;
//
//             var claims = new List<Claim>();
//             claims.Add(new Claim("gmach", user.GmachId));
//             claims.Add(new Claim(JwtClaimTypes.Role, user.GmachId));
//
//
//             identity.AddClaims(claims);
//             return principal;
//         }
//     }
//
//     public class ApplicationUserClaimsPrincipalFactory
//         : UserClaimsPrincipalFactory<ApplicationUser, IdentityRole>
//     {
//         public ApplicationUserClaimsPrincipalFactory(
//             UserManager<ApplicationUser> userManager,
//             RoleManager<IdentityRole> roleManager,
//             IOptions<IdentityOptions> optionsAccessor)
//             : base(userManager, roleManager, optionsAccessor)
//         {
//         }
//
//         public override async Task<ClaimsPrincipal> CreateAsync(ApplicationUser user)
//         {
//             var principal = await base.CreateAsync(user);
//             var identity = (ClaimsIdentity) principal.Identity;
//
//             identity.AddClaims(user.Gmach.Select(e => new Claim("gmach", e.GmachId)));
//             return principal;
//         }
//     }
// }