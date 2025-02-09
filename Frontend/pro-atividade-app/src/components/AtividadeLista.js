import { useState, useEffect } from 'react'
import AtividadeForm from './AtividadeForm';
import Atividade from './Atividade';

export default function AtividadeLista() {
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });
  const [index , setIndex] = useState(0);

  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) : setIndex(Math.max(...atividades.map(ativ => ativ.id)) + 1);
  }, [atividades]);

  function addAtividade(atividade){    
    setAtividades([...atividades, 
      {...atividade, id: index}]);
    setAtividade({ id: 0});
  }

  function atualizarAtividade(atividade){
    const atividadesAtualizadas = atividades.map(ativ => ativ.id === atividade.id ? atividade : ativ);
    setAtividades([...atividadesAtualizadas]);
    setAtividade({ id: 0});
  }

  function cancelarAtividade(){
    setAtividade({ id: 0});
  }

  function removeAtividade(id){
    const atividadesFiltradas = atividades.filter(ativ => ativ.id !== id);
    setAtividades([...atividadesFiltradas]);
  }
 
  function pegarAtividade(id){
    const atividade = atividades.filter(ativ => ativ.id === id);
    setAtividade(atividade[0]);
  }
  
  return (
    <>    
      <AtividadeForm addAtividade={addAtividade} atualizarAtividade={atualizarAtividade} cancelarAtividade={cancelarAtividade} atividades={atividades} atividadeSelecionada={atividade} />
      <div className="mt-3">
          {atividades.map((ativ) => (
            <Atividade key={ativ.id} ativ={ativ} removeAtividade={removeAtividade} pegarAtividade={pegarAtividade}/>
          ))}
      </div>
    </>
  )
}
