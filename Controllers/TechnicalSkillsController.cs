using Microsoft.AspNetCore.Mvc;
using TreDotNetApp2.Models;
using TreDotNetApp2.Services;
using System.Linq;

namespace TreDotNetApp2.Controllers
{
    public class TechnicalSkillsController : Controller
    {
        private readonly AppDbContext _context;

        public TechnicalSkillsController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var skills = _context.TechnicalSkills.ToList();
            return View(skills);
        }

        public IActionResult GetAll()
        {
            var skills = _context.TechnicalSkills.ToList();
            return Json(skills);
        }
    }
}
