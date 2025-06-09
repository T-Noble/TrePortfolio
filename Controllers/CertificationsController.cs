using Microsoft.AspNetCore.Mvc;
using TreDotNetApp2.Models;
using TreDotNetApp2.Services;
using System.Linq;

namespace TreDotNetApp2.Controllers
{
    public class CertificationsController : Controller
    {
        private readonly AppDbContext _context;

        public CertificationsController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var skills = _context.Certifications.ToList();
            return View(skills);
        }
    }
}