using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TreDotNetApp2.Models;

namespace TreDotNetApp2.Controllers;

public class ResumeController : Controller
    {
        private readonly ILogger<ResumeController> _logger;

        public ResumeController(ILogger<ResumeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewData["Title"] = "Resume Page";
            return View();
        }

    }