using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Model.Enums;

namespace ProAtividade.Model
{
    public class Atividade
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public Prioridade Prioridade { get; set; }
        public string Descricao { get; set; }

        public Atividade() { }
        public Atividade(int id) => this.Id = id;
    }
}