using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace TreDotNetApp2.Views.Skills
{
    public class SkillsIndex : PageModel
    {
        private readonly ILogger<SkillsIndex> _logger;

        public SkillsIndex(ILogger<SkillsIndex> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}