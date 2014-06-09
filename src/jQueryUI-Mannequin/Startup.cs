using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(jQueryUI_Mannequin.Startup))]
namespace jQueryUI_Mannequin
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
