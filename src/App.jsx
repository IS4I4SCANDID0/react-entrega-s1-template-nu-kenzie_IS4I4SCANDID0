import { useState } from "react";
import { FormValues } from "./components/form";
import { Header } from "./components/header";
import { ListValues } from "./components/listValues";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  console.log(listTransactions)
  function addToListTransactions(formData) {
    const newTransaction = {...formData, id: uuidv4() }

    setListTransactions([...listTransactions, newTransaction])
  } 

  function removeToListTransactions(transactionId) {
    const newTransactionList = listTransactions.filter(transaction => transaction.id !== transactionId)
    console.log(newTransactionList)
    setListTransactions(newTransactionList)
  }

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

  return (
    <>
      <Header />
      <main>
        <FormValues addToListTransactions={addToListTransactions} typeValues={typeValues} listTransactions={listTransactions} />
        <ListValues listTransactions={listTransactions} removeToListTransactions={removeToListTransactions} />
      </main>
    </>
  );
}

export default App;
