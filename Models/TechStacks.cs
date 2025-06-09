namespace TreDotNetApp2.Models
{
    public class TechStackItem {
        public int? Id { get; set; }
        public string? name { get; set; }

        //Related Entity to Projects.cs
        public int? ProjectId { get; set; }
        public Project? Project { get; set; }
    }
}