using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TreDotNetApp2.Models;

namespace TreDotNetApp2.Models
{
    public class SkillsPageViewModel
    {
        public List<TechnicalSkill>? TechnicalSkills { get; set; }
        public List<SoftSkill>? SoftSkills { get; set; }
    }
}