namespace TreDotNetApp2.Models
{
    public class Project
    {
        public int id { get; set; }
        public string? title { get; set; }
        public string? description { get; set; }
        public List<TechStackItem>? techStack { get; set; }
        public string? githubLink { get; set; }
        public string? deployedLink { get; set; }
        public string? completionDate { get; set; }
    }
}