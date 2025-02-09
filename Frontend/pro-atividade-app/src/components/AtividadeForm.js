import { useState, useEffect } from 'react'

const atividadeInicial = {
  id: 0,
  titulo: '',
  descricao: '',
  prioridade: 0
}

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual());

  useEffect(() => {
    if (props.atividadeSelecionada.id !== 0)
      setAtividade(props.atividadeSelecionada);
    else
      setAtividade(atividadeInicial);
  }, [props.atividadeSelecionada]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setAtividade({ ...atividade, [name]: value });
  };

  function atividadeAtual() {
    if (props.atividadeSelecionada.id !== 0) {
      return props.atividadeSelecionada;
    } else {
      return atividadeInicial;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.atividadeSelecionada.id !== 0) {
      props.atualizarAtividade(atividade);
    } else {
      props.addAtividade(atividade);
    }
    setAtividade(atividadeInicial);
  }

  const handleCancelar = (e) => {
    e.preventDefault();

    props.cancelarAtividade();

    setAtividade(atividadeInicial);
  }

  return (
    <>
      <h1>Atividades {atividade.id !== 0 ? atividade.id : ''}</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input name="titulo" id="titulo" value={atividade.titulo} onChange={inputTextHandler} type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="prioridade" className="form-label">Prioridade</label>
          <select name="prioridade" id="prioridade" value={atividade.prioridade} onChange={inputTextHandler} className="form-select">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Média</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <textarea name="descricao" id="descricao" value={atividade.descricao} onChange={inputTextHandler} type="text" className="form-control" />
        </div>
        < hr />
        <div className="col-12 mt-0">
          {
            atividade.id === 0 ? (
              <button className="btn btn-outline-secondary" type="submit" >
                <i className='fas fa-plus me-2'></i>
                Atividade
              </button>
            )
              :
              (<>
                <button className="btn btn-outline-success me-2" type="submit" >
                  <i className='fas fa-plus me-2'></i>
                  Salvar
                </button>
                <button className="btn btn-outline-warning" onClick={handleCancelar} >
                  <i className='fas fa-plus me-2'></i>
                  Cancelar
                </button>
              </>
              )
          }
        </div>
      </form>
    </>
  )
}
