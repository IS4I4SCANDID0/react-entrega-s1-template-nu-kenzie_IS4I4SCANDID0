import { TotalMoney } from "./totalMoney";

export function FormValues({ setListTransactions, listTransactions }) {
  
  return (
    <>
      <section className="spendingContainer">
        <form
          onSubmit={(event) => {
            event.preventDefault();

            setListTransactions([
              {
                description: "",
                transactionValue: "",
                negotiationType: "",
              },
              console.log(listTransactions),
            ]);
          }}
        >
          <label className="mainLabel" htmlFor="description">
            Descrição
          </label>
          <input
            placeholder="Digite aqui sua descrição"
            type="text"
            value={listTransactions.description}
            onChange={(event) => setListTransactions({ ...listTransactions, description: event.target.value })}
          />
          <span>Ex: Compra de Roupas</span>
          <label className="mainLabel" htmlFor="value">
            Valor (R$)
          </label>
          <input
            placeholder="R$ 1,00"
            type="text"
            value={listTransactions.transactionValue}
            onChange={(event) => setListTransactions({ ...listTransactions, transactionValue: event.target.value })}
          />
          <label className="mainLabel" htmlFor="inputValue/outputValue">
            Tipo de valor
          </label>
          <select
            value={listTransactions.negotiationType}
            onChange={(event) => setListTransactions({ ...listTransactions, negotiationType: event.target.value })}
          >
            <option value="">Escolha o tipo de transação</option>
            <option value="Entrada">Entrada</option>
          </select>
          <button type="submit">Inserir valor</button>
        </form>
        <TotalMoney />
      </section>
    </>
  );
}
 // *** CORRIGIR O BUG COM PROPRIEDADE KEY DOS INPUTS *** //