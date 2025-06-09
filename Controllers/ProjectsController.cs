using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TreDotNetApp2.Models;

namespace TreDotNetApp2.Controllers;

public class ProjectsController : Controller
    {
        private readonly ILogger<ProjectsController> _context;

        public ProjectsController(ILogger<ProjectsController> context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            ViewData["Title"] = "Projects Page";
            return View();
        }
    }