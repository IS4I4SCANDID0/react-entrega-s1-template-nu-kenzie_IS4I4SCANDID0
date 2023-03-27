import { useState } from "react";
import { FormValues } from "./components/form";
import { Header } from "./components/header";
import { ListValues } from "./components/listValues";
import { v4 as uuidv4 } from 'uuid';
import "./styles/reset.css" 
import "./styles/globalStyles.css" 
import "./styles/header.css"
import "./styles/index.css"
import "./styles/form.css"

function App() {
  const [listTransactions, setListTransactions] = useState([]);
 
  const typeValues = [
    {
      label: "Entrada",
      transaction: "entrada" ,
    },
    
    {
      label: "Despesa",
      transaction: "despesa",
    }
  ]

  const earnings = listTransactions.filter(transaction => transaction.negotiationType === "entrada")

  const totalEarnings = earnings.reduce((acc, negotiation) => {

    return acc + negotiation.transactionValue;
  }, 0)

  const debts = listTransactions.filter(transaction => transaction.negotiationType === "despesa")

  const totalDebts = debts.reduce((acc, negotiation) => {
    
    return acc + negotiation.transactionValue;
  }, 0)

  const totalValue = totalEarnings - totalDebts

  function addToListTransactions(formData) {
    const newTransaction = {...formData, id: uuidv4() }

    setListTransactions([...listTransactions, newTransaction])
  } 

  function removeToListTransactions(transactionId) {
    const newTransactionList = listTransactions.filter(transaction => transaction.id !== transactionId)
  
    setListTransactions(newTransactionList)
  }

  return (
    <>
      <Header />
      <main className="container">
        <FormValues addToListTransactions={addToListTransactions} typeValues={typeValues} listTransactions={listTransactions} totalValue={totalValue} />
        <ListValues listTransactions={listTransactions} removeToListTransactions={removeToListTransactions} />
      </main>
    </>
  );
}

export default App;
