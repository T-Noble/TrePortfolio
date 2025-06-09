using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TreDotNetApp2.Models;

namespace TreDotNetApp2.Controllers;

public class SkillsController : Controller
    {
        private readonly ILogger<SkillsController> _logger;

        public SkillsController(ILogger<SkillsController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewData["Title"] = "Skills Page";
            return View();
        }
    }