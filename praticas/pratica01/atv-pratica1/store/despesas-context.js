import { createContext, useState } from 'react';

export const DespesasContext = createContext({
  despesas: [],
  adicionarDespesa: ({ descricao, valor, data }) => {},
});

function DespesasContextProvider({ children }) {
  // Coloquei seus dados dummy aqui para a lista não começar vazia!
  const [despesasState, setDespesasState] = useState([
    { id: '1', descricao: 'Conta de luz', valor: 100.99, data: new Date(2025, 2, 11) },
    { id: '2', descricao: 'Conta de Agua', valor: 40.99, data: new Date(2025, 4, 10) }
  ]);

  function adicionarDespesa(despesaData) {
    setDespesasState((despesasAtuais) => {
      const id = Math.random().toString(); // Gera um ID aleatório simples
      return [{ ...despesaData, id: id }, ...despesasAtuais];
    });
  }

  return (
    <DespesasContext.Provider value={{ despesas: despesasState, adicionarDespesa }}>
      {children}
    </DespesasContext.Provider>
  );
}

export default DespesasContextProvider;