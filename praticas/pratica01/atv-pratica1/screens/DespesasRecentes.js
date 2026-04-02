import { useContext } from 'react';
import DespesaSaida from '../components/despesa/DespesaSaida';
import { DespesasContext } from '../store/despesas-context';

function filtrarUltimos7Dias(despesas) {
  const hoje = new Date();
  const seteDiasAtras = new Date();
  seteDiasAtras.setDate(hoje.getDate() - 7);

  return despesas.filter(despesa => {
    return despesa.data >= seteDiasAtras && despesa.data <= hoje;
  });
}

function DespesasRecentes() {
  const despesasCtx = useContext(DespesasContext);
  const despesasFiltradas = filtrarUltimos7Dias(despesasCtx.despesas);

  return (
    <DespesaSaida despesas={despesasFiltradas} periodo={'Últimos 7 dias'}/>
  );
}

export default DespesasRecentes;