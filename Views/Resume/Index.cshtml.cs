using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace TreDotNetApp2.Views.Resume
{
    public class ResumeIndex : PageModel
    {
        private readonly ILogger<ResumeIndex> _logger;

        public ResumeIndex(ILogger<ResumeIndex> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}