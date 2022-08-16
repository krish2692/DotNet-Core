using WebApi.Models;
using Microsoft.AspNetCore.Mvc;
 
namespace WebApi.Controllers;
[ApiController]
[Route("api/[controller]")]
public class CharacterController: ControllerBase
{
   private static Character knight=new Character();
   
   [HttpGet]
   public ActionResult<Character> Get()
   {
        return knight;
   }
}