using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS.Core;
using ProAtividade.Model;
using ProAtividade.Repository;

namespace ProAtividade.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public AtividadeController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return _dataContext.Atividades;
        }
        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return _dataContext.Atividades.FirstOrDefault(atividade => atividade.Id == id);
        }
        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            _dataContext.Atividades.Add(atividade);

            if (_dataContext.SaveChanges() > 0)
                return _dataContext.Atividades;
            throw new Exception("Erro ao incluir atividade!");
        }

        [HttpPut("{id}")]
        public void Put(int id, Atividade atividade)
        {
            var atividadeExistente = _dataContext.Atividades.FirstOrDefault(atv => atv.Id == id);

            if (atividadeExistente is not null)
            {
                _dataContext.Entry(atividadeExistente).State = Microsoft.EntityFrameworkCore.EntityState.Detached; // Desanexa a antiga

                _dataContext.Update(atividade);

                if (_dataContext.SaveChanges() > 0)
                {
                    return;
                }
            }

            throw new Exception("Atividade não encontrada!");
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Atividade atividade = _dataContext.Atividades.FirstOrDefault(atividade => atividade.Id == id);
            if (atividade is not null)
            {
                _dataContext.Remove(atividade);
                if (_dataContext.SaveChanges() > 0)
                {
                    return;
                }
            }

            throw new Exception("Atividade não encontrada!");
        }
    }
}