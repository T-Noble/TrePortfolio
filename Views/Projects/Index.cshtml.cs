using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace TreDotNetApp2.Views.Projects
{
    public class ProjectsIndex : PageModel
    {
        private readonly ILogger<ProjectsIndex> _logger;

        public ProjectsIndex(ILogger<ProjectsIndex> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}