using KVIPSR_RAIPUR.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace KVIPSR_RAIPUR.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult fee_structure()
        {
            return View();
        }
        public IActionResult admission_criteria()
        {
            return View();
        }
        public IActionResult contact_us()
        {
            return View();
        }
        public IActionResult gallery()
        {
            return View();

        }
        public IActionResult syllabus()
        {
            return View();
        }
        public IActionResult facilities()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
