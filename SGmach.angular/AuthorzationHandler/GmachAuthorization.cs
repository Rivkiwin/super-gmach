using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;

namespace SGmach.angular.AuthorzationHandler
{
    public class GmachAuthorization: IAuthorizationHandler 
    {
        public async Task HandleAsync(AuthorizationHandlerContext context)
        {
            // if (context.User.HasClaim(c => c.Type == "BadgeId" &&
            //                                c.Issuer == "http://microsoftsecurity"))
            // {
            //     context.Succeed(new ClaimsAuthorizationRequirement());
            // }

        }
    }
}