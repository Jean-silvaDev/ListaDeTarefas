using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.Model;

namespace ProAtividade.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        public IEnumerable<Atividade> Atividades = new List<Atividade> {
            new Atividade(1),
            new Atividade(2),
            new Atividade(3)
        };

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return this.Atividades;
        }
        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return this.Atividades.FirstOrDefault(atividade => atividade.Id == id);
        }
        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            return this.Atividades.Append<Atividade>(atividade);
        }

        [HttpPut("{id}")]
        public string Put(int id, Atividade atividade)
        {
            return $"Meu primerio PUT com id = {id}!\nAtividade: {atividade.Titulo}";
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Meu primerio DELETE com id = {id}!";
        }
    }
}