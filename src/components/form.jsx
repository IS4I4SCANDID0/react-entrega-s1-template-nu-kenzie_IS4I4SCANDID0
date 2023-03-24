import { useState } from "react";
import { TotalMoney } from "./totalMoney";

export function FormValues({ typeValues, addToListTransactions, listTransactions }) {
  
  const [formData, setFormData] = useState({
    description: "",
    transactionValue: "",
    negotiationType: "",
  }) 
  
  function submitForm(event) {
    event.preventDefault()
    formData.transactionValue = parseFloat (formData.transactionValue)
    addToListTransactions(formData)
  }
  
  
  return (
    <>
      <section className="spendingContainer">
        <form onSubmit={ submitForm }>
          <label className="mainLabel" htmlFor="description">
            Descrição
          </label>
          <input
            placeholder="Digite aqui sua descrição"
            type="text"
            value={formData.description}
            onChange={(event) => setFormData({ ...formData, description: event.target.value })}
          />
          <span>Ex: Compra de Roupas</span>
          <label className="mainLabel" htmlFor="value">
            Valor (R$)
          </label>
          <input
            placeholder="R$ 1,00"
            type="number" 
            value={formData.transactionValue}
            onChange={(event) => setFormData({ ...formData, transactionValue: event.target.value })}
          />
          <label className="mainLabel" htmlFor="inputValue/outputValue">
            Tipo de valor
          </label>
          <select
            value={formData.negotiationType}
            onChange={(event) => setFormData({ ...formData, negotiationType: event.target.value })}
          >
            <option value="">Escolha o tipo de transação</option>
            {typeValues.map(typeValue => (
              <option key={typeValue.transaction} value={typeValue.transaction}>{typeValue.label}</option>
            ))}
          </select>
          <button type="submit">Inserir valor</button>
        </form>
        <TotalMoney listTransactions={listTransactions} />
      </section>
    </>
  );
}
