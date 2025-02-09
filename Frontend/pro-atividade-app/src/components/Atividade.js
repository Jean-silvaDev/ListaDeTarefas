import React from 'react'

function prioridade(prioridade) {
  switch (prioridade) {
    case '1':
      return 'Baixa';
    case '2':
      return 'Normal';
    case '3':
      return 'Alta';
    default:
      return 'Prioridade não definida';
  }
}

function prioridadeIcon(prioridade) {
  switch (prioridade) {
    case '1':
      return 'frown';
    case '2':
      return 'meh';
    case '3':
      return "smile";
    default:
      return 'kiss';
  }
}
function prioridadeColor(prioridade) {
  switch (prioridade) {
    case '1':
      return "text-success";
    case '2':
      return "text-dark";
    case '3':
      return "text-warning";
    default:
      return "text-primary";
  }
}
function borderColor(prioridade) {
  let border = "border border-";
  switch (prioridade) {
    case '1':
      border = border.concat("success");
      break;
    case '2':
      border = border.concat("dark");
      break;
    case '3':
      border = border.concat("warning");
      break;
    default:
      border = border.concat("primary");
  }
  return border;
}

export default function Atividades(props) {
  return (
    <div key={props.ativ.id} className={"card mb-2 shadow-sm " + borderColor(props.ativ.prioridade)}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge text-bg-secondary me-1">{props.ativ.id}</span>
            - {props.ativ.titulo}
          </h5>
          <h6>
            Prioridade:
            <span className="ms-1">
              <i className={"fa-regular fa-face-" + prioridadeIcon(props.ativ.prioridade) + " me-1 " + prioridadeColor(props.ativ.prioridade)}></i>
              <span className={prioridadeColor(props.ativ.prioridade)}>{prioridade(props.ativ.prioridade)}</span>
            </span>
          </h6>
        </div>
        <p className="card-text">{props.ativ.id} - {props.ativ.descricao}</p>
        <div className="d-flex justify-content-end border-top pt-2 m-0">
          <button className="btn btn-sm btn-outline-primary me-2" onClick={() => props.pegarAtividade(props.ativ.id)}>
            <i className='fas fa-pen me-2'></i>
            Editar
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => props.removeAtividade(props.ativ.id)}>
            <i className='fas fa-trash me-2'></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}
