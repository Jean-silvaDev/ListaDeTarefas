using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProAtividade.Model;

namespace ProAtividade.Repository
{
    public class DataContext : DbContext
    {
        public DbSet<Atividade> Atividades { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    }
}