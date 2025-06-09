using Microsoft.AspNetCore.Mvc;
using TreDotNetApp2.Models;
using TreDotNetApp2.Services;
using System.Linq;

namespace TreDotNetApp2.Controllers
{
    public class SoftSkillsController : Controller
    {
        private readonly AppDbContext _context;

        public SoftSkillsController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult GetAll()
        {
            var softSkills = _context.SoftSkills.ToList();
            return Json(softSkills);
        }
    }
}