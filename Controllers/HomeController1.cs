using KVIPSR_RAIPUR.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace KVIPSR_RAIPUR.Controllers
{ public class FacilitiesController : Controller
    {
        private readonly ILogger<FacilitiesController> _logger;

        public FacilitiesController(ILogger<FacilitiesController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }